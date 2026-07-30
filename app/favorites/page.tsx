"use client";

import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";



export default function FavoritesPage() {


  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();




  return (


    <main
      className="
        min-h-screen
        bg-black
        px-5
        pb-20
        pt-36
        text-white
        md:px-8
      "
    >



      <h1
        className="
          text-5xl
          font-black
          tracking-widest
        "
      >
        FAVORITES
      </h1>






      {wishlist.length === 0 ? (


        <div
          className="
            mt-16
            text-center
          "
        >

          <p
            className="
              text-zinc-400
            "
          >
            No favorite pieces yet.
          </p>



          <Link
            href="/shop"
            className="
              mt-8
              inline-block
              rounded-full
              bg-red-600
              px-10
              py-4
              font-black
              uppercase
              tracking-widest
            "
          >
            Explore Shop
          </Link>


        </div>



      ) : (



        <div
          className="
            mt-12
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >



          {wishlist.map((item) => (


            <div
              key={item.id}
              className="
                rounded-3xl
                border
                border-white/10
                bg-zinc-900
                p-3
              "
            >



              <Link
                href={`/product/${item.id}`}
              >


                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-96
                    w-full
                    rounded-2xl
                    object-cover
                  "
                />


              </Link>






              <div
                className="
                  px-2
                  pb-3
                  pt-5
                "
              >


                <h2
                  className="
                    text-sm
                    font-black
                    uppercase
                  "
                >
                  {item.name}
                </h2>



                <p
                  className="
                    mt-2
                    font-black
                    text-red-500
                  "
                >
                  {item.price}
                </p>





                <button
                  onClick={() =>
                    removeFromWishlist(item.id)
                  }
                  className="
                    mt-5
                    w-full
                    rounded-full
                    border
                    border-white/20
                    py-3
                    text-xs
                    font-black
                    uppercase
                    tracking-widest
                    transition
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Remove
                </button>



              </div>



            </div>


          ))}



        </div>



      )}



    </main>


  );

}