#!/bin/bash

# ssl-setup.sh
domains=(devfest.gdgkolachi.com)
email="hello@gdgkolachi.com" # Change this to your email
staging=0 # Set to 1 if you want to test configuration

# Make sure all required directories exist
mkdir -p certbot/conf/live/devfest.gdgkolachi.com
mkdir -p certbot/www

# Stop any running containers
docker-compose down

# Remove any existing certificates
rm -rf ./certbot/conf/*

# Start nginx without SSL first
docker-compose up -d web

# Wait for nginx to start
echo "Waiting for nginx to start..."
sleep 5

# Request the certificate
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $email \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d devfest.gdgkolachi.com

# Check certificate files
if [ -f "./certbot/conf/live/devfest.gdgkolachi.com/fullchain.pem" ]; then
    echo "Certificate obtained successfully!"
    
    # Set proper permissions
    chmod -R 755 ./certbot/conf
    
    # Restart nginx to apply SSL configuration
    docker-compose restart web
    
    echo "SSL setup complete! Testing SSL connection..."
    sleep 5
    curl -k https://devfest.gdgkolachi.com
else
    echo "Certificate not found. Something went wrong."
    echo "Checking certbot logs:"
    docker-compose logs certbot
fi