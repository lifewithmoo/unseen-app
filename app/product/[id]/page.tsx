import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import ProductDetails from "@/app/components/ProductDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black pt-32 text-white">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div>

          <img
            src={product.image}
            alt={product.name}
            className="
              h-[800px]
              w-full
              rounded-3xl
              object-cover
            "
          />

        </div>


        {/* Details */}

        <ProductDetails product={product} />


      </div>

    </main>
  );
}