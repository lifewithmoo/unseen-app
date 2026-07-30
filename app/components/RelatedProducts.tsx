"use client";

import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";



type Props = {
  currentId: string;
  category?: string;
};



export default function RelatedProducts({
  currentId,
  category,
}: Props) {



  const relatedProducts = products
    .filter(
      (product) =>
        product.id !== currentId &&
        (
          !category ||
          product.category === category
        )
    )
    .slice(0, 3);





  if (relatedProducts.length === 0) {
    return null;
  }







  return (



    <section
      className="
        mt-24
      "
    >



      <h2
        className="
          mb-10
          text-3xl
          font-black
          uppercase
          tracking-tight
          md:text-5xl
        "
      >
        You May Also Like
      </h2>







      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >



        {relatedProducts.map(
          (product) => (


            <ProductCard

              key={product.id}

              product={product}

            />


          )
        )}



      </div>




    </section>


  );

}