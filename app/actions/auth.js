"use server";

import { db } from "@/db/db";
import { admins } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtKey } from "@/lib/auth-config";

const key = jwtKey;

/**
 * Melakukan login admin
 */
export async function loginAction(prevState, formData) {
  const username = formData.get("username")?.trim();
  const password = formData.get("password");

  if (!username || !password) {
    return { error: "Semua kolom harus diisi" };
  }

  try {
    const results = await db
      .select()
      .from(admins)
      .where(eq(admins.username, username))
      .limit(1);

    const admin = results[0];

    if (!admin) {
      return { error: "Username atau password salah" };
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return { error: "Username atau password salah" };
    }

    // Buat JWT token
    const token = await new SignJWT({ id: admin.id, username: admin.username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(key);

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    });
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Terjadi kesalahan pada server" };
  }

  // Redirect harus diletakkan di luar block try-catch Next.js redirect throw behavior
  redirect("/admin");
}

/**
 * Logout admin
 */
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}

/**
 * Mengubah password admin
 */
export async function changePasswordAction(prevState, formData) {
  const oldPassword = formData.get("oldPassword");
  const newPassword = formData.get("newPassword");
  const confirmPassword = formData.get("confirmPassword");

  if (!oldPassword || !newPassword || !confirmPassword) {
    return { error: "Semua kolom harus diisi" };
  }

  if (newPassword !== confirmPassword) {
    return { error: "Password baru dan konfirmasi password tidak cocok" };
  }

  if (newPassword.length < 6) {
    return { error: "Password baru minimal 6 karakter" };
  }

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_session")?.value;

    if (!token) {
      return { error: "Sesi Anda telah berakhir. Silakan login kembali." };
    }

    // Verifikasi Token JWT
    const { payload } = await jwtVerify(token, key);
    const userId = payload.id;

    // Ambil data admin
    const results = await db
      .select()
      .from(admins)
      .where(eq(admins.id, userId))
      .limit(1);

    const admin = results[0];
    if (!admin) {
      return { error: "Admin tidak ditemukan" };
    }

    // Verifikasi password lama
    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) {
      return { error: "Password lama salah" };
    }

    // Hash password baru & simpan
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db
      .update(admins)
      .set({ password: hashedPassword })
      .where(eq(admins.id, userId));

    return { success: "Password berhasil diperbarui!" };
  } catch (error) {
    console.error("Gagal mengubah password:", error);
    return { error: "Gagal mengubah password karena kesalahan server" };
  }
}
