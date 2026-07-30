"use client";

import { useState } from "react";

type Props = {
  onSizeChange: (size: string) => void;
};

export default function SizeSelector({ onSizeChange }: Props) {
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["S", "M", "L", "XL"];

  function selectSize(size: string) {
    setSelectedSize(size);
    onSizeChange(size);
  }

  return (
    <div className="mt-12">

      <p className="mb-5 text-sm uppercase tracking-[0.3em]">
        Size
      </p>

      <div className="flex gap-3">

        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => selectSize(size)}
            className={`
              h-14
              w-14
              rounded-full
              border
              transition
              ${
                selectedSize === size
                  ? "border-red-600 bg-red-600"
                  : "border-white/20 hover:border-red-600"
              }
            `}
          >
            {size}
          </button>
        ))}

      </div>

    </div>
  );
}