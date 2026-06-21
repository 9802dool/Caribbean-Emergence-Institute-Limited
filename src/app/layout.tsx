import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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
      <body className="bg-[#F7F5F0] text-[#222222]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
