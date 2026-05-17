"use client";

import { useActionState } from "react";
import { changePasswordAction } from "@/app/actions/auth";
import styles from "./password.module.css";

export default function ChangePasswordPage() {
  const [state, formAction, isPending] = useActionState(changePasswordAction, null);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Ubah Password Admin</h1>

      <form action={formAction} className={styles.form}>
        {state?.error && (
          <div className={styles.error} role="alert">
            {state.error}
          </div>
        )}

        {state?.success && (
          <div className={styles.success} role="alert">
            {state.success}
          </div>
        )}

        <div className={styles.field}>
          <label htmlFor="oldPassword" className={styles.label}>
            Password Lama
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            className={styles.input}
            placeholder="Masukkan password lama"
            required
            disabled={isPending}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="newPassword" className={styles.label}>
            Password Baru
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className={styles.input}
            placeholder="Masukkan password baru (min. 6 karakter)"
            required
            disabled={isPending}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Konfirmasi Password Baru
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={styles.input}
            placeholder="Ulangi password baru"
            required
            disabled={isPending}
          />
        </div>

        <button
          type="submit"
          className={styles.btnSubmit}
          disabled={isPending}
        >
          {isPending ? "Memperbarui..." : "Simpan Password"}
        </button>
      </form>
    </div>
  );
}
