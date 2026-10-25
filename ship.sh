#!/bin/bash
set -euo pipefail

echo "=== [1/4] Installing locked dependencies & running tests ==="
npm ci --no-audit --no-fund
npm test

echo "=== [2/4] Syncing second-brain content & building Astro SSG ==="
npm run build

if [ ! -f "dist/index.html" ] || [ ! -f "dist/k8s/index.html" ]; then
  echo "ERROR: Build verification failed (missing dist/index.html or dist/k8s/index.html)"
  exit 1
fi

echo "=== [3/4] Deploying dist/ to /var/www/thio.dev/ ==="
rsync -avz --delete dist/ /var/www/thio.dev/

echo "=== [4/4] Smoke-checking the live site ==="
scripts/smoke-check.sh || { echo "ERROR: deployed, but the live site failed the smoke check"; exit 1; }

echo "=== Deployment complete ==="
