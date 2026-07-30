"use client";

import Link from "next/link";


type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  description?: string;
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




      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-gradient-to-b
          from-zinc-900
          to-black
          p-3
          transition
          duration-500
          hover:border-white/30
        "
      >




        {/* Image */}


        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-zinc-900
          "
        >



          <img

            src={product.image}

            alt={product.name}

            className="
              h-[430px]
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
              left-4
              top-4
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
            px-2
            pb-3
            pt-5
          "
        >




          <div
            className="
              flex
              items-start
              justify-between
              gap-3
            "
          >



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
                text-lg
                font-black
                text-red-500
              "
            >
              {product.price}
            </p>




          </div>







          <p
            className="
              mt-3
              line-clamp-2
              text-xs
              leading-6
              text-zinc-400
            "
          >
            {product.description ||
              "Premium heavyweight streetwear piece designed for those who move different."
            }
          </p>







          <div
            className="
              mt-5
              rounded-full
              border
              border-white/20
              py-3
              text-center
              text-[10px]
              font-black
              uppercase
              tracking-[0.3em]
              transition
              group-hover:bg-white
              group-hover:text-black
            "
          >
            View Piece
          </div>





        </div>




      </div>



    </Link>


  );

}