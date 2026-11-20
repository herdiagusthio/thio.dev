#!/bin/bash
# Smoke-check a deploy: every sitemap page and the non-page files must load from the live site,
# and the live homepage must be this build's dist/index.html (proves Caddy serves the new build).
# Usage: scripts/smoke-check.sh [base-url]   default: the origin in dist/robots.txt
set -euo pipefail
cd "$(dirname "$0")/.."

site=${1:-$(sed -nE 's#^Sitemap: (https?://[^/]+)/.*#\1#p' dist/robots.txt)}
site=${site%/}
# Resolve once and pin it: the VPS resolver sometimes stalls 5 s on nip.io names, which the 3 s connect
# timeout turned into random "HTTP 000" failures. This checks the web server, not the resolver.
host=${site#*://}
port=$([ "${site%%://*}" = http ] && echo 80 || echo 443)
ip=$(getent ahostsv4 "$host" | awk 'NR == 1 { print $1 }')
[ -n "$ip" ] || { echo "✗ cannot resolve $host"; exit 1; }
pin=(--resolve "$host:$port:$ip")
paths=$(grep -ho '<loc>[^<]*</loc>' dist/sitemap-[0-9]*.xml | sed -E 's#<loc>https?://[^/]+([^<]*)</loc>#\1#')
paths+=$'\n/rss.xml\n/robots.txt\n/sitemap-index.xml\n/k8s/\n/og-default.png\n/js/office3d.bundle.js'

checks=0
failed=0
for path in $paths; do
  checks=$((checks + 1))
  code=$(curl -sL "${pin[@]}" -o /dev/null --connect-timeout 3 --max-time 10 -w '%{http_code}' "$site$path") || true
  [ "$code" = 200 ] || { echo "  FAIL HTTP $code  $path"; failed=$((failed + 1)); }
done

checks=$((checks + 1))
curl -sL "${pin[@]}" --connect-timeout 3 --max-time 10 "$site/" | cmp -s - dist/index.html || { echo "  FAIL /  is not this build's dist/index.html"; failed=$((failed + 1)); }

if [ "$failed" -gt 0 ]; then
  echo "✗ $failed of $checks checks failed against $site"
  exit 1
fi
echo "✓ $checks checks passed against $site"
