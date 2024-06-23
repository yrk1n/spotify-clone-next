import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "./providers/SupabaseProvider";
import UserProvider from "./providers/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spoti 2.0",
  description: "Spoti Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
