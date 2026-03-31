import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

const siteName = "Maven Telecom";
const title = "Maven Telecom — Powering the Future of Telecom Distribution";
const description =
  "Maven Telecom builds a complete ecosystem for dealers, master agents, and wireless retailers. Multi-carrier platform for telecom distribution.";

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  return (envUrl && envUrl.replace(/\/+$/, "")) || "https://maventelecom.com";
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title,
  description,
  applicationName: siteName,
  authors: [{ name: siteName }],
  icons: {
    icon: [{ url: "/mt-logo.jpeg", type: "image/jpeg" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/mt-logo.jpeg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/mt-logo.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

