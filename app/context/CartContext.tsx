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
  category?: string;
};




type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseQuantity: (
    id: string,
    size: string
  ) => void;
  decreaseQuantity: (
    id: string,
    size: string
  ) => void;
  total: number;
};




const CartContext =
  createContext<CartContextType | null>(null);







export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {



  const [cart, setCart] =
    useState<CartItem[]>([]);



  const [loaded, setLoaded] =
    useState(false);







  // Load Cart

  useEffect(() => {


    const savedCart =
      localStorage.getItem("cart");



    if (savedCart) {


      try {


        setCart(
          JSON.parse(savedCart)
        );


      } catch {


        localStorage.removeItem(
          "cart"
        );


      }


    }



    setLoaded(true);


  }, []);







  // Save Cart



  useEffect(() => {


    if (!loaded) return;



    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


  }, [
    cart,
    loaded,
  ]);









  function addToCart(
    item: CartItem
  ) {



    const existingItem =
      cart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size
      );





    if (existingItem) {



      setCart((prev) =>

        prev.map((cartItem) =>

          cartItem.id === item.id &&
          cartItem.size === item.size

            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }

            : cartItem

        )

      );



    } else {



      setCart((prev) => [

        ...prev,

        {
          ...item,
          quantity: 1,
        },

      ]);



    }


  }









  function increaseQuantity(
    id: string,
    size: string
  ) {



    setCart((prev) =>

      prev.map((item) =>

        item.id === id &&
        item.size === size

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item

      )

    );


  }









  function decreaseQuantity(
    id: string,
    size: string
  ) {



    setCart((prev) =>

      prev

        .map((item) =>

          item.id === id &&
          item.size === size

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item

        )

        .filter(
          (item) =>
            item.quantity > 0
        )

    );


  }









  function removeFromCart(
    id: string
  ) {



    setCart((prev) =>

      prev.filter(
        (item) =>
          item.id !== id
      )

    );


  }









  function clearCart() {



    setCart([]);

    localStorage.removeItem(
      "cart"
    );


  }









  const subtotal = cart.reduce(
  (sum, item) =>
    sum + Number(item.price.replace(" EGP", "")) * item.quantity,
  0
);


const tshirtCount = cart.reduce(
  (count, item) => {

    if(item.category === "Tees"){
      return count + item.quantity;
    }

    return count;

  },
  0
);



const discount =
  tshirtCount >= 3
    ? subtotal * 0.20
    : 0;



const total = subtotal - discount;







  return (

    <CartContext.Provider

      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}

    >

      {children}

    </CartContext.Provider>


  );

}









export function useCart() {


  const context =
    useContext(CartContext);



  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }



  return context;


}