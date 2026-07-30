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
        pt-28
        pb-20
        text-white
        md:px-8
        md:pt-32
      "
    >


      {/* Background */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[url('/hero-bg.jpg')]
          bg-cover
          bg-center
          scale-105
          animate-pulse
        "
      />



      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-black/75
        "
      />



      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />





      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          text-center
        "
      >



        <div
          className="
            mx-auto
            mb-6
            inline-flex
            rounded-full
            border
            border-red-500/40
            bg-red-500/10
            px-5
            py-2
            text-[10px]
            font-black
            uppercase
            tracking-[0.5em]
            text-red-500
          "
        >
          Limited Drop 2026
        </div>





        <h1
          className="
            animate-[fadeIn_1s_ease-out]
            text-6xl
            font-black
            uppercase
            leading-[0.85]
            tracking-tight
            sm:text-7xl
            md:text-9xl
          "
        >

          UNSEEN

          <br />

          <span className="text-zinc-400">
            STREETWEAR
          </span>


        </h1>





        <p
          className="
            mx-auto
            mt-8
            max-w-xl
            text-sm
            leading-7
            text-zinc-300
            md:text-base
          "
        >

          Premium heavyweight pieces.
          <br />
          Limited releases.
          <br />
          Built for those who stand apart.

        </p>





        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:justify-center
          "
        >



          <Link
            href="/shop"
            className="
              rounded-full
              bg-red-600
              px-12
              py-5
              text-sm
              font-black
              uppercase
              tracking-[0.3em]
              transition
              duration-300
              hover:scale-105
              hover:bg-red-700
            "
          >
            Shop All
          </Link>




          <Link
            href="/shop"
            className="
              rounded-full
              border
              border-white/30
              px-12
              py-5
              text-sm
              font-black
              uppercase
              tracking-[0.3em]
              transition
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Collection
          </Link>



        </div>





        {/* Scroll */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-zinc-500
          "
        >

          Scroll

          <div
            className="
              h-10
              w-px
              bg-white/30
            "
          />

        </div>




      </div>




    </section>

  );

}