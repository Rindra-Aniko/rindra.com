"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/app/actions/auth";
import styles from "./admin-layout.module.css";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  // Jika di halaman login, jangan tampilkan sidebar panel
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <div>
          <h2 className={styles.sidebarTitle}>Admin Panel</h2>
          <nav className={styles.nav}>
            <Link
              href="/admin"
              className={`${styles.navLink} ${
                pathname === "/admin" ? styles.navLinkActive : ""
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/admin/artikel/baru"
              className={`${styles.navLink} ${
                pathname === "/admin/artikel/baru" ? styles.navLinkActive : ""
              }`}
            >
              Tambah Artikel
            </Link>
            <Link
              href="/admin/password"
              className={`${styles.navLink} ${
                pathname === "/admin/password" ? styles.navLinkActive : ""
              }`}
            >
              Ubah Password
            </Link>
          </nav>
        </div>

        <form action={logoutAction}>
          <button type="submit" className={styles.logoutBtn}>
            Keluar (Logout)
          </button>
        </form>
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
