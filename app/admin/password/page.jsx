"use client";

import { useActionState, useState } from "react";
import { changePasswordAction } from "@/app/actions/auth";
import styles from "./password.module.css";

function PasswordField({ id, name, label, placeholder, disabled, isPending }) {
  const [show, setShow] = useState(false);
  
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <input
          type={show ? "text" : "password"}
          id={id}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          required
          disabled={isPending}
          style={{ paddingRight: "40px", width: "100%", boxSizing: "border-box" }}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          style={{
            position: "absolute",
            right: "10px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-muted)",
            padding: "5px",
            display: "flex",
            alignItems: "center"
          }}
          title={show ? "Sembunyikan" : "Tampilkan"}
        >
          {show ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

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

        <PasswordField 
          id="oldPassword" 
          name="oldPassword" 
          label="Password Lama" 
          placeholder="Masukkan password lama" 
          isPending={isPending} 
        />
        
        <PasswordField 
          id="newPassword" 
          name="newPassword" 
          label="Password Baru" 
          placeholder="Masukkan password baru (min. 6 karakter)" 
          isPending={isPending} 
        />
        
        <PasswordField 
          id="confirmPassword" 
          name="confirmPassword" 
          label="Konfirmasi Password Baru" 
          placeholder="Ulangi password baru" 
          isPending={isPending} 
        />

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
