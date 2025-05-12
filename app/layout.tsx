import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onyx General Contracting LLC",
  description: "Onyx, top contracting company in Dubai providing comprehensive construction services for warehouses, villas, factories, mosques, palaces, schools, and industrial projects.",
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
