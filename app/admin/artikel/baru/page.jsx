"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createArticleAction } from "@/app/actions/article";
import styles from "./form.module.css";

export default function NewArticlePage() {
  const [state, formAction, isPending] = useActionState(createArticleAction, null);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Tambah Artikel Baru</h1>

      <form action={formAction} className={styles.form}>
        {state?.error && (
          <div className={styles.error} role="alert">
            {state.error}
          </div>
        )}

        <div className={styles.field}>
          <label htmlFor="title" className={styles.label}>
            Judul Artikel
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            placeholder="Masukkan judul artikel..."
            required
            disabled={isPending}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="imageUrl" className={styles.label}>
            URL Gambar Sampul (Opsional)
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            className={styles.input}
            placeholder="Contoh: https://images.unsplash.com/... atau kosongkan"
            disabled={isPending}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="metaDescription" className={styles.label}>
            Meta Deskripsi (SEO)
          </label>
          <textarea
            id="metaDescription"
            name="metaDescription"
            className={styles.textarea}
            style={{ minHeight: "80px" }}
            placeholder="Ringkasan pendek artikel untuk optimasi SEO Google (maks 160 karakter)..."
            maxLength={160}
            required
            disabled={isPending}
          ></textarea>
        </div>

        <div className={styles.field}>
          <label htmlFor="content" className={styles.label}>
            Isi Konten Artikel
          </label>
          <textarea
            id="content"
            name="content"
            className={styles.textarea}
            placeholder="Tuliskan isi konten artikel secara detail disini..."
            required
            disabled={isPending}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <Link href="/admin" className={styles.btnCancel}>
            Batal
          </Link>
          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={isPending}
          >
            {isPending ? "Menyimpan..." : "Publikasikan Artikel"}
          </button>
        </div>
      </form>
    </div>
  );
}
