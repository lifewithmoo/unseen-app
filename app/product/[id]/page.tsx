import AddToCartButton from "@/app/components/AddToCartButton";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "UNSEEN Black Hoodie",
    price: "$120",
    image: "/hoodie.jpg",
    description:
      "Premium oversized hoodie designed for those who stand apart. Heavy fabric with a luxury streetwear feel.",
  },
  {
    id: "2",
    name: "UNSEEN Oversized T-Shirt",
    price: "$80",
    image: "/shirt.jpg",
    description:
      "Minimal oversized t-shirt with a clean silhouette and premium comfort.",
  },
  {
    id: "3",
    name: "UNSEEN Jacket",
    price: "$200",
    image: "/jacket.jpg",
    description:
      "Modern street jacket built with a bold and timeless design.",
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10 pt-32">
      <Link
        href="/shop"
        className="text-gray-400 hover:text-white"
      >
        ← Back To Shop
      </Link>

      <section className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl bg-zinc-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-black tracking-wide">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl text-red-500">
            {product.price}
          </p>

          <p className="mt-6 text-gray-400 leading-7">
            {product.description}
          </p>

          <div className="mt-8">
            <h3 className="mb-3 font-bold">
              Select Size
            </h3>

            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="rounded-full border border-white px-5 py-2 hover:bg-white hover:text-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <AddToCartButton product={product} />
        </div>
      </section>
    </main>
  );
}