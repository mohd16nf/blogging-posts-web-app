import { Inter } from "next/font/google";
import {SessionProvider} from 'next-auth/react'

import "./globals.css";
import Navbar from "@/app/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coo!Code, you know what I am say!ng",
  description: "Platform to relax and ch!ll like Sunday!",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}

      </body>
    </html>
    </SessionProvider>
  );
}
