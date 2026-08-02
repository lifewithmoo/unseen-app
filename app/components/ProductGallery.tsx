"use client";

import { useState } from "react";

type Props = {
  product: {
    image: string;
    hoverImage: string;
    video?: string;
    name: string;
  };
};

export default function ProductGallery({ product }: Props) {

  const images = [
    product.image,
    product.hoverImage,
  ].filter(
    (image, index, arr) =>
      image && arr.indexOf(image) === index
  );


  const [activeMedia, setActiveMedia] = useState(
    product.video ? "video" : images[0]
  );


  return (

    <div className="w-full">


      {/* Main Media */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-black
          shadow-[0_0_80px_rgba(225,29,72,0.15)]
        "
      >


        {activeMedia === "video" ? (

          <video
            src={product.video}
            autoPlay
            muted
            loop
            playsInline
            className="
              h-[450px]
              w-full
              object-cover
              md:h-[800px]
            "
          />

        ) : (

          <img
            src={activeMedia}
            alt={product.name}
            className="
              h-[450px]
              w-full
              object-cover
              md:h-[800px]
            "
          />

        )}



        {/* Limited Badge */}

        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-red-600
            px-4
            py-2
            text-xs
            font-black
            tracking-[0.3em]
          "
        >
          LIMITED
        </div>


      </div>





      {/* Thumbnails */}

      <div
        className="
          mt-6
          flex
          gap-4
        "
      >


        {/* Video Thumbnail */}

        {product.video && (

          <button

            onClick={() =>
              setActiveMedia("video")
            }

            className={`
              relative
              overflow-hidden
              rounded-2xl
              border
              transition

              ${
                activeMedia === "video"
                ?
                "border-2 border-red-600 scale-105"
                :
                "border-white/10"
              }
            `}
          >

            <video
              src={product.video}
              muted
              className="
                h-24
                w-20
                object-cover
              "
            />

            <span
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/40
                text-xl
              "
            >
              ▶
            </span>

          </button>

        )}





        {/* Images */}

        {images.map((image,index)=>(

          <button

            key={image}

            onClick={() =>
              setActiveMedia(image)
            }


            className={`
              overflow-hidden
              rounded-2xl
              border
              transition

              ${
                activeMedia === image
                ?
                "border-2 border-red-600 scale-105"
                :
                "border-white/10"
              }

            `}

          >

            <img

              src={image}

              alt={product.name}

              className="
                h-24
                w-20
                object-cover
              "

            />


          </button>

        ))}


      </div>


    </div>

  );
}