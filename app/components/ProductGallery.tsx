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
          bg-gradient-to-br
          from-zinc-900
          via-black
          to-zinc-900
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
            transition-all
            duration-700
            group-hover:scale-110
            md:h-[800px]
          "
        />

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-transparent
          "
        />

        {/* Badge */}

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
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={`
              group
              relative
              overflow-hidden
              rounded-2xl
              transition-all
              duration-300

              ${
                activeImage === image
                  ? "scale-105 border-2 border-red-600"
                  : "border border-white/10 hover:border-white/40"
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
                transition
                duration-500
                group-hover:scale-110
                md:h-28
                md:w-24
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-black/70
                py-1
                text-center
                text-[10px]
                font-bold
                uppercase
                tracking-widest
              "
            >
              {index === 0 ? "Front" : "Back"}
            </div>
          </button>
        ))}
      </div>

      {/* Info */}

      <div
        className="
          mt-8
          grid
          grid-cols-3
          gap-3
          text-center
        "
      >
        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-2xl">🚚</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
            Fast Shipping
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-2xl">⭐</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
            Premium Cotton
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-2xl">🔄</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
            Easy Exchange
          </p>
        </div>
      </div>

    </div>
  );
}