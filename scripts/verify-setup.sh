#!/bin/bash
# verify-setup.sh

# Function to check if port is open
check_port() {
    local port=$1
    nc -zv localhost $port 2>&1
    return $?
}

# Function to check if firewall allows port
check_firewall() {
    local port=$1
    sudo ufw status | grep $port
}

# Function to verify domain resolves
check_domain() {
    local domain=$1
    dig +short $domain
}

# Check system status
echo "Checking system configuration..."

# Check if ports are open locally
echo "Checking local ports..."
check_port 80
check_port 443

# Check firewall status
echo "Checking firewall rules..."
check_firewall 80
check_firewall 443

# Check domain resolution
echo "Checking domain resolution..."
check_domain devfest.gdgkolachi.com

# Check if nginx is running
echo "Checking nginx status..."
docker-compose ps web

# Test the challenge path
echo "Testing ACME challenge path..."
curl -v http://localhost/.well-known/acme-challenge/test

# Print ports in use
echo "Checking ports in use..."
sudo netstat -tulpn | grep -E ':80|:443'

# Check SELinux if applicable
if command -v getenforce &> /dev/null; then
    echo "SELinux status:"
    getenforce
fi