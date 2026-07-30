"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";


export default function Navbar() {

  const { cart } = useCart();

  const [open, setOpen] = useState(false);



  return (

    <nav
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/80
        backdrop-blur-xl
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-5
          py-5
          md:px-8
        "
      >



        {/* Logo */}


        <Link
          href="/"
          className="
            text-2xl
            font-black
            tracking-[0.45em]
            text-white
          "
        >
          UNSEEN
        </Link>





        {/* Desktop Menu */}


        <div
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >

          <Link
            href="/"
            className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-zinc-400
              hover:text-white
            "
          >
            Home
          </Link>



          <Link
            href="/shop"
            className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-zinc-400
              hover:text-white
            "
          >
            Shop All
          </Link>



          <Link
            href="/cart"
            className="
              relative
              text-xl
            "
          >

            🛒


            {cart.length > 0 && (

              <span
                className="
                  absolute
                  -right-3
                  -top-3
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-red-600
                  text-[10px]
                  font-black
                "
              >
                {cart.length}
              </span>

            )}


          </Link>


        </div>







        {/* Mobile Buttons */}


        <div className="flex items-center gap-4 md:hidden">


          <Link
            href="/cart"
            className="text-xl"
          >
            🛒
          </Link>



          <button
            onClick={() => setOpen(!open)}
            className="
              text-2xl
              text-white
            "
          >
            ☰
          </button>


        </div>


      </div>







      {/* Mobile Menu */}


      {open && (

        <div
          className="
            border-t
            border-white/10
            bg-black
            px-5
            py-6
            md:hidden
          "
        >


          <div
            className="
              flex
              flex-col
              gap-6
            "
          >


            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="
                text-sm
                uppercase
                tracking-widest
              "
            >
              Home
            </Link>



            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="
                text-sm
                uppercase
                tracking-widest
              "
            >
              Shop All
            </Link>



          </div>


        </div>

      )}



    </nav>

  );
}