"use client";

import { useState } from "react";



export default function ProductExtraInfo() {



  const [open, setOpen] =
    useState<string | null>(null);





  const sections = [
    {
      title: "Shipping Information",
      content:
        "Orders are processed within 1-3 business days. Delivery time depends on your location. You will receive your order tracking details after confirmation.",
    },

    {
      title: "Returns & Exchange",
      content:
        "Exchange is available within 14 days if the product is unused and in its original condition.",
    },

    {
      title: "Product Reviews",
      content:
        "★★★★★\n\nPremium quality, oversized fit and amazing fabric.",
    },
  ];







  return (


    <section
      className="
        mt-20
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        p-6
        md:p-10
      "
    >





      <h2
        className="
          mb-8
          text-3xl
          font-black
          uppercase
        "
      >
        Details
      </h2>







      <div
        className="
          divide-y
          divide-white/10
        "
      >



        {sections.map((section) => (


          <div
            key={section.title}
            className="
              py-6
            "
          >



            <button

              onClick={() =>
                setOpen(
                  open === section.title
                    ? null
                    : section.title
                )
              }

              className="
                flex
                w-full
                items-center
                justify-between
                text-left
                font-black
                uppercase
                tracking-widest
              "

            >


              <span>
                {section.title}
              </span>


              <span
                className="
                  text-xl
                "
              >
                {
                  open === section.title
                    ? "-"
                    : "+"
                }
              </span>


            </button>







            {open === section.title && (


              <p
                className="
                  mt-5
                  whitespace-pre-line
                  text-sm
                  leading-8
                  text-zinc-400
                "
              >

                {section.content}

              </p>


            )}





          </div>



        ))}





      </div>







    </section>


  );

}