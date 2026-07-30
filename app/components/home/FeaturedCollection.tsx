import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";



export default function FeaturedCollection() {


  return (

    <section
      className="
        bg-black
        px-5
        py-20
        text-white
        md:px-8
        md:py-28
      "
    >



      <div
        className="
          mx-auto
          max-w-7xl
        "
      >





        {/* Header */}


        <div
          className="
            flex
            items-end
            justify-between
            gap-5
          "
        >



          <div>


            <p
              className="
                text-xs
                uppercase
                tracking-[0.5em]
                text-red-500
              "
            >
              Latest Drop
            </p>



            <h2
              className="
                mt-4
                text-4xl
                font-black
                uppercase
                md:text-6xl
              "
            >
              Featured
              <br />
              Collection
            </h2>


          </div>






          <Link
            href="/shop"
            className="
              hidden
              rounded-full
              border
              border-white/20
              px-6
              py-3
              text-xs
              font-black
              uppercase
              tracking-widest
              transition
              hover:bg-white
              hover:text-black
              md:block
            "
          >
            View All
          </Link>



        </div>







        {/* Products */}



        <div
          className="
            mt-12
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >



          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}



        </div>







        {/* Mobile Button */}



        <Link
          href="/shop"
          className="
            mt-10
            block
            rounded-full
            border
            border-white/20
            py-4
            text-center
            text-xs
            font-black
            uppercase
            tracking-widest
            md:hidden
          "
        >
          View All Products
        </Link>




      </div>



    </section>

  );

}