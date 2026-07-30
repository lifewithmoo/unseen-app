"use client";

import { useState } from "react";

import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";



export default function ShopPage() {



  const [search, setSearch] =
    useState("");

  const [sort, setSort] =
    useState("default");

  const [category, setCategory] =
    useState("All");








  const filteredProducts =
    products
      .filter((product) => {



        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );



        const matchesCategory =
          category === "All"
            ? true
            : product.category === category;



        return (
          matchesSearch &&
          matchesCategory
        );



      })





      .sort((a, b) => {



        const priceA =
          Number(
            a.price.replace(
              " EGP",
              ""
            )
          );


        const priceB =
          Number(
            b.price.replace(
              " EGP",
              ""
            )
          );




        if (sort === "low") {

          return priceA - priceB;

        }



        if (sort === "high") {

          return priceB - priceA;

        }



        return 0;



      });












  return (



    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        pb-24
        pt-36
        text-white
      "
    >





      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-zinc-900
          via-black
          to-black
        "
      />








      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          md:px-8
        "
      >







        <div
          className="
            text-center
          "
        >





          <p
            className="
              text-xs
              uppercase
              tracking-[0.7em]
              text-red-500
            "
          >
            UNSEEN COLLECTION
          </p>





          <h1
            className="
              mt-5
              text-6xl
              font-black
              uppercase
              leading-[0.85]
              tracking-tight
              md:text-8xl
            "
          >

            THE
            <br />
            DROP

          </h1>





          <p
            className="
              mx-auto
              mt-7
              max-w-lg
              text-sm
              leading-8
              text-zinc-400
              md:text-base
            "
          >

            Premium heavyweight streetwear.
            <br />
            Limited pieces created for those
            who never blend in.

          </p>



        </div>









        {/* SEARCH + SORT */}





        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            md:flex-row
            md:items-center
            md:justify-between
          "
        >




          <input

            value={search}

            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }

            placeholder="Search pieces..."

            className="
              w-full
              rounded-full
              border
              border-white/10
              bg-zinc-900
              px-6
              py-4
              text-sm
              text-white
              outline-none
              transition
              focus:border-red-600
              md:max-w-md
            "

          />






          <select

            value={sort}

            onChange={(e) =>
              setSort(
                e.target.value
              )
            }

            className="
              rounded-full
              border
              border-white/10
              bg-zinc-900
              px-6
              py-4
              text-sm
              font-bold
              text-white
              outline-none
            "

          >

            <option value="default">
              Sort By
            </option>


            <option value="low">
              Price Low → High
            </option>


            <option value="high">
              Price High → Low
            </option>


          </select>



        </div>









        {/* CATEGORIES */}





        <div
          className="
            mt-10
            flex
            gap-3
            overflow-x-auto
            pb-2
            md:justify-center
          "
        >



          {[
            "All",
            "Tees",
            "Hoodies",
          ].map((item) => (



            <button

              key={item}

              onClick={() =>
                setCategory(item)
              }

              className={`
                rounded-full
                px-7
                py-3
                text-xs
                font-black
                uppercase
                tracking-widest
                transition

                ${
                  category === item
                    ? "bg-white text-black"
                    : "border border-white/20 text-white"
                }

              `}

            >

              {item}


            </button>



          ))}



        </div>









        <div
          className="
            my-14
            h-px
            bg-white/10
          "
        />









        {/* PRODUCTS */}





        {
          filteredProducts.length === 0 ? (



            <p
              className="
                text-center
                text-zinc-400
              "
            >
              No pieces found.
            </p>



          ) : (



            <div
              className="
                grid
                gap-8
                sm:grid-cols-2
                xl:grid-cols-3
              "
            >




              {filteredProducts.map(
                (product) => (


                  <ProductCard
                    key={product.id}
                    product={product}
                  />


                )
              )}




            </div>



          )
        }






      </div>





    </main>


  );

}