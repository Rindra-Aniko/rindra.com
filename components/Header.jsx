import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>R</span>
          <span className={styles.logoText}>
            rindra<span className={styles.logoDot}>.</span>com
          </span>
        </Link>

        <nav className={styles.nav} id="main-nav">
          <Link href="/artikel" className={styles.navLink}>
            Artikel
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
