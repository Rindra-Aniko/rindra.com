import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

/**
 * Schema tabel 'articles'
 *
 * Tabel ini menyimpan seluruh data artikel portal membaca.
 * Kolom:
 *   - id         : Primary key auto increment
 *   - title      : Judul artikel (wajib diisi)
 *   - slug       : URL-friendly identifier, harus unik (wajib diisi)
 *   - excerpt    : Ringkasan singkat artikel
 *   - content    : Isi lengkap artikel
 *   - created_at : Timestamp pembuatan, otomatis terisi saat insert
 */
export const articles = sqliteTable("articles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").unique().notNull(),
  excerpt: text("excerpt"),
  content: text("content"),
  createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});
