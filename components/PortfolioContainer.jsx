"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "@/app/portofolio/portofolio.module.css";

const categoryOrder = [
  { key: "LANDINGPAGE", label: "LANDINGPAGE" },
  { key: "COMPANY PROFILE", label: "COMPANY PROFILE" },
  { key: "E-COMMERCE", label: "E-COMMERCE" },
  { key: "OTHER", label: "OTHER" },
];

const portfolioData = [
  // Landingpage
  {
    id: 1,
    title: "Landing Page Jenis Produk",
    category: "LANDINGPAGE",
    imageUrl: "/asset/webscreenshot/perysmith.webp",
    link: "https://contolp01.netlify.app/ ",
  },
  {
    id: 2,
    title: "Modern Gadget Launch Page",
    category: "LANDINGPAGE",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/product",
  },
  {
    id: 3,
    title: "Tech Event & Seminar Registration",
    category: "LANDINGPAGE",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/event",
  },

  // Website Company Profile
  {
    id: 4,
    title: "Corporate Tech Startup Site",
    category: "COMPANY PROFILE",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/startup",
  },
  {
    id: 5,
    title: "Creative & Design Agency Studio",
    category: "COMPANY PROFILE",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/agency",
  },
  {
    id: 6,
    title: "Financial & Consulting Firm",
    category: "COMPANY PROFILE",
    imageUrl: "/asset/hero_rindra.webp",
    link: "https://example.com/consulting",
  },

  // E-commerce
  {
    id: 7,
    title: "Premium Fashion & Apparel Store",
    category: "E-COMMERCE",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/fashion",
  },
  {
    id: 8,
    title: "Smart Gadgets & Electronics Shop",
    category: "E-COMMERCE",
    imageUrl: "/asset/hero_rindra.webp",
    link: "https://example.com/electronics",
  },
  {
    id: 9,
    title: "Fresh Organic Foods Marketplace",
    category: "E-COMMERCE",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/organic",
  },

  // Other
  {
    id: 10,
    title: "Personal Lifestyle Blog & Vlog Hub",
    category: "OTHER",
    imageUrl: "/asset/hero_rindra.webp",
    link: "https://example.com/blog",
  },
  {
    id: 11,
    title: "Interactive E-Learning Platform",
    category: "OTHER",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/learning",
  },
  {
    id: 12,
    title: "Global Developer Community Forum",
    category: "OTHER",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/forum",
  },
];

export default function PortfolioContainer() {
  return (
    <div className={styles.portfolioContainer} >
      {categoryOrder.map((cat, idx) => {
        const items = portfolioData.filter(
          (item) => item.category === cat.key
        );
        if (items.length === 0) return null;

        return (
          <AnimatedSection
            key={cat.key}
            id={`portfolio-section-${cat.key}`}
            delay={0.15 * (idx + 1)}
          >
            <section className={styles.categorySection}>
              <h2 className={styles.categoryTitle} >{cat.label}</h2>
              <div className={styles.portfolioGrid}>
                {items.map((item) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.portfolioCard}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.cardImage}
                        priority={item.id <= 2}
                      />
                      <div className={styles.cardOverlay}>
                        <span className={styles.overlayText}>Kunjungi Situs</span>
                        <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
