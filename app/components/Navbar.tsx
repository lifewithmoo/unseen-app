"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="text-2xl font-black tracking-[0.4em] text-white"
        >
          UNSEEN
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm uppercase text-white">
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-red-500 transition">
            Shop
          </Link>

          <Link href="#" className="hover:text-red-500 transition">
            Collections
          </Link>

          <Link href="#" className="hover:text-red-500 transition">
            About
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-red-500 transition text-lg"
          >
            🛒

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}