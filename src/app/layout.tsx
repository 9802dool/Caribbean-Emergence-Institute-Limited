import "./globals.css";
import SiteChrome from "./components/SiteChrome";

export const metadata = {
  title: "Caribbean Emergence Institute Limited",
  description: "Transformative Learning for Sustainable Futures",
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
