import Link from "next/link";
import Image from "next/image";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";
import styles from "./articles.module.css";

export const metadata = {
  title: "Semua Artikel",
  description:
    "Jelajahi seluruh koleksi artikel naratif mendalam tentang sejarah dan peristiwa penting Indonesia di portal membaca rindra.com.",
  openGraph: {
    title: "Semua Artikel | Rindra.com",
    description:
      "Koleksi artikel naratif mendalam tentang sejarah Indonesia.",
  },
};

export default async function ArtikelPage() {
  const allArticles = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.createdAt));

  return (
    <>
      <div className={styles.pageHeader}>
        <p className={styles.pageLabel}>Koleksi</p>
        <h1 className={styles.pageTitle}>Semua Artikel</h1>
        <p className={styles.pageDesc}>
          Kumpulan artikel didunia Bisnis digital dan teknologi informasi
        </p>
        <span className={styles.articleCount}>
          {allArticles.length} artikel tersedia
        </span>
      </div>

      <div className={styles.grid}>
        {allArticles.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>📚</div>
            <p className={styles.emptyText}>
              Belum ada artikel. Segera hadir!
            </p>
          </div>
        ) : (
          allArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className={styles.card}
              id={`article-card-${article.id}`}
            >
              <span className={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <div className={styles.cardImage}>
                <Image src={article.imageUrl} alt={article.title} width={800} height={450} />
              </div>
              <p className={styles.cardExcerpt}>{article.excerpt}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardDate}>
                  {new Date(article.createdAt).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className={styles.cardReadMore}>
                  Baca <span>→</span>
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );
}
