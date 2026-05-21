"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import styles from "./TestimoniCarousel.module.css";

const testimonials = [
  {
    initials: "JL",
    imageUrl: "",
    quote:
      '" Saya sangat puas dengan hasil website yang dikerjakan oleh Rindra Aniko. Proses konsultasinya sangat terarah, desain yang dihasilkan modern, bersih, dan benar-benar sesuai dengan identitas brand Saya. "',
    name: "Jenny Loren",
    role: "CEO bukukita.com",
  },
  {
    initials: "BH",
    imageUrl: "",
    quote:
      '" Dari awal pengajuan hingga website live, pengerjaan oleh Rindra Aniko sangat tepat waktu dan komunikasinya selalu transparan. Saya sebagai pemilik bisnis awam IT sangat terbantu dengan penjelasannya "',
    name: "Budi Harsono",
    role: "CEO PT Baju Bersama",
  },
  {
    initials: "DP",
    imageUrl: "",
    quote:
      '" ini mengubah cara operasional bisnis kami. Fitur pemesanan online, integrasi pembayaran, dan sistem reservasi yang dikustomisasi berjalan sangat mulus tanpa bug. Dalam 3 bulan pertama setelah peluncuran, konversi penjualan online kami naik hampir 40% "',
    name: "Dian Permata",
    role: "Owner Nusantara Cafe",
  },
  {
    initials: "AS",
    imageUrl: "",
    quote:
      '" Website toko online kami sekarang jauh lebih cepat dan mudah dikelola. Rindra Aniko sangat detail dalam memahami kebutuhan bisnis kami, dan hasilnya benar-benar melampaui ekspektasi. Pelanggan kami juga memberikan feedback positif soal tampilannya. "',
    name: "Andi Saputra",
    role: "Founder Warung Digital",
  },
  {
    initials: "RM",
    imageUrl: "",
    quote:
      '" Saya sudah mencoba beberapa jasa pembuatan website sebelumnya, tapi hasilnya selalu tidak memuaskan. Rindra Aniko berbeda — beliau benar-benar mendengarkan dan memberikan solusi yang tepat. SEO website kami langsung naik ke halaman pertama Google dalam 2 bulan. "',
    name: "Rina Maharani",
    role: "Marketing Director Serba Ada Corp",
  },
];

export default function TestimoniCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) setVisibleCount(1);
      else if (window.innerWidth <= 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goNext = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 400); // Wait for fade out
  }, []);

  const goPrev = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsFading(false);
    }, 400);
  }, []);

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 400);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      goNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, goNext]);

  const getVisibleTestimonials = () => {
    let items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  const currentCards = getVisibleTestimonials();

  return (
    <section
      className={styles.section}
      id="testimoni"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Kisah Sukses <span style={{ color: "var(--color-accent)" }}>Klien Kami</span></h2>
        <p className={styles.subtitle}>Mereka yang telah merasakan dampak positif dari layanan digital kami.</p>
      </div>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navBtn} ${styles.navBtnPrev}`}
          onClick={goPrev}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div className={styles.carouselViewport}>
            <div className={`${styles.cardsGrid} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
              {currentCards.map((t, idx) => (
                <div key={`${currentIndex}-${idx}`} className={styles.cardInner}>
                  <div className={styles.quoteIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <p className={styles.quote}>{t.quote}</p>
                  <div className={styles.footer}>
                    <div className={styles.avatar}>
                      {t.imageUrl ? (
                        <Image src={t.imageUrl} alt={t.name} width={56} height={56} className={styles.avatarImg} />
                      ) : (
                        t.initials
                      )}
                    </div>
                    <div>
                      <div className={styles.stars}>★★★★★</div>
                      <p className={styles.name}>{t.name}</p>
                      <p className={styles.role}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <button
          className={`${styles.navBtn} ${styles.navBtnNext}`}
          onClick={goNext}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
