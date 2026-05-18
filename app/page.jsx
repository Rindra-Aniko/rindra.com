import Link from "next/link";
import Image from "next/image";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";
import styles from "./page.module.css";
import rindraImg from "../asset/rindra.svg";
import TestimoniCarousel from "@/components/TestimoniCarousel";
import AnimatedSection from "@/components/AnimatedSection";

export default async function HomePage() {
  const latestArticles = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.createdAt))
    .limit(3);

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection className={styles.hero} id="hero" delay={0.1}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              PAKET LENGKAP<br />
              <span style={{ color: "var(--color-text-highlight)" }}>WEBSITE<br />
                PROFESIONAL</span>
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
      </AnimatedSection>

      {/* Alasan Punya Web Section */}
      <AnimatedSection className={styles.alasanSection} id="alasan-web" delay={0.2}>
        <div className={styles.alasanContainer}>
          <div className={styles.alasanLeft}>
            <h2 className={styles.alasanTitle}>
              KENAPA<br />
              HARUS<br />
              <span style={{ color: "#ffffffff" }}>PUNYA<br />
                WEBSITE ?</span>

            </h2>
            <p className={styles.alasanDesc}>
              Di Zaman Modern saat ini, memiliki website untuk bisnis bukan lagi sebuah pilihan, melainkan kewajiban
            </p>
          </div>

          <div className={styles.alasanRight}>
            <div className={styles.alasanItem}>
              <span className={styles.alasanNumber}>1</span>
              <div className={styles.alasanPill}>Lebih Profesional & Kredibel</div>
              <p className={styles.alasanItemText}>
                Tingkatkan kepercayaan calon klien. Website ibarat kantor resmi di dunia maya.
              </p>
            </div>

            <div className={styles.alasanItem}>
              <span className={styles.alasanNumber}>2</span>
              <div className={styles.alasanPill}>Menjangkau Lebih Luas</div>
              <p className={styles.alasanItemText}>
                Perluas pasar keseluruh penjuru Indonesia bahkan bisa tembus pasar internasional
              </p>
            </div>

            <div className={styles.alasanItem}>
              <span className={styles.alasanNumber}>3</span>
              <div className={styles.alasanPill}>Non Stop 24 Jam Aktif</div>
              <p className={styles.alasanItemText}>
                Bahkan saat Anda tertidur, website Anda tetap bekerja sebagai sales yang mempromosikan bisnis Anda tanpa henti.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Lebih Dari Section */}
      <AnimatedSection className={styles.lebihDariSection} id="lebih-dari" delay={0.2}>
        <div className={styles.lebihDariHeader}>
          <h2 className={styles.lebihDariTitle}>
            LEBIH DARI<br /> <span style={{ color: "var(--color-text-highlight)" }}>SEKEDAR</span><br />DESIGN
          </h2>
          <p className={styles.lebihDariDesc}>
            Banyak yang menjual Jasa Pembuatan Website yang murah tapi anda tidak tahu layanan apa yang mereka berikan, Di sini Saya memberikan layanan optimal :
          </p>
        </div>

        <div className={styles.lebihDariList}>
          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Konsultasi Desain &amp; Copywriting</h3>
            <p className={styles.lebihDariItemText}>
              Brainstorming konsep visual hingga penyusunan teks promosi yang memikat.
            </p>
          </div>

          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Optimasi SEO</h3>
            <p className={styles.lebihDariItemText}>
              Struktur ramah mesin pencari agar bisnis Anda mudah ditemukan di Google.
            </p>
          </div>

          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Desain Kekinian &amp; Responsif</h3>
            <p className={styles.lebihDariItemText}>
              Tampilan estetis dari smartphone, tablet, maupun desktop.
            </p>
          </div>

          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Gratis Perbaikan 6 Bulan</h3>
            <p className={styles.lebihDariItemText}>
              Dukungan pemeliharaan cuma-cuma selama 6 bulan penuh setelah serah terima.
            </p>
          </div>

          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Pengerjaan On Schedule</h3>
            <p className={styles.lebihDariItemText}>
              Standar tinggi dan selesai sesuai tenggat waktu yang disepakati.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Cara Kerja Section */}
      <AnimatedSection className={styles.caraKerjaSection} id="cara-kerja" delay={0.2}>
        <h2 className={styles.caraKerjaTitle}>
          BAGAIMANA KAMI <span style={{ color: "var(--color-text-yellow)" }}>MEWUJUDKAN VISI BISNIS ANDA ?</span>
        </h2>
        <div className={styles.caraKerjaFlow}>
          <div className={styles.caraKerjaPair}>
            <div className={styles.caraKerjaStep}>
              <span className={styles.caraKerjaNumber}>1</span>
              <div className={styles.caraKerjaContent}>
                <span className={styles.caraKerjaLabel}>Brief</span>
                <p className={styles.caraKerjaText}>membahas bentuk copywriting dan Design untuk Website</p>
              </div>
            </div>
            <div className={styles.caraKerjaArrow}>&#8594;</div>
            <div className={styles.caraKerjaStep}>
              <span className={styles.caraKerjaNumber}>2</span>
              <div className={styles.caraKerjaContent}>
                <span className={styles.caraKerjaLabel}>UI/UX</span>
                <p className={styles.caraKerjaText}>Desain prototype projek sesuai keinginan client</p>
              </div>
            </div>
          </div>

          <div className={styles.caraKerjaDown}>&#8595;</div>

          <div className={styles.caraKerjaPair}>
            <div className={styles.caraKerjaStep}>
              <span className={styles.caraKerjaNumber}>3</span>
              <div className={styles.caraKerjaContent}>
                <span className={styles.caraKerjaLabel}>Pengerjaan</span>
                <p className={styles.caraKerjaText}>proyek berdasarkan hasil persetujuan client</p>
              </div>
            </div>
            <div className={styles.caraKerjaArrow}>&#8594;</div>
            <div className={styles.caraKerjaStep}>
              <span className={styles.caraKerjaNumber}>4</span>
              <div className={styles.caraKerjaContent}>
                <span className={styles.caraKerjaLabel}>Evaluasi</span>
                <p className={styles.caraKerjaText}>penilaian dan berapa revisi dari client</p>
              </div>
            </div>
          </div>

          <div className={styles.caraKerjaDown}>&#8595;</div>

          <div className={styles.caraKerjaPair}>
            <div className={styles.caraKerjaStep}>
              <span className={styles.caraKerjaNumber}>5</span>
              <div className={styles.caraKerjaContent}>
                <span className={styles.caraKerjaLabel}>Finishing</span>
                <p className={styles.caraKerjaText}>Optimasi SEO Perbaikan beberapa hal yang perlu</p>
              </div>
            </div>
            <div className={styles.caraKerjaArrow}>&#8594;</div>
            <div className={styles.caraKerjaStep}>
              <span className={styles.caraKerjaNumber}>6</span>
              <div className={styles.caraKerjaContent}>
                <span className={styles.caraKerjaLabel}>Serah Terima</span>
                <p className={styles.caraKerjaText}>Project berupa web, email dan lain-lain</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Layanan Section */}
      <AnimatedSection className={styles.layananSection} id="layanan" delay={0.2}>
        <h2 className={styles.layananTitle}>
          Apa Jasa yang Saya sediakan ?
        </h2>
        <div className={styles.layananContainer}>
          <div className={styles.layananLeft}>
            <div className={styles.layananAccent} />
            <ul className={styles.layananList}>
              <li>Landingpage</li>
              <li>Profil Pribadi/Perusahaan</li>
              <li>Copywriting (Ide Penulisan Promosi)</li>
              <li>Optimasi SEO (Agar Lebih mudah di baca mesin pencari)</li>
              <li>Toko Online/e-commerse</li>
              <li>Blog</li>
              <li>Rancang Sendiri Idenya</li>
            </ul>
          </div>
          <div className={styles.layananRight}>
            <div className={styles.layananPreview}>
              <iframe
                src="https://sktperfectdemo.com/themepack/nature21-pro/"
                title="Contoh Website"
                className={styles.layananIframe}
              />
            </div>
            <Link href="/portofolio" className={styles.layananCta}>
              LIHAT CONTOH WEBSITE
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimoni Section */}
      <AnimatedSection delay={0.2}>
        <TestimoniCarousel />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className={styles.ctaSection} id="cta" delay={0.2}>
        <h2 className={styles.ctaTitle}>
          Punya Visi Besar untuk Bisnis Anda? Mari Kita Wujudkan Bersama di Dunia Digital
        </h2>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaWhatsapp}
        >
          <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WHATSAPP SAYA
        </a>
      </AnimatedSection>

      {/* Latest Articles */}
      <AnimatedSection className={styles.latestSection} id="latest-articles" delay={0.2}>
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
      </AnimatedSection>
    </>
  );
}
