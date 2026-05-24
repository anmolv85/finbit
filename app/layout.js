// File purpose: app\layout.js
// This file is part of the Next.js application routes, pages, or layout and defines how the user interface and data are rendered.
// It is written to help beginners understand how this file connects to the rest of the app.

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { SupportDrawerFooter } from "@/components/support-drawer-footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { checkUser } from "@/lib/checkUser";

const inter = Inter({subsets: ["latin"],});

export const metadata = {
  title: "finbit",
  description: "One stop finance management app for all your needs",
  icons: {
    icon: "/econs.png",
  },
};

// RootLayout: layout component that wraps pages and defines the shared structure for this route.
export default async function RootLayout({ children }) {
  await checkUser();

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClerkProvider>
        {/*header*/}
        <Header />

        <main className="min-h-screen">
        {children}
        </main>
        <Toaster richColors />
        {/*footer*/}
        <footer className="bg-blue-100 py-4 text-center">
          <div className="container mx-auto px-4 text-gray-600">
            <p className="mb-2">© 2024 finbit. All rights reserved.</p>
            <SupportDrawerFooter />
          </div>
        </footer>
        </ClerkProvider>
        </body>
    </html>
  );
}
