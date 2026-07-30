"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {

  const {
    cart,
    removeFromCart,
    total,
  } = useCart();


  return (
    <main className="min-h-screen bg-black pt-32 text-white">

      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-6xl font-black uppercase">
          Your Cart
        </h1>


        {cart.length === 0 ? (

          <p className="mt-10 text-zinc-400">
            Your cart is empty.
          </p>

        ) : (

          <div className="mt-12">

            <div className="space-y-6">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-3xl
                    border
                    border-white/10
                    p-6
                  "
                >

                  <div className="flex items-center gap-6">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-32
                        w-32
                        rounded-2xl
                        object-cover
                      "
                    />


                    <div>

                      <h2 className="text-2xl font-black uppercase">
                        {item.name}
                      </h2>


                      <p className="mt-2 text-red-500 font-bold">
                        {item.price}
                      </p>


                      <p className="mt-2 text-zinc-400">
                        Size: {item.size}
                      </p>

                    </div>

                  </div>


                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="
                      rounded-full
                      border
                      border-red-600
                      px-5
                      py-3
                      text-sm
                      uppercase
                      text-red-500
                      transition
                      hover:bg-red-600
                      hover:text-white
                    "
                  >
                    Remove
                  </button>


                </div>

              ))}

            </div>


            <div className="mt-12 border-t border-white/10 pt-8">

              <p className="text-3xl font-black uppercase">
                Total: ${total}
              </p>


              <button
                className="
                  mt-8
                  w-full
                  rounded-full
                  bg-red-600
                  py-5
                  font-black
                  uppercase
                  tracking-[0.3em]
                  transition
                  hover:bg-red-700
                "
              >
                Checkout
              </button>

            </div>


          </div>

        )}

      </div>

    </main>
  );
}