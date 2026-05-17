# 🎨 Issue: Migrasi Tema Visual dari Dark Gold ke Light Rynthra Theme

## Deskripsi

Saat ini portal `rindra.com` menggunakan tema **dark mode** dengan warna gold accent (`#d4a853`). Kita perlu mengubah **seluruh tema visual** agar sesuai dengan panduan desain [analisis_warna_tema_rynthra-v2.md](./analisis_warna_tema_rynthra-v2.md), yaitu tema **light modern** dengan karakteristik:

| Aspek | Saat Ini (SALAH ❌) | Target Rynthra (BENAR ✅) |
|-------|---------------------|---------------------------|
| Background utama | `#0f0f0f` (hitam gelap) | `#FFFFFF` (putih bersih) |
| Background seksi/card | `#1e1e1e` (abu gelap) | `#EBF7EE` (pastel mint green) |
| Background footer | `#1a1a1a` (abu gelap) | `#1E2B4F` (deep navy blue) |
| Warna accent | `#d4a853` (gold) | Hijau tua (sesuai heading rynthra) |
| Font heading | `Lora` (serif) | Sans-serif (Poppins) |
| Font body | `Lora` (serif) | Sans-serif (Poppins) |
| Warna teks heading | Putih | Gelap / hijau tua |
| Warna teks body | Abu terang | Abu-abu gelap |
| Kesan umum | Gelap, mewah, gold | Terang, bersih, modern, segar |

---

## Referensi Warna Rynthra

Dari file `analisis_warna_tema_rynthra-v2.md`:

```
WARNA UTAMA:
- Background utama:       #FFFFFF (Pure White)
- Background seksi/card:  #EBF7EE (Pastel Mint Green)
- Background footer:      #1E2B4F (Deep Navy Blue)

TIPOGRAFI:
- Font: Sans-serif (Poppins)
- Heading: Besar, bold/black, warna gelap atau hijau tua
- Body text: Ukuran sedang, regular, warna abu-abu gelap
```

---

## Langkah-langkah Perubahan (Step-by-Step)

### ✅ Langkah 1: Ubah Design Tokens di `app/globals.css`

**File:** `app/globals.css`
**Baris yang diubah:** Baris 6-37 (bagian CSS Custom Properties di `:root`)

**Apa yang dilakukan:**
Ganti SEMUA variabel warna di dalam blok `:root { }` dari tema dark gold ke tema light rynthra.

**Perubahan detail:**

```css
/* === SEBELUM (HAPUS INI) === */

/* Color Palette — Warm Dark Theme */
--color-bg-primary: #0f0f0f;
--color-bg-secondary: #1a1a1a;
--color-bg-tertiary: #242424;
--color-bg-card: #1e1e1e;
--color-bg-card-hover: #282828;
--color-bg-glass: rgba(30, 30, 30, 0.75);

--color-text-primary: #f0ece4;
--color-text-secondary: #b0a99a;
--color-text-muted: #7a7468;
--color-text-inverse: #0f0f0f;

--color-accent: #d4a853;
--color-accent-hover: #e8c068;
--color-accent-subtle: rgba(212, 168, 83, 0.12);
--color-accent-glow: rgba(212, 168, 83, 0.25);

--color-border: rgba(240, 236, 228, 0.08);
--color-border-hover: rgba(240, 236, 228, 0.15);
--color-divider: rgba(240, 236, 228, 0.06);

/* Gradient Tokens */
--gradient-hero: linear-gradient(135deg, #1a1410 0%, #0f0f0f 50%, #111318 100%);
--gradient-accent: linear-gradient(135deg, #d4a853 0%, #c9944a 100%);
--gradient-card: linear-gradient(180deg, rgba(212, 168, 83, 0.04) 0%, transparent 100%);
--gradient-border: linear-gradient(135deg, rgba(212, 168, 83, 0.2), rgba(212, 168, 83, 0.05));
```

```css
/* === SESUDAH (GANTI DENGAN INI) === */

/* Color Palette — Light Rynthra Theme */
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F8FAF9;
--color-bg-tertiary: #EBF7EE;
--color-bg-card: #EBF7EE;
--color-bg-card-hover: #E0F0E4;
--color-bg-glass: rgba(255, 255, 255, 0.85);

--color-text-primary: #1A2E1A;
--color-text-secondary: #4A5A4A;
--color-text-muted: #7A8A7A;
--color-text-inverse: #FFFFFF;

--color-accent: #2E7D32;
--color-accent-hover: #1B5E20;
--color-accent-subtle: rgba(46, 125, 50, 0.08);
--color-accent-glow: rgba(46, 125, 50, 0.15);

--color-border: rgba(26, 46, 26, 0.10);
--color-border-hover: rgba(26, 46, 26, 0.20);
--color-divider: rgba(26, 46, 26, 0.06);

/* Gradient Tokens */
--gradient-hero: linear-gradient(135deg, #EBF7EE 0%, #FFFFFF 50%, #F0F8F2 100%);
--gradient-accent: linear-gradient(135deg, #2E7D32 0%, #388E3C 100%);
--gradient-card: linear-gradient(180deg, rgba(46, 125, 50, 0.03) 0%, transparent 100%);
--gradient-border: linear-gradient(135deg, rgba(46, 125, 50, 0.15), rgba(46, 125, 50, 0.03));
```

**Catatan penting:** Variabel lain di bawahnya (typography, spacing, layout, dll) TIDAK perlu diubah.

---

### ✅ Langkah 2: Ubah Font dari Serif ke Sans-Serif di `app/globals.css`

**File:** `app/globals.css`
**Baris yang diubah:** Baris 7 (Google Fonts import) dan baris 40-41 (font variables)

**2a. Ganti Google Fonts import (baris 7):**

```css
/* === SEBELUM === */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

/* === SESUDAH === */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
```

> **Penjelasan:** Kita hapus font Inter dan Lora, ganti dengan Poppins karena tema rynthra menggunakan font Poppins.

**2b. Ganti font variables (baris 40-41):**

```css
/* === SEBELUM === */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-serif: 'Lora', 'Georgia', 'Times New Roman', serif;

/* === SESUDAH === */
--font-sans: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-serif: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

> **Penjelasan:** Kita ganti KEDUA variabel ke Poppins. Set `--font-serif` juga ke Poppins agar SEMUA tempat yang pakai `var(--font-serif)` otomatis berubah tanpa harus edit satu per satu.

---

### ✅ Langkah 3: Ubah Heading Styles di `app/globals.css`

**File:** `app/globals.css`
**Baris yang diubah:** Baris 178-184

```css
/* === SEBELUM === */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-weight: 600;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

/* === SESUDAH === */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}
```

> **Penjelasan:** Heading sekarang pakai sans-serif + bold (700) sesuai analisis rynthra yang menyebutkan heading pakai bobot tebal (bold/black).

---

### ✅ Langkah 4: Ubah Shadow Values di `app/globals.css`

**File:** `app/globals.css`
**Baris yang diubah:** Baris 92-97

```css
/* === SEBELUM === */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.6);
--shadow-glow: 0 0 30px rgba(212, 168, 83, 0.15);

/* === SESUDAH === */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.10);
--shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.12);
--shadow-glow: 0 0 30px rgba(46, 125, 50, 0.10);
```

> **Penjelasan:** Shadow di tema light harus JAUH lebih subtle (opacity rendah). Tema dark pakai shadow opacity 0.3-0.6, tema light cukup 0.06-0.12.

---

### ✅ Langkah 5: Ubah Animasi `pulse-glow` di `app/globals.css`

**File:** `app/globals.css`
**Baris yang diubah:** Baris 251-254

```css
/* === SEBELUM === */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(212, 168, 83, 0.1); }
  50% { box-shadow: 0 0 40px rgba(212, 168, 83, 0.2); }
}

/* === SESUDAH === */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(46, 125, 50, 0.08); }
  50% { box-shadow: 0 0 40px rgba(46, 125, 50, 0.15); }
}
```

---

### ✅ Langkah 6: Ubah Scrollbar Styling di `app/globals.css`

**File:** `app/globals.css`
**Baris yang diubah:** Baris 211-227

```css
/* === SEBELUM === */
::-webkit-scrollbar-track {
  background: var(--color-bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-muted);
}

/* === SESUDAH === */
::-webkit-scrollbar-track {
  background: var(--color-bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: #C8D6C8;
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: #A0B0A0;
}
```

---

### ✅ Langkah 7: Ubah Header Background untuk Light Theme

**File:** `components/header.module.css`
**Baris yang diubah:** Baris 12-16

```css
/* === SEBELUM === */
.header {
  /* ... properties lainnya tetap ... */
  background: var(--color-bg-glass);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--color-border);
}

/* === SESUDAH === */
.header {
  /* ... properties lainnya tetap ... */
  background: var(--color-bg-glass);
  backdrop-filter: blur(16px) saturate(120%);
  -webkit-backdrop-filter: blur(16px) saturate(120%);
  border-bottom: 1px solid var(--color-border);
}
```

> **Penjelasan:** Di tema light, saturasi backdrop-filter terlalu tinggi akan terlihat aneh. Turunkan dari 180% ke 120%.

---

### ✅ Langkah 8: Ubah Logo Icon Background

**File:** `components/header.module.css`
**Baris yang diubah:** Baris 46-59

Tidak perlu ubah karena sudah pakai `var(--gradient-accent)` yang akan otomatis berubah dari gold ke hijau setelah Langkah 1.

**TIDAK ADA PERUBAHAN** — sudah benar karena pakai CSS variable.

---

### ✅ Langkah 9: Ubah Footer Background ke Deep Navy Blue

**File:** `components/footer.module.css`
**Baris yang diubah:** Baris 2-6

```css
/* === SEBELUM === */
.footer {
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-secondary);
}

/* === SESUDAH === */
.footer {
  margin-top: auto;
  border-top: none;
  background: #1E2B4F;
}
```

> **Penjelasan:** Footer rynthra pakai warna `#1E2B4F` (Deep Navy Blue) yang BERBEDA dari background utama. Ini hardcoded karena tidak ada di design tokens.

---

### ✅ Langkah 10: Ubah Warna Teks Footer untuk Kontras di Navy Blue

**File:** `components/footer.module.css`

**10a. Ubah warna logo footer (baris 32-37):**

```css
/* === SEBELUM === */
.footerLogo {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--color-text-primary);
}

/* === SESUDAH === */
.footerLogo {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: var(--text-xl);
  color: #FFFFFF;
}
```

**10b. Ubah warna tagline footer (baris 41-46):**

```css
/* === SESUDAH === */
.footerTagline {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
```

**10c. Ubah warna footer links (baris 54-61):**

```css
/* === SESUDAH === */
.footerLink {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footerLink:hover { color: #FFFFFF; }
```

**10d. Ubah warna border divider (baris 65-71):**

```css
/* === SESUDAH === */
.footerBottom {
  width: 100%;
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
}
```

**10e. Ubah warna copyright (baris 73-78):**

```css
/* === SESUDAH === */
.copyright {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.4);
}

.copyrightHeart { color: #EBF7EE; }
```

**10f. Ubah footer gradient line (baris 8-12):**

```css
/* === SEBELUM === */
.footerGradient {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%);
  opacity: 0.3;
}

/* === SESUDAH === */
.footerGradient {
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #2E7D32 50%, transparent 100%);
  opacity: 0.5;
}
```

---

### ✅ Langkah 11: Ubah Hero Section di Homepage

**File:** `app/page.module.css`
**Baris yang diubah:** Baris 13-17 dan baris 38

**11a. Ubah hero overlay (baris 13-17):**

```css
/* === SEBELUM === */
.heroOverlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(212, 168, 83, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

/* === SESUDAH === */
.heroOverlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(46, 125, 50, 0.05) 0%, transparent 70%);
  pointer-events: none;
}
```

**11b. Ubah hero label border (baris 38):**

```css
/* === SEBELUM === */
border: 1px solid rgba(212, 168, 83, 0.25);

/* === SESUDAH === */
border: 1px solid rgba(46, 125, 50, 0.20);
```

---

### ✅ Langkah 12: Ubah Back Link Border di Detail Artikel

**File:** `app/artikel/[slug]/single-article.module.css`
**Baris yang diubah:** Baris 106

```css
/* === SEBELUM === */
border: 1px solid rgba(212, 168, 83, 0.25);

/* === SESUDAH === */
border: 1px solid rgba(46, 125, 50, 0.20);
```

---

## Checklist Ringkasan

Gunakan checklist ini untuk memastikan SEMUA langkah sudah selesai:

- [ ] **Langkah 1:** Ganti semua warna di `:root` (globals.css baris 11-37)
- [ ] **Langkah 2a:** Ganti Google Fonts import (globals.css baris 7)
- [ ] **Langkah 2b:** Ganti font variables (globals.css baris 40-41)
- [ ] **Langkah 3:** Ubah heading styles (globals.css baris 178-184)
- [ ] **Langkah 4:** Ubah shadow values (globals.css baris 92-97)
- [ ] **Langkah 5:** Ubah animasi pulse-glow (globals.css baris 251-254)
- [ ] **Langkah 6:** Ubah scrollbar styling (globals.css baris 216-227)
- [ ] **Langkah 7:** Ubah header backdrop-filter (header.module.css baris 13-14)
- [ ] **Langkah 8:** Skip — sudah otomatis via CSS variables
- [ ] **Langkah 9:** Ubah footer background ke navy blue (footer.module.css baris 2-6)
- [ ] **Langkah 10:** Ubah SEMUA warna teks footer (footer.module.css — 6 sub-langkah)
- [ ] **Langkah 11:** Ubah hero overlay & label border (page.module.css)
- [ ] **Langkah 12:** Ubah back link border (single-article.module.css baris 106)

---

## File yang TIDAK Perlu Diubah

File-file berikut **sudah benar** karena hanya menggunakan CSS variables (akan otomatis berubah setelah Langkah 1-2):

- ✅ `app/layout.jsx` — tidak ada warna hardcoded
- ✅ `components/Header.jsx` — tidak ada warna hardcoded
- ✅ `components/Footer.jsx` — tidak ada warna hardcoded
- ✅ `app/page.jsx` — tidak ada warna hardcoded
- ✅ `app/artikel/page.jsx` — tidak ada warna hardcoded
- ✅ `app/artikel/[slug]/page.jsx` — tidak ada warna hardcoded
- ✅ `app/about/page.jsx` — tidak ada warna hardcoded
- ✅ `app/about/about.module.css` — hanya pakai CSS variables
- ✅ `app/artikel/articles.module.css` — hanya pakai CSS variables

---

## Verifikasi Setelah Selesai

Setelah semua langkah selesai, jalankan:

```bash
npm run dev
```

Lalu buka browser dan periksa:

1. **Homepage (`/`)** — Background putih, teks gelap, hero section terang, card warna mint green `#EBF7EE`
2. **Halaman Artikel (`/artikel`)** — Card grid berlatar mint green, teks gelap, accent hijau
3. **Detail Artikel (`/artikel/[slug]`)** — Teks hitam di latar putih, nyaman dibaca
4. **About (`/about`)** — Layout terang, badge border hijau
5. **Footer (semua halaman)** — Background navy blue `#1E2B4F`, teks putih
6. **Header (semua halaman)** — Background transparan/putih, blur effect
7. **Font** — SEMUA teks (heading & body) menggunakan sans-serif Poppins

Jika ada warna gold (`#d4a853`) atau latar hitam (`#0f0f0f`) yang masih terlihat, berarti ada langkah yang terlewat.
