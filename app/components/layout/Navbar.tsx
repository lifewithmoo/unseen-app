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
          onClick={() => setOpen(false)}
          className="
            text-xl
            font-black
            tracking-[0.45em]
            text-white
            md:text-2xl
          "
        >
          UNSEEN
        </Link>





        {/* Desktop */}


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
            Shop
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







        {/* Mobile */}


        <div
          className="
            flex
            items-center
            gap-5
            md:hidden
          "
        >



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





          <button
            onClick={() => setOpen(!open)}
            className="
              text-3xl
              text-white
            "
          >

            {open ? "✕" : "☰"}

          </button>



        </div>



      </div>








      {/* Mobile Full Menu */}



      <div
        className={`
          fixed
          left-0
          top-[73px]
          h-[calc(100vh-73px)]
          w-full
          bg-black
          px-8
          py-10
          transition-all
          duration-300
          md:hidden

          ${
            open
              ? "translate-x-0 opacity-100"
              : "pointer-events-none -translate-x-full opacity-0"
          }

        `}
      >



        <div
          className="
            flex
            flex-col
            gap-8
          "
        >



          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="
              text-3xl
              font-black
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
              text-3xl
              font-black
              uppercase
              tracking-widest
            "
          >
            Shop
          </Link>





          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="
              text-3xl
              font-black
              uppercase
              tracking-widest
            "
          >
            Cart
          </Link>





        </div>




        <div
          className="
            absolute
            bottom-10
            left-8
            text-xs
            uppercase
            tracking-[0.5em]
            text-zinc-500
          "
        >
          UNSEEN © 2026

        </div>




      </div>



    </nav>

  );

}