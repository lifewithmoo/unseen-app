"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";


export default function Navbar() {


  const { cart } = useCart();

  const [open, setOpen] = useState(false);




  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Collections",
      href: "/shop",
    },
    {
      name: "About",
      href: "/",
    },
  ];




  return (


    <nav
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/80
        backdrop-blur-xl
      "
    >



      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-5
          py-5
          md:px-8
        "
      >





        {/* Logo */}


        <Link
          href="/"
          className="
            text-2xl
            font-black
            tracking-[0.45em]
            text-white
            md:text-3xl
          "
        >
          UNSEEN
        </Link>








        {/* Desktop */}


        <div
          className="
            hidden
            items-center
            gap-10
            text-xs
            font-black
            uppercase
            tracking-[0.25em]
            text-zinc-300
            md:flex
          "
        >



          {links.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              className="
                transition
                hover:text-white
              "
            >
              {link.name}
            </Link>

          ))}






          <Link
            href="/cart"
            className="
              relative
              text-xl
              transition
              hover:scale-110
            "
          >

            🛒


            {cart.length > 0 && (

              <span
                className="
                  absolute
                  -right-3
                  -top-3
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-red-600
                  text-[10px]
                  font-black
                  text-white
                "
              >
                {cart.length}
              </span>

            )}


          </Link>




        </div>









        {/* Mobile Button */}



        <button
          onClick={() => setOpen(!open)}
          className="
            text-3xl
            text-white
            md:hidden
          "
        >

          {open ? "✕" : "☰"}

        </button>





      </div>









      {/* Mobile Menu */}



      <div
        className={`
          overflow-hidden
          border-t
          border-white/10
          bg-black
          transition-all
          duration-500
          md:hidden
          ${
            open
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >



        <div
          className="
            flex
            flex-col
            items-center
            gap-8
            py-10
            text-sm
            font-black
            uppercase
            tracking-[0.3em]
            text-white
          "
        >



          {links.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>

          ))}





          <Link
            href="/cart"
            onClick={() => setOpen(false)}
          >
            Cart ({cart.length})
          </Link>




        </div>


      </div>





    </nav>


  );

}