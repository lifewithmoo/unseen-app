"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-black py-8 text-white">
      <motion.div
        className="flex whitespace-nowrap text-4xl font-black tracking-[0.3em] text-zinc-200"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span>
          UNSEEN • NOT MADE TO BE SEEN • MADE TO BE REMEMBERED •
          UNSEEN • NOT MADE TO BE SEEN • MADE TO BE REMEMBERED •
        </span>
      </motion.div>
    </section>
  );
}