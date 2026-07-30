"use client";

import { useState } from "react";


type Props = {
  product: {
    image: string;
    hoverImage: string;
    name: string;
  };
};



export default function ProductGallery({
  product,
}: Props) {



  const images = [
    product.image,
    product.hoverImage,
  ].filter(
    (image, index, arr) =>
      image && arr.indexOf(image) === index
  );




  const [activeImage, setActiveImage] = useState(
    images[0]
  );





  return (


    <div
      className="
        w-full
      "
    >




      {/* Main Image */}


      <div
        className="
          overflow-hidden
          rounded-2xl
          bg-zinc-900
          md:rounded-3xl
        "
      >


        <img

          src={activeImage}

          alt={product.name}

          className="
            h-[420px]
            w-full
            object-cover
            transition
            duration-700
            hover:scale-105
            md:h-[800px]
          "

        />


      </div>








      {/* Thumbnails */}


      <div
        className="
          mt-4
          flex
          gap-3
          md:mt-6
          md:gap-4
        "
      >



        {images.map((image) => (


          <button

            key={image}

            onClick={() => setActiveImage(image)}

            className={`
              overflow-hidden
              rounded-xl
              border
              transition

              ${
                activeImage === image
                  ? "border-red-600"
                  : "border-white/10"
              }

            `}

          >


            <img

              src={image}

              alt={product.name}

              className="
                h-20
                w-16
                object-cover
                md:h-24
                md:w-20
              "

            />


          </button>


        ))}



      </div>




    </div>


  );

}