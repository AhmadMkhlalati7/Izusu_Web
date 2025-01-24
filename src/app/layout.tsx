import Navbar from "@/components/Navbar";

import "./globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New East - Isuzu",
  description: "The official Next.js Course Dashboard, built with App Router.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "https://isuzu.sa/wp-content/uploads/2020/07/isuzu-favicon-w.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "https://isuzu.sa/wp-content/uploads/2020/07/isuzu-favicon-w.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "https://isuzu.sa/wp-content/uploads/2020/07/isuzu-favicon-w.png",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
