"use client";

import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        addToCart(product);
        toast.success("Added to cart!");
      }}
      className="mt-10 rounded-full bg-red-600 py-4 font-bold transition hover:bg-red-700"
    >
      Add To Cart
    </button>
  );
}