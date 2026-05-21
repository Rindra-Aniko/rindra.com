import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./about.module.css";
import heroRindra from "@/public/asset/hero_rindra.webp";
import phpImage from "@/public/asset/php.webp";
import ngajarImage from "@/public/asset/ngajar.webp";
import semrushLogo from "@/public/asset/logo/pngegg.svg";
import yoastLogo from "@/public/asset/logo/yoast_logo_icon_249128.svg";
import capcutLogo from "@/public/asset/logo/capcut-icon.svg";
import canvaLogo from "@/public/asset/logo/canva_icon_220714.svg";
import figmaLogo from "@/public/asset/logo/figma_logo_icon_170157.svg";
import nextjsLogo from "@/public/asset/logo/nextjs_icon_132160.svg";
import wpLogo from "@/public/asset/logo/wordpress_logo_icon_167953.svg";
import laravelLogo from "@/public/asset/logo/Laravel.svg";

export const metadata = {
  title: "Tentang Kami | Rindra Aniko",
  description:
    "Rindra Aniko — Web Developer & Kreator Digital berbasis di Kerinci-Jambi.",
  openGraph: {
    title: "Tentang Kami | Rindra Aniko",
    description:
      "Rindra Aniko — Web Developer & Kreator Digital berbasis di Kerinci-Jambi.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection} id="about-hero">
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              HAI, Saya <span className={styles.titleHighlight}>Rindra Aniko</span>
            </h1>
            <h2 className={styles.heroSubtitle}>
              Saya Seorang Web Developer<br />Sekaligus Kreator Digital
            </h2>
            <p className={styles.heroDesc}>
              Saya Berbasis di <strong>Kerinci-Jambi</strong>. Saya memadukan keahlian teknis pembuatan Website dengan strategis pemasaran digital membantu bisnis anda tumbuh di era modern.
            </p>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={heroRindra}
                alt="Rindra Aniko"
                className={styles.heroImage}
                sizes="(max-width: 768px) 300px, 420px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <AnimatedSection className={styles.devwebSection} id="about-devweb" delay={0.2}>
        <div className={styles.devwebContainer}>
          <h2 className={styles.devwebTitle}>WEB DEVELOPMENT</h2>

          <div className={styles.devwebContent}>
            <div className={styles.devwebLeft}>
              <div className={styles.techLogos}>
                <Image
                  src={nextjsLogo}
                  alt="Next.js"
                  className={styles.techIcon}
                />
                <Image
                  src={wpLogo}
                  alt="WordPress"
                  className={styles.techIcon}
                />
                <Image
                  src={laravelLogo}
                  alt="Laravel"
                  className={styles.techIcon}
                />
              </div>

              <p className={styles.devwebDesc}>
                Membangun website modern, responsif, dan SEO-friendly. Ahli dalam pengembangan WordPress, Laravel, dan Next.js yang disesuaikan untuk pertumbuhan bisnis Anda
              </p>

              <Link href="/portofolio" className={styles.devwebButton}>
                LIHAT CONTOH WEBSITE
              </Link>
            </div>

            <div className={styles.devwebRight}>
              <div className={styles.imageCard}>
                <Image
                  src={phpImage}
                  alt="Web Development Rindra Aniko"
                  className={styles.devwebImage}
                  sizes="(max-width: 480px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Copywriting & SEO Section */}
      <AnimatedSection className={styles.copyWriteSection} id="about-copywrite" delay={0.25}>
        <div className={styles.copyWriteContainer}>
          <h2 className={styles.copyWriteTitle}>COPYWRITING & SEO</h2>
          <h3 className={styles.copyWriteSubtitle}>
            Punya Produk Bagus Tapi Sepi Pengunjung? Mari Ubah Keadaannya.
          </h3>

          <div className={styles.copyWriteContent}>
            {/* Left Column - Image Card */}
            <div className={styles.copyWriteLeft}>
              <div className={styles.ngajarImageCard}>
                <Image
                  src={ngajarImage}
                  alt="Copywriting & SEO Rindra Aniko"
                  className={styles.copyWriteImage}
                  sizes="(max-width: 480px) 100vw, 480px"
                />
              </div>
            </div>

            {/* Right Column - Text & Logos */}
            <div className={styles.copyWriteRight}>
              <div className={styles.seoLogos}>
                <Image
                  src={semrushLogo}
                  alt="SEMrush Logo"
                  className={styles.semrushLogo}
                />
                <Image
                  src={yoastLogo}
                  alt="Yoast SEO Logo"
                  className={styles.yoastLogo}
                />
              </div>

              <p className={styles.copyWriteDesc}>
                Jangan biarkan bisnis Anda tersembunyi di internet. Kami bantu meroketkan visibilitas online Anda lewat optimasi SEO yang mendalam dan strategi digital marketing presisi. Saatnya ditemukan oleh audiens yang tepat dan siap bertransaksi.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Soft Skill / Visual Asset Section */}
      <AnimatedSection className={styles.softSkillSection} id="about-softskill" delay={0.3}>
        <div className={styles.softSkillContainer}>
          <h2 className={styles.softSkillTitle}>
            Jangan Biarkan Promosi<br />Anda Terlihat Membosankan
          </h2>

          <div className={styles.softSkillLogos}>
            <Image
              src={capcutLogo}
              alt="CapCut Logo"
              className={styles.softSkillIcon}
            />
            <Image
              src={canvaLogo}
              alt="Canva Logo"
              className={styles.softSkillIcon}
            />
            <Image
              src={figmaLogo}
              alt="Figma Logo"
              className={styles.softSkillIcon}
            />
          </div>

          <p className={styles.softSkillDesc}>
            Kami ciptakan amunisi visual &mdash; dari video interaktif hingga grafis dinamis &mdash; yang membuat brand Anda tampil menonjol, sulit diabaikan, dan siap mendominasi ruang digital.
          </p>
        </div>
      </AnimatedSection>

      {/* CTA About Section */}
      <AnimatedSection className={styles.ctaAboutSection} id="about-cta" delay={0.4}>
        <div className={styles.ctaAboutContainer}>
          <h2 className={styles.ctaAboutTitle}>
            Siap Membawa Bisnis Anda Naik Kelas? Mari Mulai Transformasi Digital Anda Hari Ini
          </h2>
          <div className={styles.ctaAboutButtons}>
            <Link href="/layanan" className={styles.ctaBtnPrimary}>
              JELAJAHI LAYANAN
            </Link>
            <Link href="https://wa.me/6285163731467" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnSecondary}>
              <svg className={styles.waIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.012 2C6.484 2 2 6.484 2 12.013c0 1.75.454 3.447 1.317 4.93L2 22l5.228-1.37a9.973 9.973 0 004.784 1.21h.004c5.527 0 10.01-4.484 10.013-10.013A10.017 10.017 0 0019.096 4.93 9.943 9.943 0 0012.012 2zm0 18.156h-.004a8.312 8.312 0 01-4.237-1.16l-.304-.18-3.15.825.845-3.072-.198-.315A8.3 8.3 0 013.692 12.01c0-4.588 3.734-8.32 8.322-8.32A8.257 8.257 0 0117.9 6.126 8.255 8.255 0 0120.336 12.01c0 4.588-3.735 8.322-8.324 8.322v.024h.001zm4.56-6.233c-.25-.125-1.48-.73-1.71-.813-.23-.083-.396-.125-.563.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062-.25-.125-1.056-.39-2.01-1.24-.743-.66-1.246-1.478-1.392-1.728-.146-.25-.015-.385.11-.51.112-.112.25-.29.375-.436.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.563-1.355-.771-1.855-.203-.485-.408-.42-.563-.427-.146-.007-.312-.007-.479-.007s-.438.063-.667.313c-.229.25-.875.854-.875 2.083 0 1.23.896 2.417 1.021 2.583.125.167 1.765 2.695 4.272 3.778.597.258 1.062.412 1.425.528.6.19 1.146.163 1.576.1.484-.07 1.48-.604 1.688-1.187.208-.583.208-1.083.146-1.187-.063-.104-.23-.167-.48-.292z" fill="#25D366" />
              </svg>
              WHATSAPP SAYA
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
