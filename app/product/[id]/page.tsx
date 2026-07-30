import { notFound } from "next/navigation";

import { products } from "@/app/data/products";

import ProductDetails from "@/app/components/ProductDetails";
import ProductGallery from "@/app/components/ProductGallery";
import RelatedProducts from "@/app/components/RelatedProducts";
import ProductExtraInfo from "@/app/components/ProductExtraInfo";



type Props = {
  params: Promise<{
    id: string;
  }>;
};







export default async function ProductPage({
  params,
}: Props) {



  const { id } =
    await params;





  const product =
    products.find(
      (item) =>
        item.id === id
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
        pb-24
        pt-28
        text-white
        md:px-6
        md:pt-36
      "
    >





      <div
        className="
          mx-auto
          max-w-7xl
        "
      >









        {/* PRODUCT SECTION */}





        <div
          className="
            grid
            gap-8
            lg:grid-cols-2
            lg:gap-16
          "
        >







          {/* IMAGE GALLERY */}




          <ProductGallery

            product={{

              image:
                product.image,

              hoverImage:
                product.hoverImage,

              name:
                product.name,

            }}

          />









          {/* PRODUCT DETAILS */}




          <ProductDetails

            product={product}

          />







        </div>













        {/* EXTRA INFORMATION */}





        <ProductExtraInfo />









        {/* RELATED PRODUCTS */}





        <RelatedProducts

          currentId={
            product.id
          }

          category={
            product.category
          }

        />









      </div>







    </main>


  );

}