import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ArkMercury",
  description: "Curated fragrances for modern souls.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white font-sans min-h-screen">
        <Header />
        <Toaster richColors position="top-center" closeButton />
        <main className="pb-32 px-4 sm:px-6 md:px-8 pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
