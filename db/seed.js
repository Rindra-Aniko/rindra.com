import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { articles } from "./schema.js";

/**
 * Script Seed Database
 *
 * Menambahkan data dummy naratif bertema sejarah Indonesia
 * ke dalam tabel 'articles'. Jalankan dengan:
 *   npm run db:seed
 *
 * Pastikan sudah menjalankan `npm run db:push` terlebih dahulu
 * agar tabel sudah terbuat di database.
 */

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:./data/local.db",
  authToken: process.env.TURSO_AUTH_TOKEN || undefined,
});

const db = drizzle(client);

const seedData = [
  {
    title: "Taktik Gerilya di Hutan Wilis: Perlawanan Tanpa Henti 1948-1949",
    slug: "taktik-gerilya-hutan-wilis",
    excerpt:
      "Di lereng-lereng Gunung Wilis, para pejuang republik menyusun strategi gerilya yang mengubah jalannya Perang Kemerdekaan Indonesia melawan Agresi Militer Belanda II.",
    content: `Di penghujung tahun 1948, ketika Belanda melancarkan Agresi Militer II dan berhasil menduduki Yogyakarta, harapan kemerdekaan Indonesia seolah tinggal seujung kuku. Namun di balik rimbunan hutan jati dan pinus di lereng Gunung Wilis, Jawa Timur, sebuah perlawanan yang keras kepala terus berkobar.

Kolonel Sungkono, panglima divisi yang ditugaskan di wilayah tersebut, menerapkan doktrin perang gerilya yang diadaptasi dari Perintah Siasat Nomor 1 yang dikeluarkan Jenderal Soedirman. Pasukan republik yang tersebar dalam unit-unit kecil bergerak seperti air — mengalir tanpa bentuk tetap, menyerang pos-pos Belanda di malam hari, lalu menghilang sebelum fajar menyingsing.

Para petani di sekitar Madiun, Ponorogo, dan Nganjuk menjadi tulang punggung logistik gerilya ini. Mereka menyembunyikan peluru di dalam tumpukan padi, menyelundupkan obat-obatan melalui pasar-pasar tradisional, dan menjadi mata-mata yang melaporkan pergerakan konvoi Belanda melalui isyarat asap dari tungku dapur mereka.

Salah satu operasi paling berani terjadi pada Februari 1949, ketika sekelompok kecil pejuang berhasil menyergap konvoi suplai Belanda di jalur Nganjuk-Kediri. Serangan kilat selama 23 menit itu menghasilkan rampasan senjata dan amunisi yang cukup untuk mempersenjatai dua kompi baru. Belanda, yang terbiasa dengan perang konvensional, frustrasi menghadapi musuh yang menolak untuk bertempur secara terbuka.

Taktik gerilya di Hutan Wilis ini membuktikan bahwa semangat kemerdekaan tidak bisa dipadamkan hanya dengan menduduki kota-kota besar. Perlawanan ini menjadi salah satu faktor yang mendorong dunia internasional mendesak Belanda untuk kembali ke meja perundingan.`,
  },
  {
    title:
      "Yogyakarta 1946: Ketika Ibu Kota Republik Menjadi Benteng Diplomasi",
    slug: "yogyakarta-1946-ibu-kota-diplomasi",
    excerpt:
      "Setelah Jakarta jatuh ke tangan Belanda, Yogyakarta menjadi pusat pemerintahan republik sekaligus panggung diplomasi internasional yang menentukan nasib bangsa.",
    content: `Pada Januari 1946, pemerintahan Republik Indonesia resmi memindahkan ibu kota dari Jakarta ke Yogyakarta. Keputusan ini bukan sekadar taktik mundur — ini adalah pernyataan bahwa republik akan tetap berdiri, apapun yang terjadi.

Sultan Hamengkubuwono IX membuka pintu keraton dan seluruh wilayah kesultanan untuk menampung pemerintahan republik. Gedung Agung, bekas kediaman residen Belanda, disulap menjadi Istana Kepresidenan. Di sinilah Soekarno dan Hatta menjalankan roda pemerintahan, menerima tamu-tamu diplomatik, dan menyusun strategi untuk mendapatkan pengakuan internasional.

Yogyakarta pada masa itu adalah kota yang luar biasa hidup. Di Malioboro, para diplomat asing berpapasan dengan pejuang yang baru turun dari medan pertempuran. Di warung-warung kopi, intelektual seperti Sjahrir dan Amir Sjarifuddin mendiskusikan posisi perundingan Indonesia sambil mendengarkan gamelan yang mengalun dari keraton.

Soekarno sendiri kerap terlihat bersepeda di jalanan Yogyakarta, berhenti untuk bercakap-cakap dengan rakyat biasa. Ini bukan sekadar pencitraan — ini adalah cara presiden pertama republik menunjukkan bahwa pemerintahan ini milik rakyat, bukan sebuah rezim elitis yang bersembunyi di balik tembok istana.

Momen paling krusial terjadi ketika delegasi Komisi Tiga Negara (KTN) yang terdiri dari Amerika Serikat, Australia, dan Belgia tiba di Yogyakarta untuk mediasi konflik Indonesia-Belanda. Penerimaan mereka di Gedung Agung, dengan protokol yang sempurna meskipun dalam kondisi perang, membuktikan bahwa Indonesia adalah negara yang serius dan layak diperhitungkan di panggung dunia.

Yogyakarta bukan hanya ibu kota sementara — ia adalah simbol ketahanan sebuah bangsa muda yang menolak untuk menyerah.`,
  },
  {
    title:
      "Siaran Darurat RRI: Suara Kemerdekaan yang Tak Pernah Padam",
    slug: "siaran-darurat-rri-suara-kemerdekaan",
    excerpt:
      "Di tengah gempuran Agresi Militer Belanda, Radio Republik Indonesia terus menyiarkan berita dan semangat juang dari studio-studio darurat yang berpindah-pindah.",
    content: `Ketika pasukan paratropis Belanda mendarat di Maguwo dan menduduki Yogyakarta pada 19 Desember 1948, salah satu target pertama mereka adalah studio Radio Republik Indonesia (RRI). Belanda tahu bahwa radio adalah senjata paling berbahaya yang dimiliki republik — bukan karena bisa menembakkan peluru, tapi karena bisa menembakkan harapan.

Namun para teknisi RRI sudah mengantisipasi hal ini. Beberapa hari sebelum serangan, peralatan siaran cadangan telah diselundupkan ke berbagai lokasi rahasia. Pemancar-pemancar kecil dengan daya pancar terbatas disembunyikan di rumah-rumah penduduk, di gua-gua, bahkan di atas gerobak sapi yang berpindah-pindah.

"Di sini Radio Republik Indonesia... kami tetap merdeka!" — kalimat pembuka yang disiarkan dari studio darurat di Solo menjadi ikonik. Suara penyiar yang sedikit bergetar karena pemancar yang tidak stabil justru menambah kesan dramatis dan autentik. Siaran-siaran darurat ini mengabarkan kepada dunia bahwa Indonesia belum takluk.

Salah satu figur kunci dalam operasi radio darurat ini adalah Maladi, Menteri Penerangan yang secara pribadi mengawasi perpindahan peralatan dan memastikan siaran tidak pernah terputus total. Para teknisi bekerja dengan peralatan seadanya — antena dari kawat jemuran, generator dari mesin mobil bekas, dan studio dari ruang tamu rumah petani.

Siaran RRI darurat ini memiliki dampak yang jauh melampaui wilayah Indonesia. Stasiun-stasiun radio di India, Australia, dan negara-negara Asia lainnya menangkap dan menyiarkan ulang berita dari RRI, menciptakan gelombang simpati internasional terhadap perjuangan Indonesia. PBB, yang awalnya enggan campur tangan, akhirnya mengeluarkan resolusi yang mengecam agresi Belanda — sebagian besar karena tekanan opini publik global yang dipicu oleh siaran-siaran radio ini.

Kisah RRI darurat mengajarkan bahwa dalam peperangan modern, narasi sama pentingnya dengan peluru. Mereka yang menguasai cerita, menguasai masa depan.`,
  },
  {
    title:
      "Serangan Umum 1 Maret 1949: Enam Jam yang Mengubah Sejarah Diplomasi",
    slug: "serangan-umum-1-maret-1949",
    excerpt:
      "Serangan besar-besaran ke jantung kota Yogyakarta selama enam jam membuktikan kepada dunia bahwa TNI masih eksis dan republik tidak pernah runtuh.",
    content: `Menjelang akhir Februari 1949, suasana di markas gerilya TNI sangat tegang. Belanda telah menduduki hampir seluruh kota besar di Jawa, dan di arena internasional, posisi tawar Indonesia semakin lemah. Dewan Keamanan PBB ragu-ragu — apakah Indonesia benar-benar masih memiliki pemerintahan dan kekuatan militer yang fungsional?

Letkol Soeharto, yang saat itu menjabat Komandan Brigade X/Wehrkreise III, menerima perintah dari Sultan Hamengkubuwono IX dan Panglima Besar Soedirman untuk melancarkan serangan besar ke Yogyakarta. Tujuannya bukan untuk merebut kota secara permanen — itu mustahil dengan kekuatan yang ada — melainkan untuk membuktikan kepada dunia bahwa TNI masih hidup dan mampu menyerang.

Dini hari tanggal 1 Maret 1949, sekitar 2.000 pejuang menyerbu Yogyakarta dari berbagai arah. Pertempuran pecah di seluruh penjuru kota. Pos-pos Belanda diserang, gudang senjata dirampas, dan bendera Merah Putih dikibarkan di beberapa titik strategis. Selama enam jam penuh, Yogyakarta kembali menjadi milik republik.

Yang membuat serangan ini begitu cemerlang bukanlah aspek militernya — meskipun koordinasi antar satuan sangat mengesankan untuk pasukan gerilya — melainkan dampak politiknya. Berita tentang serangan ini langsung tersebar ke seluruh dunia. Klaim Belanda bahwa TNI sudah hancur dan republik sudah bubar terbantahkan secara dramatis.

Di New York, delegasi Indonesia di PBB menggunakan berita serangan ini sebagai senjata diplomatik paling ampuh. "Lihatlah," kata mereka kepada anggota Dewan Keamanan, "ini bukti bahwa Indonesia masih berdiri. Ini bukti bahwa rakyat Indonesia menolak penjajahan."

Resolusi Dewan Keamanan PBB yang menuntut pengembalian pemerintahan republik dan gencatan senjata segera dikeluarkan tidak lama setelah serangan ini. Enam jam pertempuran di Yogyakarta telah melakukan apa yang berbulan-bulan diplomasi gagal capai.

Serangan Umum 1 Maret bukan tentang kemenangan militer — ini tentang kemenangan narasi. Dan dalam perang kemerdekaan, narasi adalah segalanya.`,
  },
  {
    title:
      "Perundingan Roem-Roijen: Seni Diplomasi di Tengah Badai Perang",
    slug: "perundingan-roem-roijen-diplomasi",
    excerpt:
      "Ketika senjata berbicara di medan perang, di meja perundingan dua diplomat dari kubu yang berseberangan merancang jalan menuju pengakuan kedaulatan Indonesia.",
    content: `Pada April 1949, di tengah tekanan internasional yang semakin besar, Belanda akhirnya bersedia kembali ke meja perundingan. Perundingan yang kemudian dikenal sebagai Perjanjian Roem-Roijen ini mempertemukan Mohammad Roem dari pihak Indonesia dan Herman van Roijen dari pihak Belanda, dengan Merle Cochran dari Amerika Serikat sebagai mediator.

Mohammad Roem, diplomat berusia 41 tahun yang tenang namun tajam, menghadapi tugas yang sangat berat. Ia harus bernegosiasi dari posisi yang secara militer lemah — presiden dan wakil presidennya ditawan, ibu kotanya diduduki — namun secara politik kuat, berkat simpati internasional dan tekanan PBB.

Perundingan berlangsung alot. Belanda menginginkan konsesi keamanan yang luas, sementara Indonesia menuntut pengembalian pemerintahan ke Yogyakarta sebagai syarat mutlak. Roem, dengan gaya diplomatiknya yang khas — sopan namun tak pernah mundur dalam hal prinsip — berhasil menegosiasikan kesepakatan yang menjadi batu loncatan menuju pengakuan kedaulatan penuh.

Poin-poin kunci perjanjian ini termasuk: penghentian perang gerilya oleh TNI, pengembalian pemerintahan RI ke Yogyakarta, dan kesepakatan untuk mengadakan Konferensi Meja Bundar di Den Haag. Meskipun banyak pihak di Indonesia yang menganggap perjanjian ini terlalu lunak, Roem memahami bahwa kadang-kadang, kemenangan diplomasi membutuhkan kesabaran dan kerelaan untuk menerima kemenangan bertahap.

Perundingan Roem-Roijen mengajarkan pelajaran penting: bahwa diplomasi bukanlah tentang menang atau kalah, melainkan tentang menemukan jalan yang bisa dilalui bersama. Dalam konteks perang kemerdekaan, ini adalah seni yang sama pentingnya dengan strategi militer.`,
  },
];

async function seed() {
  console.log("🌱 Memulai proses seeding database...\n");

  try {
    for (const article of seedData) {
      await db.insert(articles).values({
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        imageUrl: article.imageUrl || null,
        metaDescription: article.metaDescription || article.excerpt,
      });
      console.log(`  ✅ Artikel ditambahkan: "${article.title}"`);
    }

    console.log(`\n🎉 Seeding selesai! ${seedData.length} artikel berhasil ditambahkan.`);
  } catch (error) {
    console.error("❌ Error saat seeding:", error.message);
    process.exit(1);
  }

  process.exit(0);
}

seed();
