import Link from "next/link";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";
import styles from "./page.module.css";

export default async function HomePage() {
  const latestArticles = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.createdAt))
    .limit(3);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Portal Membaca</span>
          <h1 className={styles.heroTitle}>
            Menyelami{" "}
            <span className={styles.heroTitleAccent}>Sejarah</span>
            <br />
            Melalui Narasi Mendalam
          </h1>
          <p className={styles.heroDesc}>
            Kumpulan artikel naratif yang membawa Anda menjelajahi
            peristiwa-peristiwa bersejarah Indonesia dengan gaya bercerita
            yang mendalam dan penuh makna.
          </p>
          <Link href="/artikel" className={styles.heroCta}>
            Jelajahi Artikel
            <span className={styles.ctaArrow}>→</span>
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className={styles.latestSection} id="latest-articles">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>Terbaru</p>
            <h2 className={styles.sectionTitle}>Artikel Pilihan</h2>
          </div>
          <Link href="/artikel" className={styles.sectionLink}>
            Lihat Semua →
          </Link>
        </div>

        <div className={styles.articlesGrid}>
          {latestArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className={styles.articleCard}
            >
              <span className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.cardExcerpt}>{article.excerpt}</p>
              <div className={styles.cardMeta}>
                <span className={styles.cardDate}>
                  {new Date(article.createdAt).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
