import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGradient} />
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <span className={styles.footerLogo}>
            rindra<span className={styles.footerLogoDot}>.</span>com
          </span>
          <p className={styles.footerTagline}>
            Portal Membaca — Menyelami sejarah melalui narasi yang mendalam
          </p>
        </div>

        <nav className={styles.footerNav} id="footer-nav">
          <Link href="/" className={styles.footerLink}>Beranda</Link>
          <Link href="/artikel" className={styles.footerLink}>Artikel</Link>
          <Link href="/about" className={styles.footerLink}>About</Link>
        </nav>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} rindra.com — Dibuat dengan{" "}
            <span className={styles.copyrightHeart}>♥</span> untuk para pembaca
          </p>
        </div>
      </div>
    </footer>
  );
}
