"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-5
       pt-40
pb-20
md:pt-48
        text-white
        md:px-8
        md:pt-32
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-new.jpg"
          alt="UNSEEN"
          className="
            hero-bg
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl" />

      {/* Content */}
      <div
        className="
          hero-content
relative
z-10
mx-auto
mt-8
max-w-5xl
text-center
md:mt-12
        "
      >
        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.7em]
            text-red-500
            animate-pulse
          "
        >
          NEW DROP 2026
        </p>

        <h1
          className="
            hero-title
            text-5xl
            font-black
            uppercase
            leading-[0.9]
            tracking-tight
            sm:text-6xl
            md:text-8xl
          "
        >
          UNSEEN

          <br />

          <span
            className="
              block
              mt-2
              text-3xl
              font-bold
              tracking-[0.35em]
              text-zinc-300
              sm:text-4xl
              md:text-5xl
            "
          >
            STREETWEAR
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-xl
            text-sm
            leading-8
            text-zinc-300
            md:text-base
          "
        >
          Premium heavyweight pieces.
          <br />
          Limited releases crafted for people
          who move different.
        </p>

        <div className="mt-12">
          <Link
            href="/shop"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-red-600
              px-12
              py-5
              text-sm
              font-black
              uppercase
              tracking-[0.3em]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-red-700
              hover:shadow-[0_0_40px_rgba(220,38,38,.6)]
            "
          >
            SHOP NOW
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div
            className="
              flex
              h-12
              w-7
              justify-center
              rounded-full
              border
              border-white/30
            "
          >
            <div
              className="
                mt-2
                h-3
                w-1
                animate-bounce
                rounded-full
                bg-white
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}