// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// Base path handling for GitHub Pages:
//  - Custom domain (thio.dev)         -> BASE_PATH unset, base '/'
//  - Project page (user.github.io/thio.dev) -> set BASE_PATH=/thio.dev in CI
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://thio.dev';

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
  base,
  markdown: {
    // Match the previous marked output: no curly quotes, no Shiki colors.
    processor: satteri({ mdastPlugins: [stripFirstH1], features: { smartPunctuation: false } }),
    syntaxHighlight: false,
  },
});
