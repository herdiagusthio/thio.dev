import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getEntries } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getEntries('blog');
  return rss({
    title: 'thio.dev — Engineering Blog & Reflections',
    description: 'Essays and engineering reflections by Herdi Agusthio on distributed Go systems, architecture and autonomous AI agents.',
    site: context.site!,
    trailingSlash: false, // match canonical URLs
    items: posts.map((post) => ({
      title: post.title,
      description: post.summaryText,
      pubDate: new Date(post.date),
      link: post.url,
      categories: post.tags,
    })),
  });
}
