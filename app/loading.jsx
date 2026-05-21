"use client";

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      flexDirection: 'column',
      gap: '1rem',
      backgroundColor: 'var(--color-bg-primary)'
    }}>
      <div className="spinner" style={{
        width: '40px',
        height: '40px',
        border: '3px solid var(--color-border)',
        borderTopColor: 'var(--color-accent)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{
        color: 'var(--color-text-muted)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        letterSpacing: 'var(--tracking-wide)'
      }}>Memuat halaman...</p>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
