import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform } from '@astrojs/compiler-rs';

export const CSP_DIRECTIVES = [
  "default-src 'self'",
  "img-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
];

const ASTRO_FRONTMATTER_RE = /^\s*---[\s\S]*?---/;
const SCRIPT_BLOCK_RE = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const SCRIPT_CAPTURE_RE = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const STYLE_BLOCK_RE = /<style\b[^>]*>[\s\S]*?<\/style>/gi;
const HTML_COMMENT_RE = /<!--[\s\S]*?-->/g;

const SCRIPT_INLINE_ATTR_RE = /<script\b[^>]*\bis:inline\b[^>]*>/i;
const SCRIPT_TAG_RE = /<script\b([^>]*)>/gi;
const SCRIPT_SRC_ATTR_RE = /\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i;
const LD_JSON_TYPE_RE = /\btype\s*=\s*["']application\/ld\+json["']/i;
const INLINE_HANDLER_TAG_RE = /<([a-z][a-z0-9-]*)\b[^>]*\s+(on[a-z]+)\s*=/i;
const HTML_OPEN_TAG_RE = /<([a-z][a-z0-9-]*)\b([^>]*)>/gi;
const HTML_ATTR_RE = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
const META_TAG_RE = /<meta\b([^>]*)>/gi;
const TEMPLATE_INLINE_HANDLER_RE =
  /<(div|span|button|a|p|li|ul|ol|img|svg|input|form|section|article|header|footer|nav|main|aside|table|tr|td|th|label|select|option|textarea|h[1-6])\b[^;\n>]*?\s+(on[a-z]+)\s*=\s*["']/gi;
const SHA256_TOKEN_RE = /^'sha256-[A-Za-z0-9+/]+=*'$/;
const ASTRO_DYNAMIC_HANDLER_RE = /\$\$addAttribute\([^,]+,\s*["'](on[a-z]+)["']\)/i;

function collectFilesWithExtension(dirPath, extension) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFilesWithExtension(fullPath, extension));
    } else if (entry.isFile() && entry.name.endsWith(extension)) {
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

  const astroFiles = collectFilesWithExtension(srcDir, '.astro');
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

function decodeBasicHtmlEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function extractTagAttributes(attrSource) {
  const attrs = new Map();
  for (const match of attrSource.matchAll(HTML_ATTR_RE)) {
    const name = match[1].toLowerCase();
    const rawVal = match[2] ?? match[3] ?? match[4] ?? '';
    attrs.set(name, decodeBasicHtmlEntities(rawVal));
  }
  return attrs;
}

function arraysEqual(a, b) {
  return Array.isArray(a) && a.length === b.length && a.every((val, idx) => val === b[idx]);
}

const TARGET_DIRECTIVE_MAP = new Map([
  ...CSP_DIRECTIVES.map((entry) => {
    const [name, ...values] = entry.split(/\s+/);
    return [name.toLowerCase(), values];
  }),
  ['style-src', ["'self'", "'unsafe-inline'"]],
]);

/**
 * Compute the unquoted CSP `'sha256-...'` digest (returned as `sha256-<base64>`)
 * for the UTF-8 content of an inline script.
 */
export function sha256CspHash(text) {
  if (typeof text !== 'string') {
    throw new TypeError('sha256CspHash expects a string');
  }
  const digest = crypto.createHash('sha256').update(text, 'utf8').digest('base64');
  return `sha256-${digest}`;
}

/**
 * Extract and hash the single executable inline `<script>` from `public/k8s/index.html`.
 */
export function extractK8sScriptHash(k8sHtmlPath = 'public/k8s/index.html') {
  if (!fs.existsSync(k8sHtmlPath)) {
    throw new Error(`K8s HTML file not found: ${k8sHtmlPath}`);
  }
  const html = fs.readFileSync(k8sHtmlPath, 'utf8').replace(HTML_COMMENT_RE, '');
  const inlineBodies = [];
  for (const match of html.matchAll(SCRIPT_CAPTURE_RE)) {
    const attrs = match[1] ?? '';
    const body = match[2] ?? '';
    if (SCRIPT_SRC_ATTR_RE.test(attrs) || LD_JSON_TYPE_RE.test(attrs)) {
      continue;
    }
    inlineBodies.push(body);
  }
  if (inlineBodies.length !== 1) {
    throw new Error(
      `Expected exactly 1 executable inline <script> in ${k8sHtmlPath}, found ${inlineBodies.length}`,
    );
  }
  return sha256CspHash(inlineBodies[0]);
}

/**
 * Parse a Content-Security-Policy string into a directive -> tokens lookup object.
 */
export function parseCsp(policyText) {
  if (typeof policyText !== 'string') {
    throw new TypeError('parseCsp expects a string');
  }
  const directives = {};
  for (const rawSegment of policyText.split(';')) {
    const segment = rawSegment.trim();
    if (!segment) continue;
    const tokens = segment.split(/\s+/);
    const name = tokens[0].toLowerCase();
    const values = tokens.slice(1);
    if (values.length === 0) {
      throw new Error(`CSP directive "${name}" has no values`);
    }
    if (Object.hasOwn(directives, name)) {
      throw new Error(`Duplicate CSP directive "${name}"`);
    }
    directives[name] = values;
  }
  return directives;
}

/**
 * Validate a rendered HTML document against the target hash-based CSP policy.
 */
export function verifyHtmlCsp(html, filePath = '<html string>') {
  if (typeof html !== 'string') {
    throw new TypeError('verifyHtmlCsp expects an HTML string');
  }

  const errors = [];
  const uncommentedHtml = html.replace(HTML_COMMENT_RE, '');

  const markupOnly = uncommentedHtml.replace(SCRIPT_BLOCK_RE, '').replace(STYLE_BLOCK_RE, '');
  for (const tagMatch of markupOnly.matchAll(HTML_OPEN_TAG_RE)) {
    const tagName = tagMatch[1];
    const attrSource = tagMatch[2] ?? '';
    for (const attrMatch of attrSource.matchAll(HTML_ATTR_RE)) {
      const attrName = attrMatch[1].toLowerCase();
      if (/^on[a-z]+$/.test(attrName)) {
        errors.push(`disallowed inline event handler ${attrName}= on <${tagName}>`);
      }
    }
  }

  const inlineScriptHashes = [];
  let executableOrExternalScriptCount = 0;

  for (const scriptMatch of uncommentedHtml.matchAll(SCRIPT_CAPTURE_RE)) {
    const attrs = scriptMatch[1] ?? '';
    const body = scriptMatch[2] ?? '';

    if (LD_JSON_TYPE_RE.test(attrs)) {
      if (SCRIPT_SRC_ATTR_RE.test(attrs)) {
        errors.push('disallowed src attribute on <script type="application/ld+json">');
        continue;
      }
      try {
        const parsed = JSON.parse(body);
        if (parsed === null || typeof parsed !== 'object') {
          errors.push('invalid JSON in <script type="application/ld+json">');
        }
      } catch {
        errors.push('invalid JSON in <script type="application/ld+json">');
      }
      continue;
    }

    executableOrExternalScriptCount += 1;
    const srcMatch = attrs.match(SCRIPT_SRC_ATTR_RE);
    if (srcMatch) {
      const src = srcMatch[1] ?? srcMatch[2] ?? srcMatch[3] ?? '';
      if (!src.startsWith('/') || src.startsWith('//')) {
        errors.push(`external <script src="${src}"> must be same-origin (/...)`);
      }
      if (body.trim() !== '') {
        errors.push(`external <script src="${src}"> must not contain inline code`);
      }
      continue;
    }

    for (const handlerMatch of body.matchAll(TEMPLATE_INLINE_HANDLER_RE)) {
      errors.push(
        `disallowed inline event handler ${handlerMatch[2].toLowerCase()}= on <${handlerMatch[1]}> in <script> template`,
      );
    }

    inlineScriptHashes.push(sha256CspHash(body));
  }

  const cspMetas = [];
  let isRefreshRedirect = false;

  for (const metaMatch of uncommentedHtml.matchAll(META_TAG_RE)) {
    const attrs = extractTagAttributes(metaMatch[1] ?? '');
    const httpEquiv = (attrs.get('http-equiv') ?? '').trim().toLowerCase();
    if (httpEquiv === 'content-security-policy') {
      cspMetas.push(attrs);
    } else if (httpEquiv === 'refresh') {
      isRefreshRedirect = true;
    }
  }

  if (cspMetas.length === 0) {
    if (isRefreshRedirect && executableOrExternalScriptCount === 0) {
      if (errors.length > 0) {
        throw new Error(`${filePath}: ${errors.join('; ')}`);
      }
      return {
        isRedirect: true,
        directives: {},
        scriptHashes: [],
        inlineScriptHashes: [],
      };
    }
    errors.push('missing <meta http-equiv="content-security-policy"> tag');
    throw new Error(`${filePath}: ${errors.join('; ')}`);
  }

  if (cspMetas.length > 1) {
    errors.push('multiple <meta http-equiv="content-security-policy"> tags found');
  }

  let directives = {};
  const scriptHashes = [];
  const policyContent = cspMetas[0].get('content');

  if (!policyContent || !policyContent.trim()) {
    errors.push('CSP <meta> tag is missing a non-empty content attribute');
  } else {
    try {
      directives = parseCsp(policyContent);

      for (const [directiveName, expectedValues] of TARGET_DIRECTIVE_MAP.entries()) {
        const actualValues = directives[directiveName];
        if (!actualValues) {
          errors.push(`missing CSP directive "${directiveName}"`);
        } else if (!arraysEqual(actualValues, expectedValues)) {
          errors.push(
            `invalid CSP directive "${directiveName}": expected "${expectedValues.join(' ')}", got "${actualValues.join(' ')}"`,
          );
        }
      }

      if (directives['font-src'] !== undefined && !arraysEqual(directives['font-src'], ["'self'"])) {
        errors.push(
          `invalid CSP directive "font-src": expected "'self'", got "${directives['font-src'].join(' ')}"`,
        );
      }

      const scriptSrc = directives['script-src'];
      if (!scriptSrc) {
        errors.push('missing CSP directive "script-src"');
      } else {
        if (!scriptSrc.includes("'self'")) {
          errors.push('CSP directive "script-src" must include \'self\'');
        }
        if (scriptSrc.includes("'unsafe-inline'")) {
          errors.push('CSP directive "script-src" must not include \'unsafe-inline\'');
        }
        if (scriptSrc.includes("'unsafe-eval'")) {
          errors.push('CSP directive "script-src" must not include \'unsafe-eval\'');
        }
        for (const token of scriptSrc) {
          if (token === "'self'") continue;
          if (token === "'unsafe-inline'" || token === "'unsafe-eval'") continue;
          if (!SHA256_TOKEN_RE.test(token)) {
            errors.push(`invalid token "${token}" in CSP directive "script-src"`);
            continue;
          }
          scriptHashes.push(token.slice(1, -1));
        }
        for (const hash of inlineScriptHashes) {
          if (!scriptSrc.includes(`'${hash}'`)) {
            errors.push(`inline <script> hash '${hash}' missing from script-src`);
          }
        }
      }
    } catch (err) {
      errors.push(err instanceof Error ? err.message : String(err));
    }
  }

  if (errors.length > 0) {
    throw new Error(`${filePath}: ${errors.join('; ')}`);
  }

  return {
    isRedirect: false,
    directives,
    scriptHashes,
    inlineScriptHashes,
  };
}

/**
 * Format a single-line Caddy `header Content-Security-Policy "..."` directive
 * containing all unique `sha256-...` inline script hashes.
 */
export function formatCaddyCspHeader(hashes = []) {
  if (!Array.isArray(hashes)) {
    throw new TypeError('formatCaddyCspHeader expects an array of CSP hashes');
  }

  const uniqueHashes = [];
  const seen = new Set();
  for (const raw of hashes) {
    if (typeof raw !== 'string') {
      throw new TypeError('Invalid CSP hash entry: expected string');
    }
    const normalized = raw.trim().replace(/^'|'$/g, '');
    if (!SHA256_TOKEN_RE.test(`'${normalized}'`)) {
      throw new Error(`Invalid CSP hash token: "${raw}"`);
    }
    if (!seen.has(normalized)) {
      seen.add(normalized);
      uniqueHashes.push(normalized);
    }
  }

  const scriptSrc = ["'self'", ...uniqueHashes.map((h) => `'${h}'`)].join(' ');
  const policy = [
    ...CSP_DIRECTIVES,
    "font-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
  ].join('; ');

  return `header Content-Security-Policy "${policy}"`;
}

/**
 * Verify all built HTML pages in `distDir` against the hash-based CSP policy
 * and return aggregated verification stats plus the canonical Caddy header.
 */
export function verifyDistCsp(distDir = 'dist') {
  if (!fs.existsSync(distDir) || !fs.statSync(distDir).isDirectory()) {
    throw new Error(`Dist directory not found: ${distDir}`);
  }

  const requiredEntries = [
    path.join(distDir, 'index.html'),
    path.join(distDir, 'k8s', 'index.html'),
  ];
  for (const requiredPath of requiredEntries) {
    if (!fs.existsSync(requiredPath) || !fs.statSync(requiredPath).isFile()) {
      throw new Error(`Required HTML entry missing: ${requiredPath}`);
    }
  }

  const htmlFiles = collectFilesWithExtension(distDir, '.html');
  const allHashes = new Set();
  let redirectFiles = 0;

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, 'utf8');
    const result = verifyHtmlCsp(html, filePath);
    if (result.isRedirect) {
      redirectFiles += 1;
    }
    for (const hash of [...result.scriptHashes, ...result.inlineScriptHashes]) {
      allHashes.add(hash);
    }
  }

  const scriptHashes = [...allHashes];
  return {
    filesChecked: htmlFiles.length,
    redirectFiles,
    scriptHashes,
    caddyHeader: formatCaddyCspHeader(scriptHashes),
  };
}

/**
 * CLI entrypoint: verify source `.astro` files (when run with default `dist`) and all built HTML pages.
 */
export function main(argv = process.argv.slice(2)) {
  const distDir = argv[0] || 'dist';
  if (argv.length === 0 && fs.existsSync('src')) {
    verifyAstroSourceScripts('src');
  }
  const result = verifyDistCsp(distDir);
  console.log(`CSP verified across ${result.filesChecked} HTML files in ${distDir}`);
  console.log(result.caddyHeader);
  return result;
}

if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}
