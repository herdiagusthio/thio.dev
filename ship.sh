#!/bin/bash
set -e

# Promotion (Goder placeholder/logic)
echo "Promoting..."
# Goder promotion logic would go here

# Build
echo "Building..."
npm run build

# Deploy (Sysca/Local)
echo "Deploying..."
rsync -avz --delete dist/ /var/www/thio.dev/

echo "Done."
