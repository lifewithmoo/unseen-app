"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { products } from "@/app/data/products";



export default function Navbar() {


  const { cart } = useCart();

  const { wishlist } = useWishlist();



  const [menuOpen, setMenuOpen] =
    useState(false);



  const [searchOpen, setSearchOpen] =
    useState(false);



  const [search, setSearch] =
    useState("");



  const [showNavbar, setShowNavbar] =
    useState(true);



  const lastScroll =
    useRef(0);





  useEffect(() => {


    const handleScroll = () => {


      const current =
        window.scrollY;



      if (
        current >
        lastScroll.current &&
        current > 80
      ) {

        setShowNavbar(false);

      } else {

        setShowNavbar(true);

      }



      lastScroll.current =
        current;


    };



    window.addEventListener(
      "scroll",
      handleScroll
    );



    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);







  const cartCount =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );






  const results =
    search.trim()
      ? products.filter((product) =>
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
      : [];







  return (


    <>


      <header

        className={`
          sticky
          top-0
          z-50
          w-full
          transition-transform
          duration-500

          ${
            showNavbar
              ? "translate-y-0"
              : "-translate-y-full"
          }

          border-b
          border-white/10
          bg-black/90
          backdrop-blur-xl
        `}

      >



        <div

          className="
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between
            px-5
          "

        >




          <button

            onClick={() =>
              setMenuOpen(!menuOpen)
            }

            className="
              md:hidden
              text-xl
            "

          >

            ☰

          </button>






          <Link

            href="/"

            className="
              text-xl
              font-black
              tracking-[0.35em]
            "

          >

            UNSEEN

          </Link>







          <nav

            className="
              hidden
              md:flex
              gap-8
            "

          >



            <Link

              href="/shop"

              className="
                text-xs
                uppercase
                font-black
                tracking-widest
                text-zinc-400
                hover:text-white
              "

            >

              Shop

            </Link>





            <Link

              href="/favorites"

              className="
                relative
                text-xs
                uppercase
                font-black
                tracking-widest
                text-zinc-400
                hover:text-white
              "

            >

              Wishlist



              {wishlist.length > 0 && (

                <span

                  className="
                    absolute
                    -right-5
                    -top-3
                    h-4
                    w-4
                    rounded-full
                    bg-red-600
                    text-[9px]
                    flex
                    items-center
                    justify-center
                  "

                >

                  {wishlist.length}

                </span>

              )}



            </Link>




          </nav>









          <div

            className="
              flex
              items-center
              gap-4
            "

          >



            <button

              onClick={() =>
                setSearchOpen(true)
              }

              className="text-lg"

            >

              🔍

            </button>







            <Link

              href="/cart"

              className="
                relative
                text-lg
              "

            >

              🛒



              {cartCount > 0 && (

                <span

                  className="
                    absolute
                    -right-3
                    -top-3
                    h-4
                    w-4
                    rounded-full
                    bg-red-600
                    text-[9px]
                    flex
                    items-center
                    justify-center
                  "

                >

                  {cartCount}

                </span>

              )}



            </Link>




          </div>






        </div>










        {menuOpen && (

          <div

            className="
              md:hidden
              border-t
              border-white/10
              bg-black
              p-6
            "

          >


            <div className="flex flex-col gap-5">


              <Link href="/shop">
                SHOP
              </Link>


              <Link href="/favorites">
                WISHLIST
              </Link>


              <Link href="/cart">
                CART
              </Link>


            </div>



          </div>


        )}




      </header>













      {searchOpen && (


        <div

          className="
            fixed
            inset-0
            z-[60]
            bg-black
            px-6
          "

        >



          <button

            onClick={() => {

              setSearchOpen(false);
              setSearch("");

            }}

            className="
              absolute
              right-6
              top-6
              text-3xl
            "

          >

            ✕

          </button>






          <div

            className="
              mx-auto
              mt-28
              max-w-xl
            "

          >




            <h2

              className="
                text-4xl
                font-black
              "

            >

              SEARCH

            </h2>







            <input


              autoFocus


              value={search}


              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }


              placeholder="Search products..."


              className="
                mt-8
                w-full
                rounded-full
                bg-zinc-900
                border
                border-white/10
                px-6
                py-4
                outline-none
                focus:border-red-600
              "


            />









            <div

              className="
                mt-8
                space-y-4
              "

            >




              {results.map((product) => (


                <Link

                  key={product.id}

                  href={`/product/${product.id}`}

                  onClick={() => {

                    setSearchOpen(false);
                    setSearch("");

                  }}

                  className="
                    flex
                    gap-4
                    items-center
                    rounded-2xl
                    bg-zinc-900
                    p-3
                    border
                    border-white/10
                  "

                >



                  <img

                    src={product.image}

                    alt={product.name}

                    className="
                      h-20
                      w-16
                      rounded-xl
                      object-cover
                    "

                  />



                  <div>


                    <p className="font-black uppercase">

                      {product.name}

                    </p>



                    <p className="text-red-500">

                      {product.price}

                    </p>


                  </div>




                </Link>



              ))}






              {search &&
                results.length === 0 && (


                <p className="text-zinc-500">

                  No products found

                </p>


              )}





            </div>






          </div>





        </div>



      )}





    </>


  );


}