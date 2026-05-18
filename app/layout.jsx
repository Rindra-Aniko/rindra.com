import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Rindra.com — Jasa Pembuatan Website Profesional",
    template: "%s | Rindra.com",
  },
  description:
    "Tingkatkan kehadiran digital bisnis Anda bersama kami. Melayani jasa pembuatan landing page, company profile, e-commerce, hingga e-course yang responsif, modern, dan SEO-friendly.",
  keywords: [
    "jasa pembuatan website",
    "web developer indonesia",
    "bikin landing page",
    "jasa website company profile",
    "jasa toko online e-commerce",
    "pembuatan website e-course",
    "rancang website bisnis",
    "rindra aniko"
  ],
  authors: [{ name: "Rindra Aniko" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Rindra.com",
    title: "Rindra.com — Rancang Website Profesional untuk Bisnis Anda",
    description:
      "Tingkatkan kehadiran digital bisnis Anda bersama kami. Melayani jasa pembuatan landing page, company profile, e-commerce, hingga e-course yang responsif dan modern.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.variable} suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

