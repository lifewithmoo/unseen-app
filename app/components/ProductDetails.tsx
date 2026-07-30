"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import SizeSelector from "@/app/components/SizeSelector";
import CartPopup from "@/app/components/CartPopup";


type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  description?: string;
};



export default function ProductDetails({
  product,
}: {
  product: Product;
}) {


  const { addToCart } = useCart();


  const [size, setSize] = useState("M");

  const [quantity, setQuantity] = useState(1);

  const [showPopup, setShowPopup] = useState(false);




  function handleAdd() {


    addToCart({
      ...product,
      size,
      quantity,
    });


    setShowPopup(true);

  }





  return (


    <div
      className="
        w-full
        max-w-xl
      "
    >



      <p
        className="
          text-xs
          uppercase
          tracking-[0.5em]
          text-red-500
        "
      >
        UNSEEN DROP
      </p>





      <h1
        className="
          mt-5
          text-4xl
          font-black
          uppercase
          leading-[0.9]
          md:text-6xl
        "
      >
        {product.name}
      </h1>





      <p
        className="
          mt-6
          text-3xl
          font-black
        "
      >
        {product.price}
      </p>





      <p
        className="
          mt-6
          text-sm
          leading-8
          text-zinc-400
          md:text-base
        "
      >
        {product.description ||
          "Premium heavyweight streetwear piece. Oversized fit. Limited production. Made for everyday movement."
        }
      </p>







      {/* Size */}



      <div className="mt-10">


        <h3
          className="
            mb-4
            text-xs
            font-black
            uppercase
            tracking-widest
          "
        >
          Select Size
        </h3>



        <SizeSelector
          size={size}
          setSize={setSize}
        />


      </div>







      {/* Quantity */}



      <div
        className="
          mt-8
          flex
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          px-6
          py-4
        "
      >


        <span
          className="
            text-xs
            font-black
            uppercase
            tracking-widest
          "
        >
          Quantity
        </span>





        <div
          className="
            flex
            items-center
            gap-5
          "
        >


          <button
            onClick={() =>
              setQuantity(
                Math.max(1, quantity - 1)
              )
            }
            className="
              text-xl
              text-zinc-400
              hover:text-white
            "
          >
            -
          </button>



          <span className="font-black">
            {quantity}
          </span>



          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
            className="
              text-xl
              text-zinc-400
              hover:text-white
            "
          >
            +
          </button>


        </div>


      </div>







      {/* Add Cart */}



      <button
        onClick={handleAdd}
        className="
          mt-8
          w-full
          rounded-full
          bg-red-600
          py-5
          text-sm
          font-black
          uppercase
          tracking-[0.3em]
          transition
          hover:scale-[1.02]
          hover:bg-red-700
        "
      >
        Add To Cart
      </button>







      {/* Features */}



      <div
        className="
          mt-10
          grid
          gap-4
          text-sm
          text-zinc-400
        "
      >

        <p>
          ✓ Premium heavyweight fabric
        </p>

        <p>
          ✓ Oversized streetwear fit
        </p>

        <p>
          ✓ Limited UNSEEN release
        </p>

      </div>





      {/* Popup */}


      <CartPopup
        show={showPopup}
        setShow={setShowPopup}
      />


    </div>


  );

}