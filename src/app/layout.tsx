import type { Metadata } from "next";

import "./globals.css";
import SiteChrome from "./components/SiteChrome";

export const metadata: Metadata = {
  title: {
    default: "Caribbean Emergence Institute",
    template: "%s | Caribbean Emergence Institute",
  },
  description:
    "Advancing knowledge, strengthening institutions and transforming Caribbean society through five specialised Centres.",
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
