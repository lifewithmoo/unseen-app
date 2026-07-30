import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-red-500">
            UNSEEN
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase">
            Shop All
          </h1>

          <p className="mt-6 text-zinc-400">
            Premium oversized essentials.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </main>
  );
}