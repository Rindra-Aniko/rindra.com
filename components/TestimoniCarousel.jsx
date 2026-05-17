"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./TestimoniCarousel.module.css";

const testimonials = [
  {
    initials: "JL",
    quote:
      '" Saya sangat puas dengan hasil website yang dikerjakan oleh Rindra Aniko. Proses konsultasinya sangat terarah, desain yang dihasilkan modern, bersih, dan benar-benar sesuai dengan identitas brand Saya. "',
    name: "Jenny Loren",
    role: "CEO bukukita.com",
  },
  {
    initials: "BH",
    quote:
      '" Dari awal pengajuan hingga website live, pengerjaan oleh Rindra Aniko sangat tepat waktu dan komunikasinya selalu transparan. Saya sebagai pemilik bisnis awam IT sangat terbantu dengan penjelasannya "',
    name: "Budi Harsono",
    role: "CEO PT Baju Bersama",
  },
  {
    initials: "DP",
    quote:
      '" ini mengubah cara operasional bisnis kami. Fitur pemesanan online, integrasi pembayaran, dan sistem reservasi yang dikustomisasi berjalan sangat mulus tanpa bug. Dalam 3 bulan pertama setelah peluncuran, konversi penjualan online kami naik hampir 40% "',
    name: "Dian Permata",
    role: "Owner Nusantara Cafe",
  },
  {
    initials: "AS",
    quote:
      '" Website toko online kami sekarang jauh lebih cepat dan mudah dikelola. Rindra Aniko sangat detail dalam memahami kebutuhan bisnis kami, dan hasilnya benar-benar melampaui ekspektasi. Pelanggan kami juga memberikan feedback positif soal tampilannya. "',
    name: "Andi Saputra",
    role: "Founder Warung Digital",
  },
  {
    initials: "RM",
    quote:
      '" Saya sudah mencoba beberapa jasa pembuatan website sebelumnya, tapi hasilnya selalu tidak memuaskan. Rindra Aniko berbeda — beliau benar-benar mendengarkan dan memberikan solusi yang tepat. SEO website kami langsung naik ke halaman pertama Google dalam 2 bulan. "',
    name: "Rina Maharani",
    role: "Marketing Director Serba Ada Corp",
  },
];

export default function TestimoniCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // How many cards visible at once (responsive)
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) setVisibleCount(1);
      else setVisibleCount(2); // Show 2 cards to make it fuller
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, goNext]);

  const translateX = -(currentIndex * (100 / testimonials.length));

  return (
    <section
      className={styles.section}
      id="testimoni"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <h2 className={styles.title}>Apa Kata Mereka ?</h2>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navBtn} ${styles.navBtnPrev}`}
          onClick={goPrev}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className={styles.carouselViewport}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(${translateX}%)`,
              width: `${(testimonials.length / visibleCount) * 100}%`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={styles.cardWrapper}
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className={styles.cardInner}>
                  <p className={styles.quote}>{t.quote}</p>
                  <div className={styles.footer}>
                    <div className={styles.avatar}>{t.initials}</div>
                    <div>
                      <div className={styles.stars}>★★★★★</div>
                      <p className={styles.name}>{t.name}</p>
                      <p className={styles.role}>{t.role}</p>
                    </div>
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
          ›
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
