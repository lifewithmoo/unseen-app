"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cart.reduce(
  (sum, item) =>
    sum +
    Number(item.price.replace(" EGP", "")) * item.quantity,
  0
);


const tshirtCount = cart.reduce(
  (count, item) =>
    item.category === "Tees"
      ? count + item.quantity
      : count,
  0
);


const discount =
  tshirtCount >= 3
    ? subtotal * 0.20
    : 0;


const total = subtotal - discount;

  return (
    <main
      className="
        min-h-screen
        bg-black
        px-5
        pb-20
        pt-36
        text-white
        md:px-8
      "
    >
      <h1
        className="
          text-5xl
          font-black
          tracking-widest
        "
      >
        YOUR CART
      </h1>

      {cart.length === 0 ? (
        <div
          className="
            mt-16
            text-center
          "
        >
          <p className="text-zinc-400">
            Your cart is empty.
          </p>

          <Link
            href="/shop"
            className="
              mt-8
              inline-block
              rounded-full
              bg-red-600
              px-10
              py-4
              font-black
              uppercase
              tracking-widest
            "
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div
          className="
            mt-12
            grid
            gap-10
            lg:grid-cols-3
          "
        >
          {/* Items */}

          <div
            className="
              space-y-6
              lg:col-span-2
            "
          >
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="
                  flex
                  gap-5
                  rounded-3xl
                  bg-zinc-900
                  p-5
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-32
                    w-28
                    rounded-2xl
                    object-cover
                  "
                />

                <div className="flex-1">
                  <h2
                    className="
                      text-lg
                      font-black
                      uppercase
                    "
                  >
                    {item.name}
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    Size: {item.size}
                  </p>

                  <p className="mt-2 font-bold text-red-500">
                    {item.price}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id, item.size)
                      }
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      -
                    </button>

                    <span className="font-black">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id, item.size)
                      }
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="
                      mt-5
                      text-sm
                      uppercase
                      text-zinc-400
                      hover:text-red-500
                    "
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}

          <div
            className="
              h-fit
              rounded-3xl
              bg-zinc-900
              p-8
            "
          >
            <h2
              className="
                text-2xl
                font-black
              "
            >
              SUMMARY
            </h2>

            <div
className="
mt-8
space-y-4
"
>

<div
className="
flex
justify-between
text-zinc-400
"
>
<span>Subtotal</span>

<span>
{subtotal} EGP
</span>

</div>



{discount > 0 && (

<div
className="
flex
justify-between
text-green-500
font-bold
"
>

<span>
3 T-Shirts Discount (20%)
</span>

<span>
-{discount} EGP
</span>

</div>

)}



<div
className="
flex
justify-between
text-xl
"
>

<span>Total</span>

<span
className="
font-black
text-red-500
"
>
{total} EGP
</span>

</div>


</div>
            <Link
              href="/checkout"
              className="
                mt-8
                block
                w-full
                rounded-full
                bg-red-600
                py-5
                text-center
                font-black
                uppercase
                tracking-widest
              "
            >
              CHECKOUT
            </Link>

            <button
              onClick={clearCart}
              className="
                mt-5
                w-full
                rounded-full
                border
                border-white/20
                py-4
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-zinc-400
              "
            >
              CLEAR CART
            </button>
          </div>
        </div>
      )}
    </main>
  );
}