"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

type ProductCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const product = {
    id,
    name,
    price,
    image,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-3xl bg-zinc-900"
    >

      <Link href={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="
              h-[420px]
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
          />
        </div>
      </Link>


      <div className="p-6">

        <h2 className="text-xl font-black tracking-wide">
          {name}
        </h2>

        <p className="mt-3 font-bold text-red-500">
          {price}
        </p>


        <button
          onClick={() => {
            addToCart(product);
            toast.success("Added to cart!");
          }}
          className="
            mt-6
            w-full
            rounded-full
            border
            border-white/20
            py-3
            font-bold
            transition
            hover:bg-white
            hover:text-black
          "
        >
          ADD TO CART
        </button>

      </div>

    </motion.div>
  );
}