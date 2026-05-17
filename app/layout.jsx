import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Rindra.com — Portal Membaca",
    template: "%s | Rindra.com",
  },
  description:
    "Portal membaca yang menghadirkan artikel-artikel naratif mendalam tentang sejarah, budaya, dan peristiwa penting Indonesia.",
  keywords: ["portal membaca", "artikel sejarah", "sejarah indonesia", "rindra"],
  authors: [{ name: "Rindra Aniko" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Rindra.com",
    title: "Rindra.com — Portal Membaca",
    description:
      "Portal membaca yang menghadirkan artikel-artikel naratif mendalam tentang sejarah Indonesia.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
