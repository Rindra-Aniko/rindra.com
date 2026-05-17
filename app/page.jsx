import Link from "next/link";
import Image from "next/image";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";
import styles from "./page.module.css";
import rindraImg from "./asset/rindra.svg";

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
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              PAKET LENGKAP<br />
              WEBSITE<br />
              PROFESIONAL
            </h1>
            <p className={styles.heroDesc}>
              Desain Modern, Mudah Ditemukan di Pencarian & Bahasa yang Menjual
            </p>
            <div className={styles.heroButtons}>
              <Link href="/paket" className={styles.btnPrimary}>
                LIHAT PAKET
              </Link>
              <Link href="/portofolio" className={styles.btnSecondary}>
                LIHAT PORTOFOLIO
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image
              src={rindraImg}
              alt="Rindra Aniko"
              className={styles.heroImage}
              priority
            />
          </div>
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
              <picture className={styles.cardImage}>
                <img src={article.imageUrl} alt={article.title} />
              </picture>

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
