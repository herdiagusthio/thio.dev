#!/bin/bash
set -e
SLUG=$1
SITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [ -n "$SLUG" ]; then
  echo "Checking article: $SLUG..."
  if [ ! -f "$SITE_ROOT/../second-brain/knowledge/blog/$SLUG.md" ] && [ ! -f "$SITE_ROOT/../second-brain/knowledge/engineering/$SLUG.md" ]; then
    echo "Warning: Article $SLUG.md not found in second-brain/knowledge/blog/ or knowledge/engineering/"
  fi
fi

echo "Syncing content and verifying Astro build..."
cd "$SITE_ROOT"
npm run build

echo "✓ Build successful! All articles synced and static routes generated in dist/."

