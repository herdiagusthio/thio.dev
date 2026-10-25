// Pure Markdown text helpers for the content layer (no astro:* imports, so node:test can load them).

export function estimateReadingTime(text: string): number {
  const clean = text.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`~-]/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function stripMarkdownInline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .trim();
}

/** First paragraph under the first `## <heading>` matching one of `headings` (case-insensitive). */
export function sectionParagraph(body: string, headings: string[]): string | undefined {
  const match = body.match(new RegExp(`##\\s*(?:${headings.join('|')})\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i'));
  return match?.[1].trim().split(/\n\n+/)[0] || undefined;
}

/** First non-blank, non-heading line of the body. */
export function firstLine(body: string): string | undefined {
  return body.split('\n').map((l) => l.trim()).find((l) => l && !l.startsWith('#'));
}
