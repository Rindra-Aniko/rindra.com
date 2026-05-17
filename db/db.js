import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema.js";

/**
 * Koneksi Database menggunakan @libsql/client (Turso / SQLite)
 *
 * Untuk development lokal, gunakan URL file:
 *   TURSO_DATABASE_URL=file:./data/local.db
 *
 * Untuk production dengan Turso Cloud:
 *   TURSO_DATABASE_URL=libsql://your-db.turso.io
 *   TURSO_AUTH_TOKEN=your-token
 */
const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:./data/local.db",
  authToken: process.env.TURSO_AUTH_TOKEN || undefined,
});

export const db = drizzle(client, { schema });
