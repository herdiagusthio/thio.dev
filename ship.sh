#!/bin/bash
set -euo pipefail

echo "=== [1/3] Installing locked dependencies & running tests ==="
npm ci --no-audit --no-fund
npm test

echo "=== [2/3] Syncing second-brain content & building Astro SSG ==="
npm run build

if [ ! -f "dist/index.html" ] || [ ! -f "dist/k8s/index.html" ]; then
  echo "ERROR: Build verification failed (missing dist/index.html or dist/k8s/index.html)"
  exit 1
fi

echo "=== [3/3] Deploying dist/ to /var/www/thio.dev/ ==="
rsync -avz --delete dist/ /var/www/thio.dev/

echo "=== Deployment complete ==="
