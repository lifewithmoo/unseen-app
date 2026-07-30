"use client";

import { useState } from "react";
import SizeSelector from "@/app/components/SizeSelector";
import { useCart } from "@/app/context/CartContext";

type Props = {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
};

export default function ProductDetails({ product }: Props) {

  const [size, setSize] = useState("");

  const { addToCart } = useCart();


  function handleAddToCart() {

    if (!size) {
      alert("Please select a size");
      return;
    }


    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
    });


    alert("Added to cart ✓");
  }


  return (
    <div className="sticky top-36 h-fit">

      <p className="text-sm uppercase tracking-[0.5em] text-red-500">
        DROP 01
      </p>


      <h1 className="mt-5 text-6xl font-black uppercase">
        {product.name}
      </h1>


      <p className="mt-8 text-4xl font-black text-red-500">
        {product.price}
      </p>


      <p className="mt-8 leading-8 text-zinc-400">
        Premium heavyweight cotton.
        <br />
        Oversized fit.
        <br />
        Limited production.
      </p>


      <SizeSelector
        onSizeChange={(selected) => setSize(selected)}
      />


      <button
        onClick={handleAddToCart}
        className="
          mt-12
          w-full
          rounded-full
          bg-red-600
          py-5
          text-lg
          font-black
          uppercase
          tracking-[0.3em]
          transition
          hover:bg-red-700
        "
      >
        ADD TO CART
      </button>


    </div>
  );
}