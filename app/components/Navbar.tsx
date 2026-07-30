"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {

  const { cart } = useCart();


  return (

    <nav
      className="
        fixed
        top-0
        z-50
        w-full
        bg-black/80
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-8
          py-6
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
            text-3xl
            font-black
            tracking-[0.5em]
            text-white
          "
        >
          UNSEEN
        </Link>



        {/* Links */}

        <div
          className="
            hidden
            items-center
            gap-10
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-zinc-300
            md:flex
          "
        >

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>


          <Link
            href="/shop"
            className="transition hover:text-white"
          >
            Shop
          </Link>


          <Link
            href="#"
            className="transition hover:text-white"
          >
            Collections
          </Link>


          <Link
            href="#"
            className="transition hover:text-white"
          >
            About
          </Link>


          {/* Cart */}

          <Link
            href="/cart"
            className="
              relative
              text-xl
              transition
              hover:scale-110
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
                  text-white
                "
              >
                {cart.length}
              </span>

            )}

          </Link>


        </div>


      </div>

    </nav>

  );
}