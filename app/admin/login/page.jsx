"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import styles from "./login.module.css";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Login Admin</h1>
          <p className={styles.desc}>Masuk untuk mengelola portal membaca</p>
        </div>

        <form action={formAction} className={styles.form}>
          {state?.error && (
            <div className={styles.error} role="alert">
              {state.error}
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              placeholder="Masukkan username"
              required
              disabled={isPending}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Masukkan password"
              required
              disabled={isPending}
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={isPending}
          >
            {isPending ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
