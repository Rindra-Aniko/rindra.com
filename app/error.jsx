"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error secara diam-diam ke console atau tracking system
    console.error("Terjadi Kesalahan Aplikasi:", error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'var(--color-bg-primary)'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        color: '#ef4444'
      }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      
      <h2 style={{
        fontSize: '2rem',
        color: 'var(--color-text-primary)',
        marginBottom: '1rem',
        fontFamily: 'var(--font-sans)',
        fontWeight: 800
      }}>
        Ups, Terjadi Kesalahan!
      </h2>
      
      <p style={{
        color: 'var(--color-text-secondary)',
        marginBottom: '2.5rem',
        maxWidth: '500px',
        lineHeight: 1.6
      }}>
        Maaf, sistem mendapati sebuah masalah saat mencoba memuat halaman ini. 
        Jangan khawatir, Anda bisa mencoba memuat ulang halamannya.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button 
          onClick={() => reset()}
          style={{
            padding: '0.8rem 2rem',
            background: 'var(--color-accent)',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'var(--font-sans)',
            boxShadow: '0 4px 12px var(--color-accent-glow)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Coba Lagi
        </button>
        
        <Link href="/" style={{
            padding: '0.8rem 2rem',
            background: 'var(--color-bg-secondary)',
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontFamily: 'var(--font-sans)',
            border: '1px solid var(--color-border)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Ke Beranda
        </Link>
      </div>
    </div>
  );
}
