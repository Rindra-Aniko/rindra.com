"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          <Link href="/" className={styles.navLink} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink} onClick={closeMenu}>
            Tentang Saya
          </Link>
          <Link href="/portofolio" className={styles.navLink} onClick={closeMenu}>
            Portofolio
          </Link>
          <Link href="/paket" className={styles.navLink} onClick={closeMenu}>
            Paket/Layanan
          </Link>
          <Link href="/artikel" className={styles.navLink} onClick={closeMenu}>
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
