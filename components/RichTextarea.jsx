"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./RichTextarea.module.css";

export default function RichTextarea({
  id,
  name,
  defaultValue = "",
  placeholder = "",
  required = false,
  disabled = false,
  className = "",
  rows = 15,
}) {
  const [text, setText] = useState(defaultValue);
  const [mode, setMode] = useState("write"); // 'write' or 'preview'
  const textareaRef = useRef(null);

  // Sync defaultValue when it is loaded asynchronously or changed
  useEffect(() => {
    if (defaultValue) {
      setText(defaultValue);
    }
  }, [defaultValue]);

  // Ref to tracking insertion of tag
  const insertTag = (tagOpen, tagClose = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selection = text.substring(start, end);
    const before = text.substring(0, start);
    const after = text.substring(end);

    let replacement = "";
    if (tagClose) {
      replacement = `${tagOpen}${selection || ""}${tagClose}`;
    } else {
      replacement = tagOpen;
    }

    const newText = before + replacement + after;
    setText(newText);

    // Focus back on textarea and set selection
    setTimeout(() => {
      textarea.focus();
      const selectionOffset = tagOpen.length;
      if (selection) {
        textarea.setSelectionRange(start + selectionOffset, start + selectionOffset + selection.length);
      } else {
        const newCursorPos = start + selectionOffset;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      }
    }, 50);
  };

  const handleLink = () => {
    const url = prompt("Masukkan URL tautan (contoh: https://google.com):", "https://");
    if (url === null) return;
    insertTag(`<a href="${url}" target="_blank" rel="noopener noreferrer">`, "</a>");
  };

  const handleList = (listType) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selection = text.substring(start, end);
    
    const items = selection
      ? selection.split("\n").map(item => `  <li>${item}</li>`).join("\n")
      : "  <li></li>";

    const tagOpen = listType === "ul" ? "<ul>\n" : "<ol>\n";
    const tagClose = listType === "ul" ? "\n</ul>" : "\n</ol>";
    
    insertTag(tagOpen + items, tagClose);
  };

  return (
    <div className={styles.container}>
      {/* Editor & Preview Toggle Tabs */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${mode === "write" ? styles.tabActive : ""}`}
            onClick={() => setMode("write")}
          >
            Tulis Konten (HTML)
          </button>
          <button
            type="button"
            className={`${styles.tab} ${mode === "preview" ? styles.tabActive : ""}`}
            onClick={() => setMode("preview")}
          >
            Pratinjau
          </button>
        </div>
      </div>

      <div className={`${styles.editorWrapper} ${mode !== "write" ? styles.hidden : ""}`}>
        {/* Formatter Toolbar */}
        <div className={styles.toolbar}>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<strong>", "</strong>")}
            title="Tebal (Bold)"
            disabled={disabled}
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<em>", "</em>")}
            title="Miring (Italic)"
            disabled={disabled}
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<h2>", "</h2>")}
            title="Heading 2 (H2)"
            disabled={disabled}
          >
            H2
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<h3>", "</h3>")}
            title="Heading 3 (H3)"
            disabled={disabled}
          >
            H3
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<p>", "</p>")}
            title="Paragraf"
            disabled={disabled}
          >
            P
          </button>
          <span className={styles.separator}></span>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleLink}
            title="Sisipkan Tautan (Link)"
            disabled={disabled}
          >
            🔗 Tautan
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => handleList("ul")}
            title="Daftar Bulat (UL)"
            disabled={disabled}
          >
            • Daftar
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => handleList("ol")}
            title="Daftar Angka (OL)"
            disabled={disabled}
          >
            1. Daftar
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<blockquote>", "</blockquote>")}
            title="Sisipkan Kutipan"
            disabled={disabled}
          >
            ” Kutipan
          </button>
          <span className={styles.separator}></span>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<hr />\n")}
            title="Garis Pembatas (HR)"
            disabled={disabled}
          >
            Garis (HR)
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => insertTag("<br />")}
            title="Baris Baru (BR)"
            disabled={disabled}
          >
            Ganti Baris
          </button>
        </div>

        {/* Text Area */}
        <textarea
          ref={textareaRef}
          id={id}
          name={name}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${styles.textarea} ${className}`}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
        />
      </div>

      <div className={`${styles.previewContainer} ${mode !== "preview" ? styles.hidden : ""}`}>
        {text ? (
          <div
            className={styles.previewContent}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ) : (
          <p className={styles.previewPlaceholder}>Tulis isi artikel Anda terlebih dahulu untuk melihat hasil pratinjau.</p>
        )}
      </div>
    </div>
  );
}
