import { Inter, Cormorant_Garamond, Geist } from "next/font/google";
import { constructMetadata } from "@/lib/metadata";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${geist.variable} antialiased h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-body relative">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <Providers>
          <main id="main-content" className="flex-grow flex flex-col w-full outline-none" tabIndex={-1}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
