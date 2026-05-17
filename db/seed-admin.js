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

    if (existingAdmin.length > 0) {
      console.log("Admin default sudah ada!");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin12345", 10);
    await db.insert(admins).values({
      username: "admin",
      password: hashedPassword,
    });
    console.log("Admin default (admin / admin12345) berhasil ditambahkan!");
    process.exit(0);
  } catch (error) {
    console.error("Gagal menambahkan admin:", error);
    process.exit(1);
  }
}

seedAdmin();
