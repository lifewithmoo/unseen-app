import Link from "next/link";

const products = [
  {
    name: "Black Hoodie",
    image: "/hoodie.jpg",
    link: "/product/1",
  },
  {
    name: "Oversized T-Shirt",
    image: "/shirt.jpg",
    link: "/product/2",
  },
  {
    name: "Signature Jacket",
    image: "/jacket.jpg",
    link: "/product/3",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mb-16 text-center">
        <p className="text-sm tracking-[0.5em] text-red-500">
          FEATURED
        </p>

        <h2 className="mt-5 text-5xl font-black tracking-widest">
          COLLECTION
        </h2>
      </div>


      <div className="grid gap-8 md:grid-cols-3">

        {products.map((product) => (
          <Link
            key={product.name}
            href={product.link}
            className="group overflow-hidden rounded-3xl bg-zinc-900"
          >

            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="
                  h-[500px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-black">
                {product.name}
              </h3>

              <p className="mt-3 text-gray-400">
                Explore →
              </p>
            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}