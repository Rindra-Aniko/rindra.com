import styles from "./about.module.css";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Rindra.com adalah portal membaca yang menghadirkan artikel-artikel naratif mendalam tentang sejarah dan budaya Indonesia.",
  openGraph: {
    title: "Tentang Kami | Rindra.com",
    description:
      "Portal membaca dengan fokus pada narasi sejarah Indonesia.",
  },
};

const techStack = [
  "Next.js 15",
  "React 19",
  "Drizzle ORM",
  "Turso (SQLite)",
  "Vanilla CSS",
  "CSS Modules",
];

export default function AboutPage() {
  return (
    <div className={styles.about} id="about-page">
      <p className={styles.aboutLabel}>Tentang</p>
      <h1 className={styles.aboutTitle}>Tentang Rindra.com</h1>

      <div className={styles.aboutContent}>
        <p>
          <strong>Rindra.com</strong> adalah portal membaca yang didedikasikan
          untuk menghadirkan artikel-artikel naratif mendalam tentang sejarah,
          budaya, dan peristiwa-peristiwa penting yang membentuk Indonesia
          sebagai bangsa.
        </p>

        <p>
          Kami percaya bahwa sejarah bukan sekadar deretan fakta dan tanggal —
          sejarah adalah cerita tentang manusia-manusia biasa yang melakukan
          hal-hal luar biasa. Setiap artikel di portal ini ditulis dengan gaya
          naratif yang mendalam, mengajak pembaca untuk merasakan suasana,
          memahami konteks, dan menghayati makna di balik setiap peristiwa.
        </p>

        <p>
          Dari taktik gerilya di lereng Gunung Wilis hingga siaran darurat RRI
          yang menggemakan suara kemerdekaan ke seluruh dunia — setiap kisah
          memiliki pelajaran yang relevan hingga hari ini.
        </p>
      </div>

      <hr className={styles.divider} />

      <div className={styles.techStack}>
        <h2 className={styles.techTitle}>Dibangun Dengan</h2>
        <div className={styles.techList}>
          {techStack.map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
