import {Inter} from "next/font/google"
import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Nidhisevi_AI",
  description: "The AI finance assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-blue-50 py-12">
          <div className="text-center container mx-auto  text-gray-600">
            <p>
              Made with ❤️ by coderraj07
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
