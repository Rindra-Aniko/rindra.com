import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import fbLogo from "@/public/asset/logo/facebook-removebg-preview.png";
import igLogo from "@/public/asset/logo/instagram-removebg-preview.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGradient} />
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>
              Rindra<span className={styles.footerLogoDot}> </span>Aniko
            </span>
            <p className={styles.footerTagline}>
              Jasa Pembuatan Website Profesional & Solusi Digital Bisnis Anda
            </p>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.contactTitle}>Hubungi Kami</h4>
            <p className={styles.contactText}>
              <strong>Alamat:</strong> Jl. Wisata Desa Hamparan Pugu Kecamatan Air Hangat Barat Kabupaten Kerinci, kodepos 37161
            </p>
            <p className={styles.contactText}>
              <strong>Email:</strong> suport@ryndigitalpro.com
            </p>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Image src={fbLogo} alt="Facebook" width={32} height={32} className={styles.socialImg} priority />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Image src={igLogo} alt="Instagram" width={32} height={32} className={styles.socialImg} priority />
              </a>
            </div>
          </div>
        </div>

        <nav className={styles.footerNav} id="footer-nav">
          <Link href="/" className={styles.footerLink}>Beranda</Link>
          <Link href="/portofolio" className={styles.footerLink}>Portofolio</Link>
          <Link href="/paket" className={styles.footerLink}>Paket</Link>
          <Link href="/artikel" className={styles.footerLink}>Artikel</Link>
          <Link href="/about" className={styles.footerLink}>Tentang Saya</Link>
        </nav>

        <div className={styles.footerBottom}>
          <p className={styles.copyright} suppressHydrationWarning>
            © {currentYear} Rindra Aniko — Dibuat dengan{" "}
            <span className={styles.copyrightHeart}>♥</span> untuk pertumbuhan bisnis Anda
          </p>
        </div>
      </div>
    </footer>
  );
}
