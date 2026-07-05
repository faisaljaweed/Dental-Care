import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Redix Dental — AI & Automation Agency for Dental Businesses",
    template: "%s | Redix Dental",
  },
  description:
    "We build AI apps and automation systems for dental clinics, groups, DSOs, ortho & cosmetic practices, and dental labs — answering every call, filling every chair, and recovering the revenue practices already earn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
