import type { Metadata } from "next";
import "./globals.css";

// Components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Landing Page Redesign Sprint",
  description: "Improve the UI/UX of this basic landing page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
