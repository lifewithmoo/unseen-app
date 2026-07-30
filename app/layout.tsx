import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/app/components/Navbar";

import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";





export const metadata: Metadata = {
  title: "UNSEEN",
  description:
    "Premium heavyweight streetwear brand.",
};







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (


    <html lang="en">


      <body
        className="
          bg-black
          text-white
        "
      >



        <CartProvider>


          <WishlistProvider>



            <Navbar />




            <div
              className="
                pt-16
              "
            >

              {children}

            </div>





          </WishlistProvider>


        </CartProvider>




      </body>


    </html>


  );

}