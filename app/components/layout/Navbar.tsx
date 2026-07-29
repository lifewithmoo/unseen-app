"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      fixed
      top-0
      left-0
      z-50
      w-full
      border-b
      border-white/10
      bg-black/70
      backdrop-blur-xl
    ">

      <div className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-8
        py-5
      ">

        {/* Logo */}
        <Link
          href="/"
          className="
            text-2xl
            font-black
            tracking-[0.4em]
            text-white
            transition
            hover:text-red-500
          "
        >
          UNSEEN
        </Link>


        {/* Desktop Menu */}
        <div className="
          hidden
          items-center
          gap-10
          text-sm
          uppercase
          tracking-widest
          text-white
          md:flex
        ">

          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-red-500 transition">
            Shop
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-red-500 transition"
          >
            Cart

            {cart.length > 0 && (
              <span className="
                absolute
                -right-5
                -top-3
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-red-600
                text-xs
                font-bold
              ">
                {cart.length}
              </span>
            )}

          </Link>

        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            text-2xl
            text-white
            md:hidden
          "
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="
          flex
          flex-col
          gap-6
          border-t
          border-white/10
          bg-black
          px-8
          py-8
          text-center
          uppercase
          tracking-widest
          text-white
          md:hidden
        ">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-red-500"
          >
            Home
          </Link>


          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="hover:text-red-500"
          >
            Shop
          </Link>


          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="hover:text-red-500"
          >
            Cart ({cart.length})
          </Link>

        </div>
      )}

    </nav>
  );
}