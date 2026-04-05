import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { checkUser } from "@/lib/checkUser";

const inter = Inter({subsets: ["latin"],});

export const metadata = {
  title: "finbit",
  description: "One stop finance management app for all your needs",
};

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
        <footer className="bg-blue-100 text-white py-4 text-center">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2024 finbit. All rights reserved.</p>
            <p>Anmol verma-234022030004 | Hitika-234022030014 | Saloni-234022030034 | Urvashi-234022030046 | Vanshika mathan-234022030047</p>
          </div>
        </footer>
        </ClerkProvider>
        </body>
    </html>
  );
}
