"use client";

import { useEffect } from "react";


type Props = {
  show: boolean;
  setShow: (value: boolean) => void;
};


export default function CartPopup({
  show,
  setShow,
}: Props) {


  useEffect(() => {

    if (show) {

      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);


      return () => clearTimeout(timer);

    }

  }, [show, setShow]);



  if (!show) return null;



  return (

    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        pointer-events-none
      "
    >

      <div
        className="
          animate-bounce
          rounded-3xl
          bg-black
          border
          border-red-600
          px-10
          py-8
          text-center
          shadow-[0_0_80px_rgba(225,29,72,0.5)]
        "
      >

        <div className="text-5xl">
          ✦
        </div>

        <p
          className="
            mt-4
            text-sm
            font-black
            uppercase
            tracking-widest
            text-white
          "
        >
          Added To Cart
        </p>


      </div>

    </div>

  );

}