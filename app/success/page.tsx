import Link from "next/link";


export default function SuccessPage() {


  return (

    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-black
        px-5
        text-white
      "
    >


      <div
        className="
          text-center
        "
      >



        <p
          className="
            text-sm
            uppercase
            tracking-[0.5em]
            text-red-500
          "
        >
          UNSEEN
        </p>




        <h1
          className="
            mt-6
            text-5xl
            font-black
            uppercase
            md:text-7xl
          "
        >
          Order
          <br />
          Confirmed
        </h1>





        <p
          className="
            mx-auto
            mt-6
            max-w-md
            text-zinc-400
            leading-7
          "
        >
          Thank you for your order.
          We received your request and we will contact you soon.
        </p>







        <Link
          href="/shop"
          className="
            mt-10
            inline-block
            rounded-full
            bg-red-600
            px-10
            py-5
            text-sm
            font-black
            uppercase
            tracking-widest
            transition
            hover:bg-red-700
          "
        >
          Continue Shopping
        </Link>



      </div>



    </main>

  );

}