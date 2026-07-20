import { siteConfig } from "@/config/site";

/**
 * Veloura Living - SEO Metadata Configurator
 * Automatically inherits global defaults from siteConfig.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
} = {}) {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    ...(title && { title: `${title} | ${siteConfig.name}` }),
    description,
    keywords: ["luxury furniture", "home decor", "veloura living", "interior design"],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: siteConfig.defaultLocale,
      url: siteConfig.url,
      title: title || siteConfig.name,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
      description,
      images: [image],
      creator: siteConfig.links.twitter,
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
