import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const postsEn = await getCollection('blog_en', (p) => !p.data.draft);
  const postsDe = await getCollection('blog_de', (p) => !p.data.draft);

  // Combine and sort all published posts
  const allPosts = [...postsEn, ...postsDe].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'CORE Attorneys – News & Insights',
    description:
      'Current developments in competition law, regulatory matters and distribution law from CORE Attorneys, Zurich.',
    site: context.site ?? 'https://www.core-attorneys.com',
    items: allPosts.map((post) => {
      const isEn = post.collection === 'blog_en';
      const slug = post.slug.split('/').pop() ?? post.slug;
      const locale = isEn ? 'en' : 'de';
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/${locale}/news/${slug}/`,
      };
    }),
    customData: `<language>de-CH</language>`,
  });
}
