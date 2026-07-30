"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingSocial() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <div
      className={`
        fixed
        right-5
        bottom-6
        z-[999]
        transition-all
        duration-500
        ${
          show
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
      `}
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-white/10
          px-3
          py-3
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* Instagram */}

        <Link
          href="https://www.instagram.com/unseen.apparel/"
          target="_blank"
          className="
            group
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-pink-500
            via-red-500
            to-yellow-500
            transition
            hover:scale-110
          "
        >
          <span className="text-xl">📷</span>

          <span
            className="
              pointer-events-none
              absolute
              right-14
              whitespace-nowrap
              rounded-lg
              bg-black
              px-3
              py-2
              text-xs
              opacity-0
              transition
              group-hover:opacity-100
            "
          >
            Instagram
          </span>
        </Link>

        {/* WhatsApp */}

        <Link
          href="https://wa.me/201111288950"
          target="_blank"
          className="
            group
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-green-600
            transition
            hover:scale-110
          "
        >
          <span className="text-xl">💬</span>

          <span
            className="
              pointer-events-none
              absolute
              right-14
              whitespace-nowrap
              rounded-lg
              bg-black
              px-3
              py-2
              text-xs
              opacity-0
              transition
              group-hover:opacity-100
            "
          >
            WhatsApp
          </span>
        </Link>

        {/* Back To Top */}

        <button
          onClick={scrollTop}
          className="
            group
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-red-600
            transition
            hover:scale-110
          "
        >
          <span className="text-xl">↑</span>

          <span
            className="
              pointer-events-none
              absolute
              right-14
              whitespace-nowrap
              rounded-lg
              bg-black
              px-3
              py-2
              text-xs
              opacity-0
              transition
              group-hover:opacity-100
            "
          >
            Top
          </span>
        </button>
      </div>
    </div>
  );
}