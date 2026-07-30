"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="bg-zinc-950 py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-[0.5em] text-red-500"
        >
          OUR PHILOSOPHY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 text-5xl font-black uppercase leading-tight md:text-7xl"
        >
          We Don't
          <br />
          Follow Trends.
          <br />
          We Create Identity.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          UNSEEN is built for people who don't need validation.
          Every piece is designed with premium materials, oversized fits,
          and timeless aesthetics that outlive trends.
        </motion.p>
      </div>
    </section>
  );
}