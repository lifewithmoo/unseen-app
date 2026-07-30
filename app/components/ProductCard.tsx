import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
};


type Props = {
  product?: Product;
};


export default function ProductCard({ product }: Props) {

  if (!product) {
    return null;
  }


  return (
    <Link href={`/product/${product.id}`}>

      <div className="group cursor-pointer">


        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
          "
        >

          <img
            src={product.image}
            alt={product.name}
            className="
              h-[550px]
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />


          <img
            src={product.hoverImage}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              opacity-0
              transition
              duration-700
              group-hover:opacity-100
            "
          />


        </div>



        <div className="mt-6">

          <h2
            className="
              text-xl
              font-black
              uppercase
              tracking-wide
            "
          >
            {product.name}
          </h2>


          <p className="mt-3 text-red-500 font-bold">
            {product.price}
          </p>


        </div>


      </div>

    </Link>
  );
}