"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl px-8 md:px-20"
        >

          <p className="mb-5 uppercase tracking-[0.6em] text-red-500">
            DROP 01
          </p>

          <h1 className="text-6xl font-black uppercase leading-none text-white md:text-8xl">
            STAND
            <br />
            APART
          </h1>

          <div className="mt-10 space-y-3 text-lg text-gray-300">
            <p>Premium streetwear.</p>
            <p>Designed to be different.</p>
            <p>Made to be remembered.</p>
          </div>

          <Link
            href="/shop"
            className="mt-12 inline-flex items-center gap-4 rounded-full bg-red-600 px-10 py-5 text-lg font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_40px_rgba(220,38,38,0.45)] transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            SHOP DROP 01
            <span className="text-2xl">→</span>
          </Link>

          <div className="mt-24 flex items-center gap-3">
            <div className="h-14 w-px bg-red-600" />
            <span className="text-xs uppercase tracking-[0.5em] text-white">
              Scroll
            </span>
          </div>

        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}