"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;

  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };

  items: {
    name: string;
    size: string;
    quantity: number;
    price: string;
  }[];

  total: number;

  payment: string;

  status: string;

  createdAt: string;
};


export default function DashboardPage() {


  const [orders, setOrders] =
    useState<Order[]>([]);



  useEffect(() => {

    const savedOrders =
      JSON.parse(
        localStorage.getItem("orders") || "[]"
      );


    setOrders(savedOrders);


  }, []);





  function updateStatus(
    id:number,
    status:string
  ){


    const updated =
      orders.map((order)=>


        order.id === id

        ?

        {
          ...order,
          status,
        }

        :

        order


      );



    setOrders(updated);



    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );


  }






  return (

    <main
      className="
      min-h-screen
      bg-black
      px-6
      py-36
      text-white
      "
    >


      <h1
        className="
        text-5xl
        font-black
        tracking-widest
        "
      >
        ORDERS
      </h1>



      <div
        className="
        mt-12
        space-y-8
        "
      >



      {
        orders.length === 0 ?

        (

          <p className="text-zinc-500">
            No orders yet.
          </p>

        )

        :

        orders.map((order)=>(


          <div
            key={order.id}
            className="
            rounded-3xl
            border
            border-white/10
            bg-zinc-900
            p-8
            "
          >



            <div
              className="
              flex
              justify-between
              "
            >

              <h2
                className="
                text-xl
                font-black
                "
              >
                ORDER #{order.id}
              </h2>


              <span
                className="
                text-red-500
                font-bold
                "
              >
                {order.status}
              </span>


            </div>





            <div className="mt-6 space-y-2">


              <p>
                Name: {order.customer.name}
              </p>


              <p>
                Email: {order.customer.email}
              </p>


              <p>
                Phone: {order.customer.phone}
              </p>


              <p>
                Address: {order.customer.address}
              </p>


              <p>
                Payment: {order.payment}
              </p>


            </div>





            <div
              className="
              mt-8
              border-t
              border-white/10
              pt-6
              "
            >

              <h3
                className="
                font-black
                "
              >
                PRODUCTS
              </h3>


              {
                order.items.map(
                  (item,index)=>(

                  <p
                    key={index}
                    className="mt-2 text-zinc-400"
                  >

                    {item.name}
                    {" - "}
                    Size {item.size}
                    {" x "}
                    {item.quantity}

                  </p>

                ))
              }


            </div>




            <div
              className="
              mt-8
              flex
              items-center
              justify-between
              "
            >

              <p
                className="
                text-2xl
                font-black
                "
              >
                {order.total} EGP
              </p>



              <select

                value={order.status}

                onChange={(e)=>
                  updateStatus(
                    order.id,
                    e.target.value
                  )
                }

                className="
                rounded-xl
                bg-black
                border
                border-white/10
                px-4
                py-3
                "

              >

                <option>
                  New
                </option>

                <option>
                  Confirmed
                </option>

                <option>
                  Shipped
                </option>

                <option>
                  Completed
                </option>


              </select>


            </div>





          </div>


        ))

      }



      </div>


    </main>

  );

}