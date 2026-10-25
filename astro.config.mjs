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
  // Downloaded at build time and served from this site, so pages make no requests to Google.
  // Normal styles only, like the old Google Fonts link (prose italics stay synthesized).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Outfit',
      cssVariable: '--font-sans',
      weights: [400, 600, 800],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 600],
      styles: ['normal'],
      fallbacks: ['monospace'],
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
