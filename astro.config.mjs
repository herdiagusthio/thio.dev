// @ts-check
import { defineConfig } from 'astro/config';

// Base path handling for GitHub Pages:
//  - Custom domain (thio.dev)         -> BASE_PATH unset, base '/'
//  - Project page (user.github.io/thio.dev) -> set BASE_PATH=/thio.dev in CI
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://thio.dev';

export default defineConfig({
  site,
  base,
});
