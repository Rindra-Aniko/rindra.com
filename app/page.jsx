import Link from "next/link";
import Image from "next/image";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";
import styles from "./page.module.css";
import rindraImg from "@/public/asset/rindra.svg";
import contohImg from "@/public/asset/contoh.svg";
import dynamic from "next/dynamic"; // KUNCI UTAMA: Memanggil Dynamic Import

// 1. LAZY LOAD KOMPONEN BERAT (Menyelamatkan CPU HP)
const AnimatedSection = dynamic(() => import("@/components/AnimatedSection"));
const TestimoniCarousel = dynamic(() => import("@/components/TestimoniCarousel"), { 
  ssr: false // Meringankan beban server di awal render
});

// 2. CACHE DATABASE (Menyelamatkan waktu loading server)
export const revalidate = 3600; 

export default async function HomePage() {
  const latestArticles = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.createdAt))
    .limit(3);

  return (
    <>
      {/* Hero Section - Dimuat Langsung Sepenuh Tenaga */}
      <section className={styles.hero} id="hero">
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
              fetchPriority="high"
              unoptimized /* KUNCI UTAMA: Hentikan pemrosesan SVG yang bikin berat */
            />
          </div>
        </div>
      </section>

      {/* Section Bawah - Dimuat Belakangan (Lazy) menggunakan AnimatedSection Dynamic */}
      
      <AnimatedSection className={styles.alasanSection} id="alasan-web" delay={0.2}>
        <div className={styles.alasanContainer}>
          <div className={styles.alasanLeft}>
            <h2 className={styles.alasanTitle}>
              KENAPA<br />HARUS<br />
              <span style={{ color: "var(--color-text-highlight)" }}>PUNYA<br />WEBSITE ?</span>
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
          {/* Item Lebih Dari */}
          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Konsultasi Desain &amp; Copywriting</h3>
            <p className={styles.lebihDariItemText}>Brainstorming konsep visual hingga penyusunan teks promosi yang memikat.</p>
          </div>
          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Optimasi SEO</h3>
            <p className={styles.lebihDariItemText}>Struktur ramah mesin pencari agar bisnis Anda mudah ditemukan di Google.</p>
          </div>
          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Desain Kekinian &amp; Responsif</h3>
            <p className={styles.lebihDariItemText}>Tampilan estetis dari smartphone, tablet, maupun desktop.</p>
          </div>
          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Gratis Perbaikan 6 Bulan</h3>
            <p className={styles.lebihDariItemText}>Dukungan pemeliharaan cuma-cuma selama 6 bulan penuh setelah serah terima.</p>
          </div>
          <div className={styles.lebihDariItem}>
            <div className={styles.lebihDariIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            </div>
            <h3 className={styles.lebihDariItemTitle}>Pengerjaan On Schedule</h3>
            <p className={styles.lebihDariItemText}>Standar tinggi dan selesai sesuai tenggat waktu yang disepakati.</p>
          </div>
        </div>
      </AnimatedSection>

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

      <AnimatedSection className={styles.layananSection} id="layanan" delay={0.2}>
        <div className={styles.layananHeader}>
          <h2 className={styles.layananTitle}>
            Layanan <span style={{ color: "var(--color-accent)" }}>Terbaik</span> Untuk Anda
          </h2>
          <p className={styles.layananSubtitle}>
            Solusi digital komprehensif yang dirancang untuk meningkatkan kehadiran online bisnis Anda.
          </p>
        </div>
        <div className={styles.layananGrid}>
          {/* Item Layanan */}
          <div className={styles.layananCard}>
            <div className={styles.layananIconWrapper}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div>
            <h3 className={styles.layananCardTitle}>Landing Page</h3>
            <p className={styles.layananCardDesc}>Halaman konversi tinggi yang fokus untuk mengubah pengunjung menjadi pembeli.</p>
          </div>
          <div className={styles.layananCard}>
            <div className={styles.layananIconWrapper}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
            <h3 className={styles.layananCardTitle}>Company Profile</h3>
            <p className={styles.layananCardDesc}>Website resmi yang membangun kredibilitas dan profesionalisme perusahaan Anda.</p>
          </div>
          <div className={styles.layananCard}>
            <div className={styles.layananIconWrapper}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
            <h3 className={styles.layananCardTitle}>Copywriting</h3>
            <p className={styles.layananCardDesc}>Pembuatan teks persuasif yang memikat audiens dan meningkatkan penjualan.</p>
          </div>
          <div className={styles.layananCard}>
            <div className={styles.layananIconWrapper}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><polyline points="11 8 11 11 14 14"></polyline></svg></div>
            <h3 className={styles.layananCardTitle}>Optimasi SEO</h3>
            <p className={styles.layananCardDesc}>Tingkatkan peringkat website Anda di Google agar mudah ditemukan calon pelanggan.</p>
          </div>
          <div className={styles.layananCard}>
            <div className={styles.layananIconWrapper}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></div>
            <h3 className={styles.layananCardTitle}>Toko Online</h3>
            <p className={styles.layananCardDesc}>Platform e-commerce lengkap dengan sistem keranjang belanja dan pembayaran.</p>
          </div>
          <div className={styles.layananCard}>
            <div className={styles.layananIconWrapper}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
            <h3 className={styles.layananCardTitle}>Blog & Artikel</h3>
            <p className={styles.layananCardDesc}>Sistem manajemen konten untuk berbagi cerita, berita, dan wawasan bisnis.</p>
          </div>
        </div>
        <div className={styles.layananFooter}>
           <a href="/portofolio" rel="noopener noreferrer" className={styles.layananCta}>
              LIHAT PORTOFOLIO KAMI
            </a>
        </div>
      </AnimatedSection>

      <AnimatedSection className={styles.testimoniSection} delay={0.2}>
        <TestimoniCarousel />
      </AnimatedSection>

      <AnimatedSection className={styles.ctaSection} id="cta" delay={0.2}>
        <h2 className={styles.ctaTitle}>
          Punya Visi Besar untuk Bisnis Anda? Mari Kita Wujudkan Bersama di Dunia Digital
        </h2>
        <a href="https://wa.me/6285163731467" target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsapp}>
          <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WHATSAPP SAYA
        </a>
      </AnimatedSection>

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
            <Link key={article.id} href={`/artikel/${article.slug}`} className={styles.articleCard}>
              <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              {article.imageUrl && (
                <div className={styles.cardImage}>
                  <Image src={article.imageUrl} alt={article.title} width={800} height={450} sizes="(max-width: 1024px) 50vw, 33vw" />
                </div>
              )}
              <p className={styles.cardExcerpt}>{article.excerpt}</p>
              <div className={styles.cardMeta}>
                <span className={styles.cardDate} suppressHydrationWarning>
                  {new Date(article.createdAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
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