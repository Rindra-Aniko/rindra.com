"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "@/app/portofolio/portofolio.module.css";

const categories = [
  { id: "all", label: "Semua", value: "Semua" },
  { id: "landing", label: "Landingpage", value: "Landingpage" },
  { id: "company", label: "Company Profile", value: "Company Profile" },
  { id: "ecommerce", label: "E-commerce", value: "E-commerce" },
  { id: "other", label: "Lainnya", value: "Other" },
];

const portfolioData = [
  // Landingpage
  {
    id: 1,
    title: "SaaS App Product Landing Page",
    category: "Landingpage",
    imageUrl: "/asset/hero_rindra.webp",
    link: "https://example.com/saas",
  },
  {
    id: 2,
    title: "Modern Gadget Launch Page",
    category: "Landingpage",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/product",
  },
  {
    id: 3,
    title: "Tech Event & Seminar Registration",
    category: "Landingpage",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/event",
  },
  
  // Website Company Profile
  {
    id: 4,
    title: "Corporate Tech Startup Site",
    category: "Company Profile",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/startup",
  },
  {
    id: 5,
    title: "Creative & Design Agency Studio",
    category: "Company Profile",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/agency",
  },
  {
    id: 6,
    title: "Financial & Consulting Firm",
    category: "Company Profile",
    imageUrl: "/asset/hero_rindra.webp",
    link: "https://example.com/consulting",
  },
  
  // E-commerce
  {
    id: 7,
    title: "Premium Fashion & Apparel Store",
    category: "E-commerce",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/fashion",
  },
  {
    id: 8,
    title: "Smart Gadgets & Electronics Shop",
    category: "E-commerce",
    imageUrl: "/asset/hero_rindra.webp",
    link: "https://example.com/electronics",
  },
  {
    id: 9,
    title: "Fresh Organic Foods Marketplace",
    category: "E-commerce",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/organic",
  },
  
  // Other
  {
    id: 10,
    title: "Personal Lifestyle Blog & Vlog Hub",
    category: "Other",
    imageUrl: "/asset/hero_rindra.webp",
    link: "https://example.com/blog",
  },
  {
    id: 11,
    title: "Interactive E-Learning Platform",
    category: "Other",
    imageUrl: "/asset/ngajar.webp",
    link: "https://example.com/learning",
  },
  {
    id: 12,
    title: "Global Developer Community Forum",
    category: "Other",
    imageUrl: "/asset/php.webp",
    link: "https://example.com/forum",
  },
];

export default function PortfolioContainer() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems = activeCategory === "Semua"
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <div className={styles.portfolioContainer}>
      {/* Category Tabs / Filters */}
      <AnimatedSection id="portfolio-filters" delay={0.2}>
        <div className={styles.filterWrapper}>
          <div className={styles.filterList}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.value)}
                className={`${styles.filterBtn} ${
                  activeCategory === cat.value ? styles.filterBtnActive : ""
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Grid of Portfolio Cards */}
      <AnimatedSection id="portfolio-grid" delay={0.3}>
        <div className={styles.portfolioGrid}>
          {filteredItems.map((item) => (
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
                  priority={item.id <= 6}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.overlayText}>Kunjungi Situs</span>
                  <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardCategory}>
                  {categories.find(c => c.value === item.category)?.label || item.category}
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
