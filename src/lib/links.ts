import { getCollection } from 'astro:content';

/**
 * Resolves semantic links found in frontmatter.
 * Links can be slugs in the format 'collection:slug' or just 'slug' (assumes same collection).
 */
export async function resolveLinks(links: string[], currentCollection: string) {
  const resolved = await Promise.all(links.map(async (link) => {
    let [collection, slug] = link.includes(':') ? link.split(':') : [currentCollection, link];
    
    // Validate collection exists
    const entry = await getCollection(collection as any, ({ slug: s }) => s === slug);
    if (entry.length > 0) {
      return {
        title: entry[0].data.title,
        url: `/${collection}/${slug}`,
        type: collection
      };
    }
    return null;
  }));

  return resolved.filter(Boolean);
}
