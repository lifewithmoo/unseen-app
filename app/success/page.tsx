export default function SuccessPage() {
  return (
    <main className="
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      px-6
      text-white
    ">

      <div className="
        text-center
        rounded-3xl
        bg-zinc-900
        p-10
        max-w-xl
      ">

        <div className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-red-600
          text-4xl
          font-black
        ">
          ✓
        </div>


        <h1 className="
          mt-8
          text-5xl
          font-black
          tracking-widest
        ">
          THANK YOU
        </h1>


        <p className="
          mt-6
          text-gray-400
          leading-8
        ">
          Your order has been placed successfully.
          <br />
          Welcome to UNSEEN.
        </p>


        <a
          href="/"
          className="
            mt-10
            inline-block
            rounded-full
            bg-red-600
            px-10
            py-4
            font-bold
            transition
            hover:bg-red-700
          "
        >
          BACK HOME
        </a>


      </div>

    </main>
  );
}