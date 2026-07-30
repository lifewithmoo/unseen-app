import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/app/context/CartContext";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";


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


          <Footer />


          <WhatsAppButton />


        </CartProvider>


      </body>


    </html>

  );

}