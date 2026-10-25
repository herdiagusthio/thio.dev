#!/bin/bash
# Smoke-check a deploy: every sitemap page and the non-page files must load from the live site,
# and the live homepage must be this build's dist/index.html (proves Caddy serves the new build).
# Usage: scripts/smoke-check.sh [base-url]   default: the origin in dist/robots.txt
set -euo pipefail
cd "$(dirname "$0")/.."

site=${1:-$(sed -nE 's#^Sitemap: (https?://[^/]+)/.*#\1#p' dist/robots.txt)}
site=${site%/}
paths=$(grep -ho '<loc>[^<]*</loc>' dist/sitemap-[0-9]*.xml | sed -E 's#<loc>https?://[^/]+([^<]*)</loc>#\1#')
paths+=$'\n/rss.xml\n/robots.txt\n/sitemap-index.xml\n/k8s/\n/og-default.png\n/js/office3d.bundle.js'

checks=0
failed=0
for path in $paths; do
  checks=$((checks + 1))
  code=$(curl -sL -o /dev/null --connect-timeout 3 --max-time 10 -w '%{http_code}' "$site$path") || true
  [ "$code" = 200 ] || { echo "  FAIL HTTP $code  $path"; failed=$((failed + 1)); }
done

checks=$((checks + 1))
curl -sL --connect-timeout 3 --max-time 10 "$site/" | cmp -s - dist/index.html || { echo "  FAIL /  is not this build's dist/index.html"; failed=$((failed + 1)); }

if [ "$failed" -gt 0 ]; then
  echo "✗ $failed of $checks checks failed against $site"
  exit 1
fi
echo "✓ $checks checks passed against $site"
