import "./globals.css";
import { Space_Grotesk, Sora } from "next/font/google";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

// ← update SITE_URL to your real domain when you deploy
const SITE_URL = "https://your-site.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Your Name — Portfolio",
    template: "%s · Your Name",
  },
  description:
    "A personal portfolio — building digital experiences that people remember.",
  keywords: [
    "Portfolio",
    "Developer",
    "Designer",
    "React",
    "Next.js",
    "Web Developer",
    "Creative",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Your Name — Portfolio",
    description:
      "Building digital experiences that people remember.",
    siteName: "Your Name",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Portfolio",
    description:
      "Building digital experiences that people remember.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  url: SITE_URL,
  jobTitle: "Creative Developer",
  description:
    "A personal portfolio — building digital experiences that people remember.",
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "Design",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
