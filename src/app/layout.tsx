import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";

import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-50">
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
