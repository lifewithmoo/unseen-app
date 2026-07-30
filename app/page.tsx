import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">

      <section className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.5em] text-red-500">
            UNSEEN
          </p>

          <h1 className="mt-5 text-7xl font-black uppercase">
            Streetwear
            <br />
            Redefined
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-zinc-400">
            Premium heavyweight pieces.
            Limited drops.
            Designed for those who move different.
          </p>

        </div>


        {/* Products */}

        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>


      </section>

    </main>
  );
}