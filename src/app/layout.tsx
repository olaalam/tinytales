import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout"; // استيراد المكون الجديد

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tinytales",
  description: "Product Details Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
      
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}