#!/bin/bash
# setup-ssl.sh

# Create directories if they don't exist
mkdir -p certbot/www
mkdir -p certbot/conf
mkdir -p nginx/ssl

# Generate self-signed certificate
openssl req -x509 -nodes -newkey rsa:4096 \
    -keyout nginx/ssl/dummy.key \
    -out nginx/ssl/dummy.crt \
    -days 365 \
    -subj "/CN=devfest.gdgkolachi.com"

# Set proper permissions
chmod 755 -R certbot nginx/ssl
chmod 644 nginx/ssl/dummy.crt nginx/ssl/dummy.key

# Start with basic configuration
docker-compose down
docker-compose up -d web

echo "Waiting for nginx to start..."
sleep 10

# Request Let's Encrypt certificate
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email your-email@domain.com \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d devfest.gdgkolachi.com

# Check if certificate was obtained
if [ -f "certbot/conf/live/devfest.gdgkolachi.com/fullchain.pem" ]; then
    echo "Certificate obtained successfully!"
    
    # Update nginx configuration to use Let's Encrypt certificate
    cat > nginx/nginx.conf << 'EOL'
server {
    listen 80;
    listen [::]:80;
    server_name devfest.gdgkolachi.com;
    server_tokens off;

    location /.well-known/acme-challenge/ {
        allow all;
        root /var/www/certbot;
        try_files $uri =404;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name devfest.gdgkolachi.com;

    ssl_certificate /etc/letsencrypt/live/devfest.gdgkolachi.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/devfest.gdgkolachi.com/privkey.pem;

    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
        
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 30d;
            add_header Cache-Control "public, no-transform";
        }
    }
}
EOL

    # Restart nginx to apply new configuration
    docker-compose restart web
    echo "SSL setup complete!"
else
    echo "Certificate not obtained. Check the logs:"
    docker-compose logs certbot
fi