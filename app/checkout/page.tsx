"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      Number(item.price.replace("$", "")) *
        item.quantity
    );
  }, 0);


  const handleOrder = () => {
    clearCart();
    router.push("/success");
  };


  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-36 text-white">

      <Link
        href="/cart"
        className="text-gray-400 transition hover:text-white"
      >
        ← Back To Cart
      </Link>


      <h1 className="
        mt-10
        text-5xl
        font-black
        tracking-widest
      ">
        CHECKOUT
      </h1>


      <div className="
        mt-12
        grid
        gap-10
        md:grid-cols-2
      ">


        {/* Customer Details */}

        <div className="
          rounded-3xl
          bg-zinc-900
          p-8
        ">

          <h2 className="
            text-2xl
            font-black
          ">
            CUSTOMER DETAILS
          </h2>


          <div className="mt-8 space-y-5">

            <input
              placeholder="Full Name"
              className="
                w-full
                rounded-xl
                bg-black
                p-4
                outline-none
              "
            />


            <input
              placeholder="Email"
              className="
                w-full
                rounded-xl
                bg-black
                p-4
                outline-none
              "
            />


            <input
              placeholder="Phone"
              className="
                w-full
                rounded-xl
                bg-black
                p-4
                outline-none
              "
            />


            <textarea
              placeholder="Address"
              className="
                h-32
                w-full
                rounded-xl
                bg-black
                p-4
                outline-none
              "
            />

          </div>

        </div>



        {/* Order Summary */}

        <div className="
          rounded-3xl
          bg-zinc-900
          p-8
        ">

          <h2 className="
            text-2xl
            font-black
          ">
            ORDER SUMMARY
          </h2>


          <div className="mt-8 space-y-5">

            {cart.length === 0 ? (
              <p className="text-gray-400">
                Your cart is empty.
              </p>
            ) : (

              cart.map((item) => (

                <div
                  key={item.id}
                  className="
                    flex
                    justify-between
                    text-sm
                  "
                >

                  <span>
                    {item.name} x {item.quantity}
                  </span>


                  <span>
                    $
                    {Number(item.price.replace("$", "")) *
                      item.quantity}
                  </span>

                </div>

              ))

            )}


            <div className="
              border-t
              border-white/10
              pt-5
            ">

              <div className="
                flex
                items-center
                justify-between
              ">

                <span className="
                  text-xl
                  font-bold
                ">
                  Total
                </span>


                <span className="
                  text-3xl
                  font-black
                  text-red-500
                ">
                  ${total}
                </span>

              </div>


            </div>


            <button
              onClick={handleOrder}
              disabled={cart.length === 0}
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
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              PLACE ORDER
            </button>


          </div>

        </div>


      </div>


    </main>
  );
}