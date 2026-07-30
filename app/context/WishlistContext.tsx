"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";



type WishlistItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};




type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isFavorite: (id: string) => boolean;
};





const WishlistContext =
  createContext<WishlistContextType | null>(null);







export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {



  const [wishlist, setWishlist] =
    useState<WishlistItem[]>([]);







  useEffect(() => {

    const saved =
      localStorage.getItem("wishlist");


    if (saved) {

      setWishlist(
        JSON.parse(saved)
      );

    }


  }, []);







  function updateWishlist(
    updated: WishlistItem[]
  ) {


    setWishlist(updated);


    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );


  }








  function addToWishlist(
    item: WishlistItem
  ) {



    const exists =
      wishlist.some(
        (product) =>
          product.id === item.id
      );



    if (exists) return;




    updateWishlist([
      ...wishlist,
      item,
    ]);



  }








  function removeFromWishlist(
    id: string
  ) {


    updateWishlist(
      wishlist.filter(
        (item) =>
          item.id !== id
      )
    );


  }








  function isFavorite(
    id: string
  ) {


    return wishlist.some(
      (item) =>
        item.id === id
    );


  }








  return (


    <WishlistContext.Provider

      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isFavorite,
      }}

    >

      {children}

    </WishlistContext.Provider>


  );


}







export function useWishlist() {


  const context =
    useContext(WishlistContext);



  if (!context) {

    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );

  }



  return context;


}