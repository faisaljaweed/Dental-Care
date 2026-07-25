// TEMP build stub
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

/* Sora carries the headings, Inter the reading, JetBrains Mono the telemetry —
   metric labels, timestamps and console chrome. The mono face is what makes
   the product mockups read as instruments rather than illustrations. */
const sora={variable:"f-d"};

const inter={variable:"f-b"};

const mono={variable:"f-m"};

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Redix Dental — AI Dental Software & AI Receptionist",
    template: "%s | Redix Dental",
  },
  description:
    "Two products for dental practices: AI dental software that automates calls, scheduling, insurance, billing and recalls 24/7, and Sophia, an AI dental receptionist trained on your practice.",
  applicationName: SITE.name,
  keywords: [
    "AI dental software",
    "AI dental receptionist",
    "dental automation",
    "dental AI",
    "dental scheduling software",
    "dental patient communication",
    "dental chatbot",
    "dental clinic automation",
    "dental practice AI",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Redix Dental — AI Dental Software & AI Receptionist",
    description:
      "Every call answered. Every question handled. Every chair filled. AI automation built only for dental practices.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Redix Dental — AI Dental Software & AI Receptionist",
    description:
      "AI automation built only for dental practices. Book a demo.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#082B3F",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="font-body bg-white text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              description: SITE.tagline,
              email: SITE.email,
              telephone: SITE.phoneDisplay,
              sameAs: Object.values(SITE.socials),
              knowsAbout: [
                "AI dental software",
                "AI dental receptionist",
                "Dental practice automation",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
