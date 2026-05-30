import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata = {
  title: {
    default: "Rindra Aniko — Jasa Pembuatan Website Profesional dan digital creator",
    template: "%s | Rindra Aniko",
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
    "Rindra Aniko"
  ],
  authors: [{ name: "Rindra Aniko" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Rindra Aniko",
    title: "Rindra Aniko — Rancang Website Profesional untuk Bisnis Anda",
    description:
      "Tingkatkan kehadiran digital bisnis Anda bersama kami. Melayani jasa pembuatan landing page, company profile, e-commerce, hingga e-course yang responsif dan modern.",
    images: [
      {
        url: "https://ryndigitalpro.com/asset/hero_rindra.webp",
        width: 1200,
        height: 630,
        alt: "Rindra Aniko — Rancang Website Profesional untuk Bisnis Anda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rindra Aniko — Rancang Website Profesional untuk Bisnis Anda",
    description:
      "Tingkatkan kehadiran digital bisnis Anda bersama kami. Melayani jasa pembuatan landing page, company profile, e-commerce, hingga e-course yang responsif dan modern.",
    images: ["https://ryndigitalpro.com/asset/hero_rindra.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.variable} suppressHydrationWarning>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}

