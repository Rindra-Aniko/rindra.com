# 📑 Issue: Merapikan Data `excerpt` dan `metaDescription` Artikel

## Deskripsi Masalah

Saat ini terdapat ketidakkonsistenan pada teks ringkasan artikel di database.
1. Beberapa artikel memiliki `excerpt` yang terpotong secara otomatis oleh sistem (contohnya: *"Pertempuran Ambarawa terjadi pada tanggal 20 Oktober hingga 15 Desember 1945 di Ambarawa, Jawa Tengah. Pertempuran ini pecah antara pasukan Tentara Ke..."*).
2. Artikel yang sama mungkin memiliki `metaDescription` yang jauh lebih rapi, namun karena `excerpt` adalah field yang ditampilkan pada komponen UI (seperti halaman daftar artikel), potongan kalimat yang tidak selesai ini mengurangi estetika tampilan portal kita.
3. Sebagian besar artikel seed awal memiliki `excerpt` yang rapi namun `metaDescription` bernilai `null`.

Agar metadata dan ringkasan artikel selalu konsisten dan tampak profesional, kita perlu merapikannya di tingkat database.

---

## Solusi & Rencana Tindakan

Kita akan menjalankan skrip pembaruan (update script) pada database untuk menyelaraskan `excerpt` dan `metaDescription`. 

### Langkah-langkah Pembaruan Data:
1. **Untuk artikel dengan ID = 6 (Sejarah Pertempuran Ambarawa):**
   - Saat ini `excerpt`-nya terpotong di tengah kata (*"Tentara Ke..."*).
   - Kita akan menyalin nilai dari `metaDescription` yang sudah rapi (*"Pertempuran Ambarawa adalah perjuangan heroik Tentara Keamanan Rakyat (TKR) yang dipimpin Kolonel Sudirman dalam mengusir Sekutu dari Jawa Tengah."*) untuk menggantikan `excerpt` yang terpotong tersebut.

2. **Untuk artikel-artikel awal (ID 1 sampai 5):**
   - Saat ini `metaDescription` mereka bernilai `null` sedangkan `excerpt` sudah ditulis dengan sangat baik dan rapi secara manual.
   - Kita akan mengisi field `metaDescription` mereka dengan nilai dari `excerpt` sehingga untuk kebutuhan SEO dan metadata, mereka sudah memiliki deskripsi yang valid.

### Hasil yang Diharapkan:
- Komponen UI yang merender `article.excerpt` pada *card* atau halaman daftar artikel akan menampilkan kalimat yang utuh dan mudah dibaca.
- Tag meta SEO (`description` dan `openGraph`) akan selalu memiliki teks yang bersih.
- Data di dalam database `local.db` kita menjadi seragam dan bersih.

---

*(Catatan untuk Developer Junior: Menyelaraskan teks ringkasan untuk meta tag SEO dan excerpt UI adalah praktik terbaik agar pengguna dan mesin pencari (seperti Google) sama-sama mendapatkan rangkuman konten yang berkualitas).*
