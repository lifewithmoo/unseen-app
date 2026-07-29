"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

        <img
          src="/hero.jpg"
          alt="UNSEEN collection"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 text-xs uppercase tracking-[0.8em] text-red-500 md:text-sm"
        >
          Summer Collection 2026
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            text-7xl
            font-black
            tracking-[0.35em]
            md:text-[11rem]
          "
        >
          UNSEEN
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="
            mt-10
            max-w-xl
            text-sm
            uppercase
            leading-loose
            tracking-[0.35em]
            text-zinc-400
            md:text-lg
          "
        >
          Not Made To Be Seen.
          <br />
          Made To Be Remembered.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-14"
        >
          <Button>
            SHOP NOW
          </Button>
        </motion.div>

      </motion.div>

    </section>
  );
}