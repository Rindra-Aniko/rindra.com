"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = (path) => {
    return pathname === path ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>
            rinthra<span className={styles.logoDot}>.</span>com
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <div className={styles.menuIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} id="main-nav">
          <Link href="/" className={getLinkClass("/")} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")} onClick={closeMenu}>
            Tentang Saya
          </Link>
          <Link href="/portofolio" className={getLinkClass("/portofolio")} onClick={closeMenu}>
            Portofolio
          </Link>
          <Link href="/paket" className={getLinkClass("/paket")} onClick={closeMenu}>
            Paket/Layanan
          </Link>
          <Link href="/artikel" className={getLinkClass("/artikel")} onClick={closeMenu}>
            Artikel
          </Link>
        </nav>

        <div className={styles.headerRight}>
          <button className={styles.btnWhatsapp} onClick={() => window.open('https://wa.me/6281563731467', '_blank')}>Konsultasi Gratis</button>
        </div>
      </div>
    </header>
  );
}
