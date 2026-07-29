"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      Number(item.price.replace("$", "")) * item.quantity
    );
  }, 0);

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-36 text-white">

      <Link
        href="/shop"
        className="text-gray-400 transition hover:text-white"
      >
        ← Continue Shopping
      </Link>


      <h1 className="mt-10 text-5xl font-black tracking-widest">
        YOUR CART
      </h1>


      {cart.length === 0 ? (

        <div className="mt-12 rounded-3xl bg-zinc-900 p-10 text-center">
          <p className="text-xl text-gray-400">
            Your cart is empty.
          </p>
        </div>

      ) : (

        <div className="mt-12 space-y-6">

          {cart.map((item) => (

            <div
              key={item.id}
              className="
                flex
                flex-col
                gap-6
                rounded-3xl
                bg-zinc-900
                p-6
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-28
                    w-28
                    rounded-2xl
                    object-cover
                  "
                />

                <div>

                  <h2 className="text-xl font-black">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-red-500">
                    {item.price}
                  </p>


                  <div className="mt-4 flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="
                        h-8
                        w-8
                        rounded-full
                        border
                        border-white/20
                      "
                    >
                      -
                    </button>


                    <span className="font-bold">
                      {item.quantity}
                    </span>


                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="
                        h-8
                        w-8
                        rounded-full
                        border
                        border-white/20
                      "
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>


              <div className="flex items-center justify-between gap-6">

                <p className="text-2xl font-black">
                  ${Number(item.price.replace("$", "")) * item.quantity}
                </p>


                <button
                  onClick={() => removeFromCart(item.id)}
                  className="
                    rounded-full
                    bg-red-600
                    px-5
                    py-2
                    font-bold
                    transition
                    hover:bg-red-700
                  "
                >
                  Remove
                </button>

              </div>


            </div>

          ))}


          <div className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-zinc-900
            p-8
          ">

            <div className="flex justify-between">

              <h2 className="text-2xl font-black">
                Total
              </h2>

              <span className="text-3xl font-black text-red-500">
                ${total}
              </span>

            </div>


            <Link href="/checkout">
  <button
    className="
      mt-8
      w-full
      rounded-full
      bg-red-600
      py-5
      font-black
      tracking-widest
      transition
      hover:bg-red-700
    "
  >
    CHECKOUT
  </button>
</Link>

          </div>

        </div>

      )}

    </main>
  );
}