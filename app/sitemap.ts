import type { MetadataRoute } from 'next';
import { productSlugs } from '@/data/product-pages';

const BASE_URL = 'https://barodaequip.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
  ];

  const productPages: MetadataRoute.Sitemap = productSlugs.flatMap((slug) => [
    {
      url: `${BASE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/${slug}/projects`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]);

  return [...staticPages, ...productPages];
}
