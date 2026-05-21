import Link from "next/link";
import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { desc } from "drizzle-orm";
import styles from "./dashboard.module.css";
import DeleteButton from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  // Fetch data langsung dari database
  const allArticles = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.createdAt));

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard Admin</h1>
        <Link href="/admin/artikel/baru" className={styles.button}>
          <span>+</span> Tambah Artikel
        </Link>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Total Artikel</div>
          <div className={styles.statValue}>{allArticles.length}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Status Panel</div>
          <div className={styles.statValue} style={{ color: "#2E7D32" }}>
            Aktif
          </div>
        </div>
      </div>

      <div className={styles.tableSection}>
        <div className={styles.tableHeader}>Daftar Artikel Tersedia</div>
        {allArticles.length === 0 ? (
          <div className={styles.emptyState}>
            Belum ada artikel yang dipublikasikan. Silakan tambahkan artikel baru.
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Judul</th>
                <th>Slug</th>
                <th>Gambar</th>
                <th>Tanggal Rilis</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {allArticles.map((article) => {
                const date = article.createdAt
                  ? new Date(article.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "-";

                return (
                  <tr key={article.id}>
                    <td className={styles.articleTitle}>{article.title}</td>
                    <td><code>{article.slug}</code></td>
                    <td>
                      {article.imageUrl ? (
                        <span className={`${styles.badge} ${styles.badgeSuccess}`}>
                          Ada Gambar
                        </span>
                      ) : (
                        <span className={`${styles.badge} ${styles.badgeMuted}`}>
                          Tidak Ada
                        </span>
                      )}
                    </td>
                    <td suppressHydrationWarning>{date}</td>
                    <td>
                      <Link
                        href={`/admin/artikel/edit/${article.id}`}
                        style={{
                          color: "var(--color-accent)",
                          textDecoration: "underline",
                          fontWeight: "500",
                        }}
                      >
                        Edit
                      </Link>
                      <span style={{ margin: "0 8px", color: "var(--color-border)" }}>|</span>
                      <DeleteButton id={article.id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
