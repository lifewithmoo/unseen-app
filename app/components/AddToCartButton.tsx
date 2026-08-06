"use client";

import { useCart } from "@/app/context/CartContext";

type Props = {
  product: {
  id: string;
  name: string;
  price: string;
  image: string;
  size: string;
  category?: string;
}
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  function handleAdd() {
   addToCart({
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.image,
  size: product.size,
  quantity: 1,
  category: product.category,
});

    alert("Added to cart ✓");
  }

  return (
    <button
      onClick={handleAdd}
      className="
        mt-12
        w-full
        rounded-full
        bg-red-600
        py-5
        text-lg
        font-black
        uppercase
        tracking-[0.3em]
        transition
        hover:bg-red-700
      "
    >
      ADD TO CART
    </button>
  );
}