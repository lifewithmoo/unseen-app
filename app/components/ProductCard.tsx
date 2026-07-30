"use client";

import Link from "next/link";


type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
};



export default function ProductCard({
  product,
}: {
  product: Product;
}) {


  return (


    <Link
      href={`/product/${product.id}`}
      className="
        group
        block
      "
    >



      {/* Image */}


      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-zinc-900
        "
      >



        <img

          src={product.image}

          alt={product.name}

          className="
            h-[420px]
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
            md:h-[520px]
          "

        />





        {/* Hover Image */}


        <img

          src={product.hoverImage}

          alt={product.name}

          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-0
            transition
            duration-700
            group-hover:opacity-100
          "

        />






        {/* Badge */}


        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-red-600
            px-4
            py-2
            text-[10px]
            font-black
            uppercase
            tracking-widest
          "
        >
          New Drop
        </span>




      </div>







      {/* Info */}



      <div
        className="
          mt-5
          flex
          items-start
          justify-between
          gap-4
        "
      >



        <div>


          <h3
            className="
              text-sm
              font-black
              uppercase
              tracking-wide
              text-white
              md:text-base
            "
          >
            {product.name}
          </h3>



          <p
            className="
              mt-2
              text-sm
              text-zinc-400
            "
          >
            Premium Fit
          </p>



        </div>





        <p
          className="
            text-lg
            font-black
            text-red-500
          "
        >
          {product.price}
        </p>



      </div>




    </Link>


  );

}