"use server";

import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretrynthrasecretkey12345";
const key = new TextEncoder().encode(JWT_SECRET);

/**
 * Helper untuk membuat slug ramah URL dari judul
 */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Ganti spasi dengan -
    .replace(/[^\w\-]+/g, "") // Hapus karakter non-word
    .replace(/\-\-+/g, "-") // Ganti beberapa - dengan satu -
    .replace(/^-+/, "") // Hapus - di awal
    .replace(/-+$/, ""); // Hapus - di akhir
}

/**
 * Action untuk menambahkan artikel baru
 */
export async function createArticleAction(prevState, formData) {
  const title = formData.get("title")?.trim();
  const content = formData.get("content")?.trim();
  const imageUrl = formData.get("imageUrl")?.trim();
  const metaDescription = formData.get("metaDescription")?.trim();

  if (!title || !content || !metaDescription) {
    return { error: "Judul, Konten, dan Meta Deskripsi wajib diisi" };
  }

  try {
    // Pastikan admin terautentikasi
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_session")?.value;

    if (!token) {
      return { error: "Sesi tidak valid, silakan login kembali" };
    }

    // Verifikasi token JWT
    await jwtVerify(token, key);

    // Buat slug dan excerpt
    let slug = slugify(title);
    const excerpt = metaDescription || (content.length > 150 ? content.slice(0, 150) + "..." : content);

    // Pastikan slug unik
    const existing = await db
      .select()
      .from(articles)
      .where(eq(articles.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      // Jika slug sudah ada, tambahkan timestamp acak di belakang
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    // Insert ke db
    await db.insert(articles).values({
      title,
      slug,
      excerpt,
      content,
      imageUrl: imageUrl || null,
      metaDescription,
    });

    // Revalidasi cache agar halaman terupdate instan
    revalidatePath("/");
    revalidatePath("/artikel");
  } catch (error) {
    console.error("Gagal membuat artikel:", error);
    return { error: "Terjadi kesalahan server saat menyimpan artikel" };
  }

  // Redirect ke admin dashboard
  redirect("/admin");
}

/**
 * Action untuk mengedit artikel yang sudah ada
 */
export async function editArticleAction(prevState, formData) {
  const id = formData.get("id");
  const title = formData.get("title")?.trim();
  const content = formData.get("content")?.trim();
  const imageUrl = formData.get("imageUrl")?.trim();
  const metaDescription = formData.get("metaDescription")?.trim();

  if (!id || !title || !content || !metaDescription) {
    return { error: "Semua kolom wajib diisi, termasuk Meta Deskripsi" };
  }

  try {
    // Pastikan admin terautentikasi
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_session")?.value;

    if (!token) {
      return { error: "Sesi tidak valid, silakan login kembali" };
    }

    // Verifikasi token JWT
    await jwtVerify(token, key);

    // Generate excerpt
    const excerpt = metaDescription || (content.length > 150 ? content.slice(0, 150) + "..." : content);

    // Update data di db
    await db
      .update(articles)
      .set({
        title,
        excerpt,
        content,
        imageUrl: imageUrl || null,
        metaDescription,
      })
      .where(eq(articles.id, Number(id)));

    // Revalidasi cache agar halaman terupdate instan
    revalidatePath("/");
    revalidatePath("/artikel");
    revalidatePath("/artikel/[slug]", "page");
  } catch (error) {
    console.error("Gagal mengupdate artikel:", error);
    return { error: "Terjadi kesalahan server saat menyimpan artikel" };
  }

  // Redirect ke admin dashboard
  redirect("/admin");
}
