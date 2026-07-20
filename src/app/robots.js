export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velouraliving.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
