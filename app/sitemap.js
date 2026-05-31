import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function sitemap() {
  const baseUrl = "https://ryndigitalpro.com";

  // Ambil semua artikel dari database untuk dimasukkan ke sitemap
  const allArticles = await db
    .select({ 
      slug: articles.slug, 
      createdAt: articles.createdAt 
    })
    .from(articles)
    .orderBy(desc(articles.createdAt));

  // Pemetaan URL dinamis untuk setiap artikel
  const articleUrls = allArticles.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: article.createdAt || new Date().toISOString().split('.')[0] + 'Z',
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Pemetaan URL statis utama
  const staticUrls = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString().split('.')[0] + 'Z',
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString().split('.')[0] + 'Z',
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/paket`,
      lastModified: new Date().toISOString().split('.')[0] + 'Z',
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portofolio`,
      lastModified: new Date().toISOString().split('.')[0] + 'Z',
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: new Date().toISOString().split('.')[0] + 'Z',
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...articleUrls];
}
