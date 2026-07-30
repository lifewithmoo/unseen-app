"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import SizeSelector from "./SizeSelector";


type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
};


type Props = {
  product: Product;
};



export default function ProductDetails({
  product,
}: Props) {


  const { addToCart } = useCart();


  const [selectedSize, setSelectedSize] = useState("");



  function handleAddToCart() {


    if (!selectedSize) {

      alert("Please select a size");

      return;

    }



    addToCart({

      id: product.id,

      name: product.name,

      price: product.price,

      image: product.image,

      size: selectedSize,

      quantity: 1,

    });


    alert("Added to cart");


  }





  return (

    <div className="space-y-8">


      <div>

        <p className="text-sm uppercase tracking-[0.5em] text-red-500">
          DROP 01
        </p>


        <h1 className="mt-5 text-6xl font-black uppercase">
          {product.name}
        </h1>


        <p className="mt-8 text-4xl font-black text-red-500">
          {product.price}
        </p>


      </div>




      <p className="leading-8 text-zinc-400">

        Premium heavyweight cotton.
        <br />
        Oversized fit.
        <br />
        Designed for everyday wear.
        <br />
        Limited production.

      </p>





      <SizeSelector
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />





      <button

        onClick={handleAddToCart}

        className="
        w-full
        rounded-full
        bg-red-600
        py-5
        text-sm
        font-black
        uppercase
        tracking-[0.3em]
        transition
        hover:bg-red-700
        "

      >

        Add To Cart

      </button>



    </div>

  );

}