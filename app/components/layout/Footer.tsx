import Link from "next/link";


export default function Footer() {


  return (

    <footer
      className="
        relative
        border-t
        border-white/10
        bg-black
        px-5
        py-12
        text-white
        md:px-8
        md:py-16
      "
    >



      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          md:grid-cols-3
        "
      >






        {/* Brand */}


        <div>


          <h2
            className="
              text-3xl
              font-black
              tracking-[0.4em]
            "
          >
            UNSEEN
          </h2>



          <p
            className="
              mt-4
              max-w-xs
              text-sm
              leading-7
              text-zinc-400
            "
          >
            Premium streetwear.
            Limited drops.
            Designed for those who move different.
          </p>


        </div>








        {/* Navigation */}



        <div>


          <h3
            className="
              text-sm
              font-black
              uppercase
              tracking-widest
            "
          >
            Navigation
          </h3>



          <div
            className="
              mt-5
              flex
              flex-col
              gap-3
              text-sm
              text-zinc-400
            "
          >


            <Link href="/" className="hover:text-white">
              Home
            </Link>


            <Link href="/shop" className="hover:text-white">
              Shop
            </Link>


            <Link href="/cart" className="hover:text-white">
              Cart
            </Link>


          </div>


        </div>









        {/* Social */}



        <div>


          <h3
            className="
              text-sm
              font-black
              uppercase
              tracking-widest
            "
          >
            Follow
          </h3>





          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-3
            "
          >



            <a
              href="#"
              className="
                rounded-full
                border
                border-white/20
                px-5
                py-2
                text-xs
                uppercase
                tracking-widest
                text-zinc-400
                transition
                hover:border-white
                hover:text-white
              "
            >
              Instagram
            </a>





            <a
              href="#"
              className="
                rounded-full
                border
                border-white/20
                px-5
                py-2
                text-xs
                uppercase
                tracking-widest
                text-zinc-400
                transition
                hover:border-white
                hover:text-white
              "
            >
              TikTok
            </a>



          </div>




        </div>





      </div>









      <div
        className="
          mx-auto
          mt-10
          max-w-7xl
          border-t
          border-white/10
          pt-6
          text-center
          text-xs
          uppercase
          tracking-widest
          text-zinc-500
        "
      >

        © {new Date().getFullYear()} UNSEEN. All rights reserved.

      </div>







      {/* WhatsApp Button */}



      <a
        href="https://wa.me/201111288950"
        target="_blank"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-2xl
          shadow-xl
          transition
          hover:scale-110
        "
      >

        💬

      </a>




    </footer>


  );

}