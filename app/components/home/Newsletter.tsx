"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="border-t border-white/10 bg-black py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.5em] text-red-500"
        >
          JOIN THE COMMUNITY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-5xl font-black uppercase md:text-6xl"
        >
          Never Miss
          <br />
          A Drop.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-xl text-zinc-400"
        >
          Be the first to know about exclusive releases,
          limited collections, and members-only offers.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-12 flex max-w-xl flex-col gap-4 md:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              flex-1
              rounded-full
              border
              border-white/10
              bg-white/5
              px-6
              py-4
              text-white
              outline-none
              transition
              focus:border-red-500
            "
          />

          <button
            type="submit"
            className="
              rounded-full
              bg-red-600
              px-8
              py-4
              font-bold
              uppercase
              tracking-[0.25em]
              transition
              hover:bg-red-700
            "
          >
            Join
          </button>
        </motion.form>
      </div>
    </section>
  );
}
