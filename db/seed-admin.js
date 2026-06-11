import { db } from "./db.js";
import { admins } from "./schema.js";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

async function seedAdmin() {
  console.log("Seeding default admin...");
  try {
    // Cek apakah admin sudah ada untuk menghindari duplikat
    const existingAdmin = await db
      .select()
      .from(admins)
      .where(eq(admins.username, "admin"))
      .limit(1);

    const hashedPassword = await bcrypt.hash("Kontrol301286", 10);

    if (existingAdmin.length > 0) {
      await db
        .update(admins)
        .set({ password: hashedPassword })
        .where(eq(admins.username, "admin"));
      console.log("Password admin default berhasil diperbarui menjadi Kontrol301286!");
      process.exit(0);
    }

    await db.insert(admins).values({
      username: "admin",
      password: hashedPassword,
    });
    console.log("Admin default (admin / Kontrol301286) berhasil ditambahkan!");
    process.exit(0);
  } catch (error) {
    console.error("Gagal menambahkan admin:", error);
    process.exit(1);
  }
}

seedAdmin();
