import { Inter, Cormorant_Garamond, Geist } from "next/font/google";
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

export const metadata = {
  title: "Veloura Living | Crafted for Timeless Living",
  description: "Veloura Living is a premium luxury furniture and home living brand.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${geist.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-body">
        {children}
      </body>
    </html>
  );
}
