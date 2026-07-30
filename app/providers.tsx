"use client";

import { ReactNode } from "react";

import { CartProvider } from "@/app/context/CartContext";
import { OrderProvider } from "@/app/context/OrderContext";
import { WishlistProvider } from "@/app/context/WishlistContext";



export default function Providers({
  children,
}: {
  children: ReactNode;
}) {


return (

<CartProvider>

<OrderProvider>

<WishlistProvider>

{children}

</WishlistProvider>

</OrderProvider>

</CartProvider>

);


}