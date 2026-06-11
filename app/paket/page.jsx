import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./paket.module.css";

export const metadata = {
  title: "Paket & Layanan | Rindra Aniko",
  description: "Pilih paket pembuatan website profesional yang dirancang untuk mengonversi pengunjung menjadi pelanggan.",
};

const GreenCheck = () => (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#166534" strokeWidth="2" />
    <path d="M8 12L11 15L16 9" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const YellowCheck = () => (
  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#E0FE21" strokeWidth="2" />
    <path d="M8 12L11 15L16 9" stroke="#E0FE21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhiteCheck = () => (
  <svg className={styles.daasCheckIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PaketPage() {
  return (
    <div className={styles.paketSection}>
      <div className={styles.paketContainer}>

        {/* Header Section */}
        <section id="paket-header">
          <div className={styles.paketHeader}>
            <h1 className={styles.paketTitle}>
              Investasi Digital yang <span className={styles.highlight}>Menguntungkan</span> untuk Bisnis Anda
            </h1>
            <p className={styles.paketSubtitle}>
              Pilih paket pembuatan website profesional yang dirancang bukan hanya untuk tampil menarik, tapi untuk mengonversi pengunjung menjadi pelanggan dan memberikan ROI nyata.
            </p>
          </div>
        </section>

        {/* Pricing Grid */}
        <AnimatedSection id="pricing-grid" delay={0.2}>
          <div className={styles.pricingGrid}>

            {/* Card 1: Landing Page Dasar */}
            <div className={styles.pricingCard}>
              <h3 className={styles.cardTitle}>Landing Page Dasar</h3>
              <p className={styles.cardDesc}>Solusi cepat untuk validasi ide atau kampanye tunggal.</p>
              <div className={styles.cardPrice}>Rp 1.000.000</div>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><GreenCheck /> Single Page (Landing Page)</li>
                <li className={styles.featureItem}><GreenCheck /> Desain Responsif (Mobile & Desktop)</li>
                <li className={styles.featureItem}><GreenCheck /> Basic Copywriting (Call-to-Action)</li>
                <li className={styles.featureItem}><GreenCheck /> Optimasi Kecepatan Standar</li>
              </ul>
              <Link href="https://wa.me/6285163731467?text=Halo%20Kak%20Rindra%2C%20Saya%20tertarik%20dengan%20paket%20pembuatan%20website%20landingpage%20dasar." target="_blank" className={styles.btnOutline}>
                Pilih Paket Dasar
              </Link>
            </div>

            {/* Card 2: Website Company Profile (Highlighted) */}
            <div className={`${styles.pricingCard} ${styles.cardHighlighted}`}>
              <div className={styles.badge}>Paling Populer</div>
              <h3 className={styles.cardTitle}>Website Company Profile</h3>
              <p className={styles.cardDesc}>Difokuskan pada kredibilitas bisnis profesional.</p>
              <div className={styles.cardPrice}>Rp 2.500.000</div>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><YellowCheck /> Multi-page Website (s/d 10 Halaman)</li>
                <li className={styles.featureItem}><YellowCheck /> Premium UI/UX Design</li>
                <li className={styles.featureItem}><YellowCheck /> Advanced SEO Setup (On-page)</li>
                <li className={styles.featureItem}><YellowCheck /> Full Copywriting Persuasif</li>
                <li className={styles.featureItem}><YellowCheck /> Integrasi Analytics & Meta Pixel</li>
              </ul>
              <Link href="https://wa.me/6285163731467?text=Halo%20Kak%20Rindra%2C%20Saya%20tertarik%20dengan%20paket%20pembuatan%20website%20company%20profile." target="_blank" className={styles.btnSolid}>
                Pilih Paket Profile
              </Link>
            </div>

            {/* Card 3: E-commerce */}
            <div className={styles.pricingCard}>
              <h3 className={styles.cardTitle}>E-commerce</h3>
              <p className={styles.cardDesc}>Fitur toko online lengkap dan integrasi pembayaran.</p>
              <div className={styles.priceLabel}>Mulai Dari</div>
              <div className={styles.cardPrice}>Rp 5.000.000</div>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><GreenCheck /> Sistem Toko Online Penuh</li>
                <li className={styles.featureItem}><GreenCheck /> Integrasi Payment Gateway</li>
                <li className={styles.featureItem}><GreenCheck /> Sistem Manajemen Inventaris</li>
                <li className={styles.featureItem}><GreenCheck /> Sistem Perhitungan Ongkir</li>
              </ul>
              <Link href="https://wa.me/6285163731467?text=Halo%20Kak%20Rindra%2C%20Saya%20tertarik%20dengan%20paket%20pembuatan%20website%20E-commerce." target="_blank" className={styles.btnOutline}>
                Pilih E-commerce
              </Link>
            </div>

            {/* Card 4: Custom Solution */}
            <div className={styles.pricingCard}>
              <h3 className={styles.cardTitle}>Custom Solution</h3>
              <p className={styles.cardDesc}>Solusi kustom untuk kebutuhan bisnis yang lebih kompleks.</p>
              <div className={styles.priceLabel}>Harga</div>
              <div className={styles.cardPrice}>Negosiasi</div>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><GreenCheck /> Custom Web App Functionality</li>
                <li className={styles.featureItem}><GreenCheck /> Integrasi API Pihak Ketiga</li>
                <li className={styles.featureItem}><GreenCheck /> Arsitektur Skala Besar</li>
                <li className={styles.featureItem}><GreenCheck /> Maintenance Prioritas</li>
              </ul>
              <Link href="https://wa.me/6285163731467?text=Halo%20Kak%20Rindra%2C%20Saya%20tertarik%20dengan%20paket%20pembuatan%20website%20custom%20solution." target="_blank" className={styles.btnOutline}>
                Hubungi untuk Custom
              </Link>
            </div>

          </div>
        </AnimatedSection>

        {/* Design-as-a-Service Banner */}
        <AnimatedSection id="daas-banner" delay={0.3}>
          <div className={styles.daasBanner}>
            <div className={styles.daasLeft}>
              <h2 className={styles.daasTitle}>Servis Berlangganan</h2>
              <p className={styles.daasDesc}>
                Tidak ingin investasi besar di awal? Dapatkan website premium, pemeliharaan berkelanjutan, update desain rutin, dan optimasi SEO terus-menerus dengan sistem berlangganan bulanan.
              </p>
              <ul className={styles.daasFeatures}>
                <li className={styles.daasFeatureItem}><WhiteCheck /> Tanpa biaya pembuatan di awal (Setup Fee)</li>
                <li className={styles.daasFeatureItem}><WhiteCheck /> Update konten & desain unlimited (fair use)</li>
                <li className={styles.daasFeatureItem}><WhiteCheck /> Hosting & Domain Premium Termasuk</li>
              </ul>
            </div>

            <div className={styles.daasRight}>
              <div className={styles.daasPricingCard}>
                <div className={styles.daasPriceLabel}>Mulai Berlangganan</div>
                <div className={styles.daasPrice}>Rp 2.000.000,-</div>
                <div className={styles.daasPriceSub}>per bulan (min. 12 bulan)</div>
                <Link href="https://wa.me/6285163731467?text=Halo%20Kak%20Rindra%2C%20Saya%20tertarik%20dengan%20paket%20pembuatan%20website%20design%20as%20a%20service." target="_blank" className={styles.btnSolid}>
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
