import type { Metadata } from "next";

import "./globals.css";
import SiteChrome from "./components/SiteChrome";

const description =
  "Advancing knowledge, strengthening institutions and transforming Caribbean society through five specialised Centres.";

export const metadata: Metadata = {
  metadataBase: new URL("https://caribbean-emergence-institute-limit.vercel.app"),
  title: {
    default: "Caribbean Emergence Institute",
    template: "%s | Caribbean Emergence Institute",
  },
  description,
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Caribbean Emergence Institute",
    description,
  },
  twitter: {
    card: "summary_large_image",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cei-light text-cei-darkText">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
