import ProductCard from "../components/ProductCard";

const products = [
  {
    id: "1",
    name: "UNSEEN Black Tee",
    price: "$55",
    image: "/tee-black-front.jpg",
    hoverImage: "/tee-black-back.jpg",
  },
  {
    id: "2",
    name: "UNSEEN White Tee",
    price: "$55",
    image: "/tee-white-front.jpg",
    hoverImage: "/tee-white-back.jpg",
  },
  {
    id: "3",
    name: "UNSEEN Washed Tee",
    price: "$60",
    image: "/tee-washed-front.jpg",
    hoverImage: "/tee-washed-back.jpg",
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">

      {/* HERO */}
      <section className="border-b border-white/10 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.7em] text-red-500">
            DROP 01
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase tracking-[0.35em] md:text-8xl">
            SHOP
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Premium streetwear crafted for those who stand apart.
            Limited pieces. No restocks.
          </p>

        </div>
      </section>

      {/* FILTER BAR */}

      <section className="sticky top-24 z-20 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div className="flex gap-8">

            <button className="border-b-2 border-red-600 pb-2 text-sm font-bold uppercase tracking-[0.35em]">
              All
            </button>

            <button className="pb-2 text-sm uppercase tracking-[0.35em] text-zinc-500 transition hover:text-white">
              T-Shirts
            </button>

            <button className="pb-2 text-sm uppercase tracking-[0.35em] text-zinc-500 transition hover:text-white">
              Hoodies
            </button>

            <button className="pb-2 text-sm uppercase tracking-[0.35em] text-zinc-500 transition hover:text-white">
              Accessories
            </button>

          </div>

          <select className="rounded-full border border-white/10 bg-zinc-900 px-5 py-3 text-sm outline-none">
            <option>Newest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
          </select>

        </div>
      </section>

      {/* PRODUCTS */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
            />
          ))}

        </div>

      </section>

      {/* BANNER */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 px-8 py-28 text-center">

          <p className="text-sm uppercase tracking-[0.7em] text-red-500">
            UNSEEN®
          </p>

          <h2 className="mt-8 text-5xl font-black uppercase leading-none tracking-[0.25em] md:text-8xl">
            NOT MADE
            <br />
            TO BE SEEN.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Every piece is designed with purpose.
            Minimal aesthetics. Maximum identity.
          </p>

          <button
            className="
              mt-12
              rounded-full
              bg-white
              px-10
              py-5
              font-bold
              uppercase
              tracking-[0.3em]
              text-black
              transition-all
              duration-300
              hover:scale-105
            "
          >
            JOIN THE COMMUNITY →
          </button>

        </div>

      </section>

    </main>
  );
}