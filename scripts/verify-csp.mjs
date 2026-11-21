import fs from 'node:fs';
import path from 'node:path';
import { transform } from '@astrojs/compiler-rs';

const ASTRO_FRONTMATTER_RE = /^\s*---[\s\S]*?---/;
const SCRIPT_BLOCK_RE = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const STYLE_BLOCK_RE = /<style\b[^>]*>[\s\S]*?<\/style>/gi;
const HTML_COMMENT_RE = /<!--[\s\S]*?-->/g;

const SCRIPT_INLINE_ATTR_RE = /<script\b[^>]*\bis:inline\b[^>]*>/i;
const SCRIPT_TAG_RE = /<script\b([^>]*)>/gi;
const LD_JSON_TYPE_RE = /\btype\s*=\s*["']application\/ld\+json["']/i;
const INLINE_HANDLER_TAG_RE = /<([a-z][a-z0-9-]*)\b[^>]*\s+(on[a-z]+)\s*=/i;
const ASTRO_DYNAMIC_HANDLER_RE = /\$\$addAttribute\([^,]+,\s*["'](on[a-z]+)["']\)/i;

function collectAstroFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectAstroFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.astro')) {
      files.push(fullPath);
    }
  }
  return files.sort();
}

function stripNonMarkupSections(source) {
  return source
    .replace(ASTRO_FRONTMATTER_RE, '')
    .replace(SCRIPT_BLOCK_RE, '')
    .replace(STYLE_BLOCK_RE, '')
    .replace(HTML_COMMENT_RE, '');
}

/**
 * Verify that all `.astro` files under `srcDir` use only Astro-hoisted module scripts
 * (or non-executable `application/ld+json` blocks) and zero inline `on*=` attributes.
 */
export function verifyAstroSourceScripts(srcDir = 'src') {
  if (!fs.existsSync(srcDir) || !fs.statSync(srcDir).isDirectory()) {
    throw new Error(`Astro source directory not found: ${srcDir}`);
  }

  const astroFiles = collectAstroFiles(srcDir);
  if (astroFiles.length === 0) {
    throw new Error(`No .astro files found under: ${srcDir}`);
  }

  for (const filePath of astroFiles) {
    const source = fs.readFileSync(filePath, 'utf8');
    const result = transform(source, { filename: filePath });

    if (SCRIPT_INLINE_ATTR_RE.test(source)) {
      throw new Error(`${filePath}: disallowed <script is:inline> found; use a hoisted <script> module instead`);
    }

    for (const match of result.code.matchAll(SCRIPT_TAG_RE)) {
      const attrs = match[1] ?? '';
      if (!LD_JSON_TYPE_RE.test(attrs)) {
        throw new Error(`${filePath}: unhoisted executable ${match[0]} found in compiled Astro output`);
      }
    }

    const staticInCompiled = result.code.match(INLINE_HANDLER_TAG_RE);
    if (staticInCompiled) {
      throw new Error(`${filePath}: disallowed inline event handler attribute ${staticInCompiled[2]}= on <${staticInCompiled[1]}>`);
    }

    const dynamicInCompiled = result.code.match(ASTRO_DYNAMIC_HANDLER_RE);
    if (dynamicInCompiled) {
      throw new Error(`${filePath}: disallowed dynamic inline event handler attribute ${dynamicInCompiled[1]}=`);
    }

    const markupOnly = stripNonMarkupSections(source);
    const staticInSource = markupOnly.match(INLINE_HANDLER_TAG_RE);
    if (staticInSource) {
      throw new Error(`${filePath}: disallowed inline event handler attribute ${staticInSource[2]}= on <${staticInSource[1]}>`);
    }
  }

  return { filesChecked: astroFiles.length };
}
