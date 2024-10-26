import "./assets/css/global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { BASE_URL, DESC, TITLE } from "./assets/constants";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`
  },
  icons: [
    { rel: "icon", url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    { rel: "icon", url: "/favicon.ico", sizes: "any", type: "icon" }
  ],
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: BASE_URL,
    siteName: TITLE,
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased lg:mx-auto">{children}</body>
    </html>
  );
}
