import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/app/context/CartContext";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import FloatingSocial from "@/app/components/FloatingSocial";


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


          <div
            className="
              pt-32
              md:pt-40
            "
          >

            {children}

          </div>


          <Footer />


          <FloatingSocial />


        </CartProvider>


      </body>


    </html>

  );

}