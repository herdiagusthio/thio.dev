// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';

// Single source of the public origin: canonical URLs, JSON-LD, sitemap and the office API host
// (api.<site host>) all derive from it. Override with SITE_URL when the domain moves.
const site = process.env.SITE_URL || 'https://thio.103.217.144.64.nip.io';

// The page renders the title from frontmatter, so drop the body's first H1.
/** @type {import('satteri').MdastPluginDefinition} */
const stripFirstH1 = {
  name: 'strip-first-h1',
  before(root, ctx) {
    const h1 = root.children.find((node) => node.type === 'heading' && node.depth === 1);
    if (h1) ctx.removeNode(h1);
  },
};

export default defineConfig({
  site,
  // Case studies merged into their fuller versions in second-brain; keep the old URLs working.
  redirects: {
    '/showcase/scatter-gather-aggregation': '/showcase/gold-standard-flight-aggregation',
    '/showcase/primitive-obsession-hexagonal': '/showcase/gold-standard-hexagonal-refactor',
    '/showcase/atomic-guest-sync': '/showcase/atomic-consistency-sync',
  },
  // Self-hosted from src/assets/fonts (OFL-1.1, licenses alongside): no request to Google, at build
  // time or in the browser. One variable woff2 per family; the discrete weights match the old Google
  // Fonts link, so text renders as before. Normal styles only (prose italics stay synthesized).
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Outfit',
      cssVariable: '--font-sans',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/outfit-latin.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/outfit-latin.woff2'], weight: 600, style: 'normal' },
          { src: ['./src/assets/fonts/outfit-latin.woff2'], weight: 800, style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      fallbacks: ['monospace'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/jetbrains-mono-latin.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/jetbrains-mono-latin.woff2'], weight: 600, style: 'normal' },
        ],
      },
    },
  ],
  // Canonical URLs have no trailing slash; list the same URLs in the sitemap.
  integrations: [sitemap({ serialize: (item) => ({ ...item, url: item.url.replace(/(.)\/$/, '$1') }) })],
  markdown: {
    // Match the previous marked output: no curly quotes, no Shiki colors.
    processor: satteri({ mdastPlugins: [stripFirstH1], features: { smartPunctuation: false } }),
    syntaxHighlight: false,
  },
});
