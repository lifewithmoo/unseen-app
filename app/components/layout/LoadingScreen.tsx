"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black
        text-white
      "
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          text-6xl
          font-black
          tracking-[0.4em]
          md:text-9xl
        "
      >
        UNSEEN
      </motion.h1>
    </motion.div>
  );
}