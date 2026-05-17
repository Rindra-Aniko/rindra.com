import { db } from "@/db/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import EditForm from "./EditForm";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({ params }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  if (isNaN(id)) {
    notFound();
  }

  // Fetch data artikel dari db berdasarkan ID
  const results = await db
    .select()
    .from(articles)
    .where(eq(articles.id, id))
    .limit(1);

  const article = results[0];

  if (!article) {
    notFound();
  }

  return <EditForm article={article} />;
}
