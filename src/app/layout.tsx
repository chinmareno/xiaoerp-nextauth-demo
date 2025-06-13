import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Xiao ERP | Simple & Efficient ERP System for Small Businesses",
  description:
    "Xiao ERP is a lightweight and customizable ERP solution designed for small businesses. Manage inventory, accounting, and operations with ease through a clean, user-friendly interface.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Xiao ERP",
    "lightweight ERP",
    "small business ERP",
    "inventory management",
    "accounting system",
    "open-source ERP",
    "ERP software",
    "business management tool",
  ],
};
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
