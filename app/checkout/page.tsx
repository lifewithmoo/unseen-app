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


  const [payment, setPayment] = useState(
    "Cash on Delivery"
  );



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


CUSTOMER DETAILS

Name: ${customer.name}
Email: ${customer.email}
Phone: ${customer.phone}
Address: ${customer.address}
Payment Method: ${payment}



ORDER DETAILS

${cart
  .map(
    (item) => `
Product: ${item.name}
Size: ${item.size}
Quantity: ${item.quantity}
Price: ${item.price}
`
  )
  .join("\n")}



TOTAL: ${total} EGP


Thank you.
`;



    const whatsappUrl =
      `https://wa.me/201111288950?text=${encodeURIComponent(message)}`;



    window.open(
      whatsappUrl,
      "_blank"
    );


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






        {/* CUSTOMER DETAILS */}



        <div
          className="
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
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/60
                px-5
                py-4
                text-sm
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-red-600
              "
            />





            <input
              placeholder="Email Address"
              value={customer.email}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  email: e.target.value,
                })
              }
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/60
                px-5
                py-4
                text-sm
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-red-600
              "
            />





            <input
              placeholder="Phone Number"
              value={customer.phone}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  phone: e.target.value,
                })
              }
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/60
                px-5
                py-4
                text-sm
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-red-600
              "
            />





            <textarea
              placeholder="Shipping Address"
              value={customer.address}
              onChange={(e) =>
                setCustomer({
                  ...customer,
                  address: e.target.value,
                })
              }
              className="
                h-36
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/60
                px-5
                py-4
                text-sm
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-red-600
              "
            />





            {/* PAYMENT METHOD */}



            <div
              className="
                mt-8
                space-y-4
              "
            >

              <h3
                className="
                  text-sm
                  font-black
                  uppercase
                  tracking-widest
                "
              >
                Payment Method
              </h3>




              <label
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/60
                  p-4
                  hover:border-red-600
                "
              >

                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={
                    payment === "Cash on Delivery"
                  }
                  onChange={(e) =>
                    setPayment(e.target.value)
                  }
                  className="accent-red-600"
                />

                <span className="font-bold">
                  Cash on Delivery
                </span>

              </label>              <label
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/60
                  p-4
                  hover:border-red-600
                "
              >

                <input
                  type="radio"
                  name="payment"
                  value="Vodafone Cash"
                  checked={
                    payment === "Vodafone Cash"
                  }
                  onChange={(e) =>
                    setPayment(e.target.value)
                  }
                  className="accent-red-600"
                />

                <span className="font-bold">
                  Vodafone Cash

<label
 
 
 className="
    flex
    cursor-not-allowed
    items-center
    gap-3
    rounded-2xl
    border
    border-white/10
    bg-black/40
    p-4
    opacity-50
  "
>

  <input
    type="radio"
    name="payment"
    disabled
    className="accent-red-600"
  />

  <div>
    <p className="font-bold">
      Credit / Debit Card
    </p>

    <p className="text-xs text-zinc-500">
      Coming Soon
    </p>
  </div>

</label></span>

              </label>


            </div>



          </div>


        </div>









        {/* ORDER SUMMARY */}





        <div
          className="
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
                    {Number(
                      item.price.replace(" EGP", "")
                    ) *
                      item.quantity} EGP
                  </span>


                </div>

              ))

            )}






            <div
              className="
                border-t
                border-white/10
                pt-5
              "
            >


              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >


                <span
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Total
                </span>



                <span
                  className="
                    text-3xl
                    font-black
                    text-red-500
                  "
                >
                  {total} EGP
                </span>


              </div>



            </div>








            <button
              onClick={handleOrder}
              disabled={
                cart.length === 0 ||
                !customer.name ||
                !customer.email ||
                !customer.phone ||
                !customer.address
              }
              className="
                mt-8
                w-full
                rounded-full
                py-5
                font-black
                tracking-widest
                transition
                bg-red-600
                hover:bg-red-700
                disabled:cursor-not-allowed
                disabled:bg-zinc-700
                disabled:text-zinc-400
              "
            >

              {
                !customer.name ||
                !customer.email ||
                !customer.phone ||
                !customer.address

                ? "COMPLETE INFO FIRST"

                : "PLACE ORDER"
              }


            </button>



          </div>



        </div>



      </div>



    </main>

  );

}