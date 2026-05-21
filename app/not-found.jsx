import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '75vh',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'var(--color-bg-primary)'
    }}>
      <h1 style={{
        fontSize: 'clamp(6rem, 15vw, 10rem)',
        fontWeight: 900,
        background: 'var(--gradient-accent)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: 0,
        lineHeight: 1,
        fontFamily: 'var(--font-sans)',
        opacity: 0.9
      }}>
        404
      </h1>
      
      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        color: 'var(--color-text-primary)',
        margin: '1rem 0',
        fontFamily: 'var(--font-sans)',
        fontWeight: 800
      }}>
        Halaman Tidak Ditemukan
      </h2>
      
      <p style={{
        color: 'var(--color-text-secondary)',
        marginBottom: '3rem',
        maxWidth: '500px',
        lineHeight: 1.6,
        fontSize: '1.1rem'
      }}>
        Halaman yang Anda cari mungkin telah dihapus, dipindahkan, 
        atau alamatnya salah dieja.
      </p>
      
      <Link href="/" style={{
          padding: '1rem 2.5rem',
          background: 'var(--color-accent)',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '50px',
          fontWeight: 700,
          fontFamily: 'var(--font-sans)',
          boxShadow: 'var(--shadow-glow)',
          transition: 'transform 0.2s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span>←</span> Kembali ke Beranda
      </Link>
    </div>
  );
}
