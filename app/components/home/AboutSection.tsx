export default function AboutSection() {


  return (

    <section
      className="
        bg-zinc-950
        px-5
        py-20
        text-white
        md:px-8
        md:py-28
      "
    >



      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          md:grid-cols-2
          md:items-center
        "
      >




        {/* Text */}


        <div>


          <p
            className="
              text-xs
              uppercase
              tracking-[0.5em]
              text-red-500
            "
          >
            About UNSEEN
          </p>



          <h2
            className="
              mt-5
              text-4xl
              font-black
              uppercase
              leading-tight
              md:text-6xl
            "
          >
            Built
            <br />
            Different.
          </h2>




          <p
            className="
              mt-6
              max-w-lg
              text-sm
              leading-8
              text-zinc-400
              md:text-base
            "
          >
            UNSEEN creates premium streetwear pieces
            designed for people who choose their own path.
            Heavyweight materials, clean designs, and
            limited drops made to stand out.
          </p>





        </div>








        {/* Image */}


        <div
          className="
            overflow-hidden
            rounded-3xl
          "
        >


          <img
            src="/hero.jpg"
            alt="UNSEEN streetwear"
            className="
              h-[450px]
              w-full
              object-cover
              transition
              duration-700
              hover:scale-105
            "
          />


        </div>





      </div>



    </section>


  );

}