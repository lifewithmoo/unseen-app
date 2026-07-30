"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";


type OrderItem = {
  name:string;
  size:string;
  quantity:number;
  price:string;
};



type Order = {

  id:string;

  customer:{
    name:string;
    email:string;
    phone:string;
    address:string;
  };

  items:OrderItem[];

  total:number;

  status:
  "New" |
  "Confirmed" |
  "Shipped" |
  "Delivered";

  createdAt:string;

};




type OrderContextType = {

 orders:Order[];

 addOrder:(order:Order)=>void;

 updateStatus:
 (
 id:string,
 status:Order["status"]
 )=>void;

 deleteOrder:(id:string)=>void;

};






const OrderContext =
createContext<OrderContextType | null>(null);






export function OrderProvider({

children,

}:{

children:ReactNode;

}){



const [orders,setOrders] =
useState<Order[]>([]);






useEffect(()=>{


const saved =
localStorage.getItem("orders");


if(saved){

setOrders(
JSON.parse(saved)
);

}


},[]);







function saveOrders(data:Order[]){


setOrders(data);


localStorage.setItem(
"orders",
JSON.stringify(data)
);


}







function addOrder(order:Order){


saveOrders([
...orders,
order
]);


}






function updateStatus(

id:string,

status:Order["status"]

){


const updated =
orders.map(order=>

order.id===id

?

{
...order,
status
}

:

order

);



saveOrders(updated);


}







function deleteOrder(id:string){


saveOrders(

orders.filter(
order=>order.id!==id
)

);


}







return (

<OrderContext.Provider

value={{

orders,

addOrder,

updateStatus,

deleteOrder,

}}

>

{children}

</OrderContext.Provider>

);



}







export function useOrders(){


const context =
useContext(OrderContext);



if(!context){

throw new Error(
"useOrders must be inside OrderProvider"
);

}



return context;


}