"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";


type CartItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  size: string;
  quantity: number;
};


type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
};



const CartContext = createContext<CartContextType | null>(null);




export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [cart, setCart] = useState<CartItem[]>([]);



  useEffect(() => {

    const savedCart = localStorage.getItem("cart");


    if (savedCart) {

      setCart(JSON.parse(savedCart));

    }

  }, []);





  function addToCart(item: CartItem) {


    const existingItem = cart.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size
    );



    let updatedCart: CartItem[];



    if (existingItem) {


      updatedCart = cart.map((cartItem) =>

        cartItem.id === item.id &&
        cartItem.size === item.size

          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }

          : cartItem

      );



    } else {


      updatedCart = [
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ];


    }



    setCart(updatedCart);



    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );


  }






  function removeFromCart(id: string) {


    const updatedCart = cart.filter(
      (item) => item.id !== id
    );



    setCart(updatedCart);



    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );


  }







  function clearCart() {


    setCart([]);



    localStorage.removeItem("cart");


  }








  const total = cart.reduce(

    (sum, item) =>

      sum +

      Number(item.price.replace("$", "")) *

      item.quantity,

    0

  );







  return (

    <CartContext.Provider

      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
      }}

    >

      {children}

    </CartContext.Provider>

  );

}







export function useCart() {


  const context = useContext(CartContext);



  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }



  return context;


}