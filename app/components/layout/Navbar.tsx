"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-[0.4em] text-white transition hover:text-red-500"
        >
          UNSEEN
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.25em] text-white md:flex">

          <Link href="/" className="transition hover:text-red-500">
            Home
          </Link>

          <Link href="/shop" className="transition hover:text-red-500">
            Shop
          </Link>

          <Link href="/" className="transition hover:text-red-500">
            Collections
          </Link>

          <Link href="/" className="transition hover:text-red-500">
            About
          </Link>

          <Link href="/" className="transition hover:text-red-500">
            Contact
          </Link>

          <Link
            href="/cart"
            className="relative transition hover:text-red-500"
          >
            Cart

            {cart.length > 0 && (
              <span className="absolute -right-5 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}