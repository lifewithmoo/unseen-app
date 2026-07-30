import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "UNSEEN",
  description: "Premium streetwear brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <CartProvider>

          <Navbar />

          {children}

        </CartProvider>

      </body>

    </html>
  );
}