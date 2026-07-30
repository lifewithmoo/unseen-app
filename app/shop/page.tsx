import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";


export default function ShopPage() {


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


      {/* Background */}

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








        {/* Categories */}



        <div
          className="
            mt-14
            flex
            gap-3
            overflow-x-auto
            pb-2
            scrollbar-hide
            md:justify-center
          "
        >



          <button
            className="
              whitespace-nowrap
              rounded-full
              bg-white
              px-7
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
              whitespace-nowrap
              rounded-full
              border
              border-white/20
              px-7
              py-3
              text-xs
              font-black
              uppercase
              tracking-widest
              text-zinc-400
            "
          >
            Tees
          </button>





          <button
            className="
              whitespace-nowrap
              rounded-full
              border
              border-white/20
              px-7
              py-3
              text-xs
              font-black
              uppercase
              tracking-widest
              text-zinc-400
            "
          >
            Hoodies
          </button>



        </div>









        {/* Divider */}



        <div
          className="
            my-14
            h-px
            bg-white/10
          "
        />









        {/* Products */}



        <div
          className="
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