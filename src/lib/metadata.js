// Default SEO metadata configuration
const defaultTitle = "Veloura Living | Crafted for Timeless Living";
const defaultDescription = "Veloura Living is a premium luxury furniture and home living brand. Explore our curated collections designed for timeless living.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velouraliving.com";

export function constructMetadata({
  title = defaultTitle,
  description = defaultDescription,
  image = "/images/og-image.jpg",
  noIndex = false,
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Veloura Living",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@velouraliving",
    },
    metadataBase: new URL(siteUrl),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
