import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";


export default function ShopPage() {


  return (


    <main
      className="
        min-h-screen
        bg-black
        pb-24
        pt-36
        text-white
      "
    >



      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          md:px-8
        "
      >





        {/* Header */}



        <div
          className="
            text-center
          "
        >



          <p
            className="
              text-xs
              uppercase
              tracking-[0.6em]
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
              leading-none
              md:text-8xl
            "
          >
            Shop
            <br />
            All
          </h1>





          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-zinc-400
              md:text-base
            "
          >
            Premium heavyweight streetwear.
            Limited drops.
            Designed for those who move different.
          </p>




        </div>









        {/* Categories */}



        <div
          className="
            mt-12
            flex
            justify-center
            gap-4
          "
        >



          <button
            className="
              rounded-full
              bg-white
              px-6
              py-3
              text-xs
              font-black
              uppercase
              tracking-widest
              text-black
            "
          >
            All
          </button>




          <button
            className="
              rounded-full
              border
              border-white/20
              px-6
              py-3
              text-xs
              font-black
              uppercase
              tracking-widest
              text-zinc-400
              transition
              hover:text-white
            "
          >
            Tees
          </button>




          <button
            className="
              rounded-full
              border
              border-white/20
              px-6
              py-3
              text-xs
              font-black
              uppercase
              tracking-widest
              text-zinc-400
              transition
              hover:text-white
            "
          >
            Hoodies
          </button>



        </div>









        {/* Products */}



        <div
          className="
            mt-16
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >



          {products.map((product) => (


            <ProductCard
              key={product.id}
              product={product}
            />


          ))}



        </div>





      </div>



    </main>


  );

}