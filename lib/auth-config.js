/**
 * Konfigurasi JWT — Satu Sumber Kebenaran
 *
 * File ini menyediakan key JWT untuk seluruh aplikasi.
 * JWT_SECRET WAJIB diatur melalui environment variable.
 * Tidak ada fallback hardcoded demi keamanan.
 */

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error(
    "❌ JWT_SECRET belum diatur! Tambahkan JWT_SECRET di file .env.local (development) atau Environment Variables di hosting (production)."
  );
}

export const jwtKey = new TextEncoder().encode(JWT_SECRET);
