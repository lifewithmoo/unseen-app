"use client";

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price.replace(" EGP", "")) *
        item.quantity,
    0
  );

  const handleOrder = () => {
    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address
    ) {
      alert("Please complete your information first");
      return;
    }

    const message = `
🔥 NEW UNSEEN ORDER

━━━━━━━━━━━━━━━━━━

👤 CUSTOMER DETAILS

Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}
Address: ${customer.address}

━━━━━━━━━━━━━━━━━━

🛍️ ORDER DETAILS

${cart
  .map(
    (item) => `
• ${item.name}
Size: ${item.size}
Quantity: ${item.quantity}
Price: ${item.price}
`
  )
  .join("\n")}

━━━━━━━━━━━━━━━━━━

💰 TOTAL: ${total} EGP

Thank you for shopping with UNSEEN.
`;

    const whatsappUrl = `https://wa.me/201111288950?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    clearCart();

    router.push("/success");
  };

  return (
    <main
      className="
        min-h-screen
        bg-black
        px-6
        pb-20
        pt-36
        text-white
      "
    >
      <Link
        href="/cart"
        className="
          text-gray-400
          transition
          hover:text-white
        "
      >
        ← Back To Cart
      </Link>

      <h1
        className="
          mt-10
          text-5xl
          font-black
          tracking-widest
        "
      >
        CHECKOUT
      </h1>

      <div
        className="
          mt-12
          grid
          gap-10
          md:grid-cols-2
        "
      >
        {/* Customer */}

        <div
          className="
            rounded-3xl
            bg-zinc-900
            p-8
          "
        >
          <h2 className="text-2xl font-black">
            CUSTOMER DETAILS
          </h2>

          <div className="mt-8 space-y-5">
            <input
              placeholder="Full Name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl bg-black p-4 outline-none"
            />

            <input
              placeholder="Email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  email: e.target.value,
                })
              }
              className="w-full rounded-xl bg-black p-4 outline-none"
            />

            <input
              placeholder="Phone"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-xl bg-black p-4 outline-none"
            />

            <textarea
              placeholder="Address"
              value={customer.address}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: e.target.value,
                })
              }
              className="h-32 w-full rounded-xl bg-black p-4 outline-none"
            />
          </div>
        </div>

        {/* Summary */}

        <div
          className="
            rounded-3xl
            bg-zinc-900
            p-8
          "
        >
          <h2 className="text-2xl font-black">
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
                  key={`${item.id}-${item.size}`}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    {Number(
                      item.price.replace(" EGP", "")
                    ) * item.quantity}{" "}
                    EGP
                  </span>
                </div>
              ))
            )}

            <div className="border-t border-white/10 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">
                  Total
                </span>

                <span className="text-3xl font-black text-red-500">
                  {total} EGP
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