import AnimatedSection from "@/components/AnimatedSection";
import PortfolioContainer from "@/components/PortfolioContainer";
import styles from "./portofolio.module.css";

export const metadata = {
  title: "Portofolio | Rindra.com",
  description: "Lihat portofolio karya terbaik kami, dari Landingpage, Website Company Profile, E-commerce, hingga solusi digital kustom lainnya.",
  openGraph: {
    title: "Portofolio | Rindra.com",
    description: "Lihat portofolio karya terbaik kami, dari Landingpage, Website Company Profile, E-commerce, hingga solusi digital kustom lainnya.",
  },
};

export default function PortofolioPage() {
  return (
    <>
      {/* Hero / Header Section */}
      <AnimatedSection className={styles.heroSection} id="portfolio-hero" delay={0.1}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Karya Terbaik <span className={styles.titleHighlight}>Kami</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              Menghadirkan Solusi Digital Kreatif & Inovatif Untuk Kebutuhan Bisnis Anda
            </h2>
            <p className={styles.heroDesc}>
              Berikut adalah beberapa proyek unggulan yang telah kami selesaikan dengan presisi tinggi dan desain kelas dunia.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Filter & Grid Container */}
      <PortfolioContainer />
    </>
  );
}