export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen
        bg-black
        px-6
        py-24
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-4xl
        "
      >

        <h1
          className="
            text-5xl
            font-black
            uppercase
            tracking-[0.25em]
            md:text-7xl
          "
        >
          Contact Us
        </h1>


        <p
          className="
            mt-8
            max-w-2xl
            text-sm
            leading-8
            text-zinc-400
            md:text-base
          "
        >
          Have a question about your order, products,
          sizing, or anything related to UNSEEN?
          Our team is always here to help.
        </p>





        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >



          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
              p-8
            "
          >

            <h2
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Email
            </h2>


            <p
              className="
                mt-4
                font-bold
              "
            >
              unseenapparel.social@gmail.com
            </p>

          </div>






          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
              p-8
            "
          >

            <h2
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Instagram
            </h2>


            <p
              className="
                mt-4
                font-bold
              "
            >
              @unseenapparel
            </p>

          </div>







          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
              p-8
            "
          >

            <h2
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.3em]
                text-zinc-500
              "
            >
              Location
            </h2>


            <p
              className="
                mt-4
                font-bold
              "
            >
              Egypt
            </p>

          </div>



        </div>







        <div
          className="
            mt-16
            border-t
            border-white/10
            pt-10
          "
        >

          <h2
            className="
              text-2xl
              font-black
              uppercase
            "
          >
            UNSEEN Support
          </h2>


          <p
            className="
              mt-4
              leading-8
              text-zinc-400
            "
          >
            For order inquiries, returns, and product
            questions, contact us and we will get back
            to you as soon as possible.
          </p>

        </div>




      </div>


    </main>
  );
}