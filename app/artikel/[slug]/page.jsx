import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";
import styles from "./single-article.module.css";

export const revalidate = 3600;

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

  const baseUrl = "https://ryndigitalpro.com";
  let ogImages = [];

  if (article.imageUrl) {
    let imageUrl = article.imageUrl;
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      // Sudah berupa URL absolut
    } else if (imageUrl.startsWith("/")) {
      imageUrl = `${baseUrl}${imageUrl}`;
    } else {
      imageUrl = `${baseUrl}/${imageUrl}`;
    }
    ogImages = [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: article.title,
      },
    ];
  } else {
    // Default fallback jika artikel tidak memiliki gambar sampul
    ogImages = [
      {
        url: `${baseUrl}/asset/hero_rindra.webp`,
        width: 1200,
        height: 630,
        alt: article.title,
      },
    ];
  }

  const description = article.metaDescription || article.excerpt || `Baca artikel "${article.title}" di ryndigitalpro.com`;

  return {
    title: article.title,
    description: description,
    openGraph: {
      title: article.title,
      description: description,
      type: "article",
      publishedTime: article.createdAt,
      siteName: "Rindra Aniko",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description,
      images: ogImages.map((img) => img.url),
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
  
  // Check if content contains block HTML tags
  const hasHTMLBlocks = /<p>|<h2>|<h3>|<ul>|<ol>|<blockquote>|<hr\s*\/?>/.test(content);
  
  if (hasHTMLBlocks) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
  
  // Legacy plain-text fallback: split by double newlines into paragraphs, and handle single newlines as line breaks.
  return content
    .split("\n\n")
    .filter((p) => p.trim())
    .map((paragraph, i) => (
      <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.trim().replace(/\n/g, "<br />") }} />
    ));
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
        <time className={styles.articleDate} dateTime={article.createdAt} suppressHydrationWarning>
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

      {/* Article Image Banner */}
      {article.imageUrl && (
        <Image
          src={article.imageUrl}
          alt={article.title}
          className={styles.bannerImage}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      )}

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
