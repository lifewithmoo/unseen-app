"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, total } = useCart();

  const [open, setOpen] = useState(false);


  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative"
      >
        Cart

        {cart.length > 0 && (
          <span
            className="
            absolute
            -right-5
            -top-3
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-red-600
            text-xs
            text-white
            "
          >
            {cart.length}
          </span>
        )}

      </button>



      {open && (

        <div className="fixed inset-0 z-[100]">


          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />



          <div
            className="
            absolute
            right-0
            top-0
            h-full
            w-full
            max-w-md
            bg-zinc-950
            p-8
            "
          >

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-black uppercase">
                Your Cart
              </h2>


              <button
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

            </div>



            <div className="mt-10 space-y-6">

              {cart.length === 0 ? (

                <p className="text-zinc-500">
                  Cart is empty
                </p>

              ) : (

                cart.map((item) => (

                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                      h-24
                      w-20
                      rounded-xl
                      object-cover
                      "
                    />


                    <div>

                      <h3 className="font-bold uppercase">
                        {item.name}
                      </h3>


                      <p className="text-red-500">
                        {item.price}
                      </p>


                      <p className="text-sm text-zinc-400">
                        Size: {item.size}
                      </p>


                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="
                        mt-2
                        text-xs
                        uppercase
                        text-zinc-500
                        "
                      >
                        Remove
                      </button>

                    </div>


                  </div>

                ))

              )}

            </div>



            <div
              className="
              absolute
              bottom-8
              left-8
              right-8
              "
            >

              <div className="mb-5 flex justify-between text-xl font-bold">

                <span>
                  Total
                </span>

                <span>
                  ${total}
                </span>

              </div>


              <Link
                href="/checkout"
                className="
                block
                rounded-full
                bg-red-600
                py-4
                text-center
                font-black
                uppercase
                tracking-widest
                "
              >
                Checkout
              </Link>


            </div>


          </div>

        </div>

      )}

    </>
  );
}