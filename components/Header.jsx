import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            rinthra<span className={styles.logoDot}>.</span>com
          </span>
        </Link>

        <nav className={styles.nav} id="main-nav">
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            Tentang Saya
          </Link>
          <Link href="/portofolio" className={styles.navLink}>
            Portofolio
          </Link>
          <Link href="/paket" className={styles.navLink}>
            Paket/Layanan
          </Link>
          <Link href="/artikel" className={styles.navLink}>
            Artikel
          </Link>
        </nav>

        <div className={styles.headerRight}>
          <button className={styles.btnWhatsapp}>Konsultasi Gratis</button>
        </div>
      </div>
    </header>
  );
}
