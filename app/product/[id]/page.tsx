import { notFound } from "next/navigation";

import { products } from "@/app/data/products";

import ProductDetails from "@/app/components/ProductDetails";
import ProductGallery from "@/app/components/ProductGallery";


type Props = {
  params: Promise<{
    id: string;
  }>;
};



export default async function ProductPage({
  params,
}: Props) {


  const { id } = await params;


  const product = products.find(
    (item) => item.id === id
  );


  if (!product) {
    notFound();
  }



  return (

    <main
      className="
        min-h-screen
        bg-black
        px-4
        pb-20
        pt-36
        text-white
        md:px-6
        md:pt-48
      "
    >


      <div
        className="
          mx-auto
          grid
          max-w-7xl
          items-start
          gap-8
          lg:grid-cols-2
          lg:gap-16
        "
      >



        {/* Product Images */}


        <ProductGallery
          product={{
            image: product.image,
            hoverImage: product.hoverImage,
            name: product.name,
          }}
        />






        {/* Product Info */}


        <ProductDetails
          product={product}
        />



      </div>


    </main>

  );

}