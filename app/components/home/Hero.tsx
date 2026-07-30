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



      {/* Background Image */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[url('/hero-bg.jpg')]
          bg-cover
          bg-center
        "
      />





      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-black/70
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
          pointer-events-auto
          mx-auto
          max-w-6xl
          text-center
        "
      >




        <p
          className="
            animate-pulse
            text-xs
            uppercase
            tracking-[0.6em]
            text-red-500
            md:text-sm
          "
        >
          NEW DROP 2026
        </p>







        <h1
          className="
            mt-6
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
              px-10
              py-5
              text-sm
              font-black
              uppercase
              tracking-[0.25em]
              transition
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
              px-10
              py-5
              text-sm
              font-black
              uppercase
              tracking-[0.25em]
              transition
              hover:bg-white
              hover:text-black
            "
          >
            View Collection
          </Link>





        </div>







      </div>







    </section>


  );

}