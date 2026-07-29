import Link from "next/link";

export default function NewDrop() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white">

      <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-black to-black" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <p className="text-sm tracking-[0.7em] text-red-500">
          SESSION 02
        </p>

        <h2 className="mt-8 text-6xl font-black tracking-[0.25em] md:text-8xl">
          NEW DROP
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm uppercase leading-loose tracking-[0.3em] text-zinc-400 md:text-base">
          A new chapter of UNSEEN.
          <br />
          Limited pieces. Built for those who stand apart.
        </p>

        <Link
          href="/shop"
          className="
            mt-12
            inline-block
            rounded-full
            border
            border-white/20
            px-12
            py-5
            text-sm
            font-bold
            tracking-[0.3em]
            transition
            hover:bg-white
            hover:text-black
          "
        >
          EXPLORE DROP
        </Link>

      </div>

    </section>
  );
}