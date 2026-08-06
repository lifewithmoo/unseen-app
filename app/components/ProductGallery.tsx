"use client";

import { useState } from "react";

type Props = {
  product: {
    image: string;
    hoverImage: string;
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

  const [activeImage, setActiveImage] = useState(images[0]);

  return (

    <div className="w-full">

      {/* Main Image */}

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

        <img
          src={activeImage}
          alt={product.name}
          className="
            h-[450px]
            w-full
            object-cover
            md:h-[800px]
          "
        />

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

        {images.map((image) => (

          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={`
              overflow-hidden
              rounded-2xl
              border
              transition
              ${
                activeImage === image
                  ? "border-2 border-red-600 scale-105"
                  : "border-white/10"
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