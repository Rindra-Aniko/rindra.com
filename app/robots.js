export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/admin/login",
        "/api/",
        "/_next/",
      ],
    },
    sitemap: "https://ryndigitalpro.com/sitemap.xml",
  };
}
