import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "123 Contracting LLC",
  description: "123 Contracting, top contracting company, providing comprehensive construction services for warehouses, villas, factories, mosques, palaces, schools, and industrial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
        </body>
    </html>
  );
}
