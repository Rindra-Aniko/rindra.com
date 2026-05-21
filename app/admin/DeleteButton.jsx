"use client";

import { useTransition } from "react";
import { deleteArticleAction } from "@/app/actions/article";

export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan.")) {
      startTransition(async () => {
        const result = await deleteArticleAction(id);
        if (result?.error) {
          alert(result.error);
        }
      });
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      style={{
        color: "#ef4444",
        textDecoration: "underline",
        fontWeight: "500",
        background: "none",
        border: "none",
        cursor: isPending ? "wait" : "pointer",
        padding: 0,
        opacity: isPending ? 0.5 : 1,
        fontFamily: "inherit",
        fontSize: "inherit"
      }}
    >
      {isPending ? "Menghapus..." : "Hapus"}
    </button>
  );
}
