import Link from "next/link";

import Hero from "@/app/components/home/Hero";
import FeaturedCollection from "@/app/components/home/FeaturedCollection";
import AboutSection from "@/app/components/home/AboutSection";


export default function Home() {


  return (

    <main>

      <Hero />


      <Link
        href="/shop"
        className="block"
      >

        <div
          className="
            relative
            mx-5
            my-10
            overflow-hidden
            rounded-3xl
            md:mx-auto
            md:max-w-7xl
          "
        >

          <img

            src="/new-drop-v1.jpg"

            alt="UNSEEN New Drop V1"

            className="
              w-full
              object-cover
              transition
              duration-700
              hover:scale-105
            "

          />


          <div
            className="
              absolute
              inset-0
              flex
              items-end
              bg-black/30
              p-8
            "
          >

            <h2
              className="
                text-3xl
                font-black
                uppercase
                tracking-widest
                text-white
                md:text-5xl
              "
            >

              New Drop V1

            </h2>


          </div>


        </div>


      </Link>



      <FeaturedCollection />


      <AboutSection />

    </main>

  );

}