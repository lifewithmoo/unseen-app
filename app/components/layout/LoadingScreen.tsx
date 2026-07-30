"use client";

import { useEffect, useState } from "react";


export default function LoadingScreen() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1200);



    return () => clearTimeout(timer);


  }, []);





  if (!loading) return null;




  return (

    <div
      className="
        fixed
        inset-0
        z-[100]
        pointer-events-none
        flex
        items-center
        justify-center
        bg-black
      "
    >



      <div
        className="
          text-center
        "
      >



        <h1
          className="
            animate-pulse
            text-5xl
            font-black
            tracking-[0.5em]
            text-white
            md:text-7xl
          "
        >
          UNSEEN
        </h1>




        <p
          className="
            mt-5
            text-xs
            uppercase
            tracking-[0.5em]
            text-red-500
          "
        >
          Premium Streetwear
        </p>



      </div>



    </div>

  );

}