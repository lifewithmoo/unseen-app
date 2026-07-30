"use client";

import { useEffect } from "react";


export default function CartToast({
  show,
  productName,
}: {
  show: boolean;
  productName: string;
}) {



  if (!show) return null;



  return (

    <div
      className="
        fixed
        bottom-6
        left-1/2
        z-[999]
        flex
        w-[90%]
        max-w-sm
        -translate-x-1/2
        items-center
        gap-4
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/95
        p-4
        shadow-2xl
        backdrop-blur-xl
        animate-bounce
      "
    >



      {/* Logo */}

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-red-600
          text-xl
        "
      >
        ★
      </div>




      <div>


        <p
          className="
            text-xs
            uppercase
            tracking-widest
            text-red-500
          "
        >
          Added To Cart
        </p>



        <p
          className="
            mt-1
            text-sm
            font-black
            uppercase
            text-white
          "
        >
          {productName}
        </p>


      </div>



    </div>


  );

}