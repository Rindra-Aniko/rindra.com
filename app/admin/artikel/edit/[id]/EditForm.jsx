"use client";

import { useActionState } from "react";
import Link from "next/link";
import { editArticleAction } from "@/app/actions/article";
import RichTextarea from "@/components/RichTextarea";
import styles from "../../baru/form.module.css";

export default function EditForm({ article }) {
  const [state, formAction, isPending] = useActionState(editArticleAction, null);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Edit Artikel</h1>

      <form action={formAction} className={styles.form}>
        {state?.error && (
          <div className={styles.error} role="alert">
            {state.error}
          </div>
        )}

        {/* Hidden input untuk menyalurkan ID artikel ke server action */}
        <input type="hidden" name="id" value={article.id} />

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
            defaultValue={article.title}
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
            defaultValue={article.imageUrl || ""}
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
            defaultValue={article.metaDescription || ""}
            maxLength={160}
            required
            disabled={isPending}
          ></textarea>
        </div>

        <div className={styles.field}>
          <label htmlFor="content" className={styles.label}>
            Isi Konten Artikel
          </label>
          <RichTextarea
            id="content"
            name="content"
            placeholder="Tuliskan isi konten artikel secara detail disini..."
            defaultValue={article.content || ""}
            required
            disabled={isPending}
          />
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
            {isPending ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </div>
  );
}
