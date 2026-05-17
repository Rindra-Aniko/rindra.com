import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";
import styles from "./single-article.module.css";

/**
 * Generate dynamic SEO metadata from database
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const results = await db
    .select()
    .from(articles)
    .where(eq(articles.slug, slug))
    .limit(1);

  const article = results[0];

  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt || `Baca artikel "${article.title}" di rindra.com`,
    openGraph: {
      title: article.title,
      description: article.excerpt || `Baca artikel "${article.title}" di rindra.com`,
      type: "article",
      publishedTime: article.createdAt,
      siteName: "Rindra.com",
    },
  };
}

/**
 * Pre-render all known slugs at build time
 */
export async function generateStaticParams() {
  const allArticles = await db.select({ slug: articles.slug }).from(articles);
  return allArticles.map((a) => ({ slug: a.slug }));
}

/**
 * Convert plain text content to paragraphs
 */
function renderContent(content) {
  if (!content) return null;
  return content
    .split("\n\n")
    .filter((p) => p.trim())
    .map((paragraph, i) => <p key={i}>{paragraph.trim()}</p>);
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const results = await db
    .select()
    .from(articles)
    .where(eq(articles.slug, slug))
    .limit(1);

  const article = results[0];

  if (!article) {
    notFound();
  }

  return (
    <article className={styles.article} id="article-detail">
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>
          Beranda
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <Link href="/artikel" className={styles.breadcrumbLink}>
          Artikel
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className={styles.articleHeader}>
        <time className={styles.articleDate} dateTime={article.createdAt}>
          {new Date(article.createdAt).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className={styles.articleTitle}>{article.title}</h1>
        {article.excerpt && (
          <p className={styles.articleExcerpt}>{article.excerpt}</p>
        )}
      </header>

      {/* Article Body */}
      <div className={styles.articleBody}>{renderContent(article.content)}</div>

      {/* Back Link */}
      <div className={styles.backSection}>
        <Link href="/artikel" className={styles.backLink}>
          <span className={styles.backArrow}>←</span>
          Kembali ke Daftar Artikel
        </Link>
      </div>
    </article>
  );
}
