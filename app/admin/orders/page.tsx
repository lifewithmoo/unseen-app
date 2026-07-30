"use client";


import { useOrders } from "@/app/context/OrderContext";





export default function OrdersPage(){



const {
  orders,
  updateStatus,
  deleteOrder

} = useOrders();







return (



<main

className="
min-h-screen
bg-black
text-white
px-6
py-12
"

>



<div

className="
mx-auto
max-w-7xl
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









{orders.length === 0 ? (



<p

className="
mt-10
text-zinc-500
"

>

No orders yet

</p>



) : (






<div

className="
mt-10
grid
gap-6
"

>





{orders.map((order)=>(



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
items-start
justify-between
gap-5
"

>




<div>


<h2

className="
text-xl
font-black
uppercase
"

>

ORDER #{order.id}

</h2>




<p

className="
mt-2
text-sm
text-zinc-400
"

>

{
new Date(
order.createdAt
)
.toLocaleString()

}

</p>



</div>







<select

value={order.status}

onChange={(e)=>

updateStatus(

order.id,

e.target.value as any

)

}

className="
rounded-full
bg-black
border
border-white/20
px-5
py-3
text-xs
font-black
uppercase
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
Delivered
</option>



</select>






</div>













{/* CUSTOMER */}



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
tracking-widest
"

>

CUSTOMER

</h3>





<div

className="
mt-4
space-y-2
text-sm
text-zinc-400
"

>


<p>

Name:
{" "}
{order.customer.name}

</p>



<p>

Email:
{" "}
{order.customer.email}

</p>



<p>

Phone:
{" "}
{order.customer.phone}

</p>



<p>

Address:
{" "}
{order.customer.address}

</p>



</div>




</div>












{/* ITEMS */}





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
tracking-widest
"

>

ITEMS

</h3>






<div

className="
mt-5
space-y-4
"

>



{order.items.map((item,index)=>(


<div

key={index}

className="
flex
justify-between
rounded-2xl
bg-black
p-4
"

>


<div>


<p
className="
font-bold
"

>

{item.name}

</p>



<p

className="
text-xs
text-zinc-500
"

>

Size:
{item.size}

</p>



</div>





<div

className="
text-right
"

>


<p
className="
font-black
"

>

x{item.quantity}

</p>


<p

className="
text-red-500
"

>

{item.price}

</p>


</div>




</div>



))}




</div>







</div>












{/* TOTAL */}




<div

className="
mt-8
flex
items-center
justify-between
border-t
border-white/10
pt-6
"

>


<span

className="
text-xl
font-black
"

>

TOTAL

</span>



<span

className="
text-3xl
font-black
text-red-500
"

>

{order.total} EGP

</span>




</div>













<button

onClick={()=>

deleteOrder(
order.id
)

}

className="
mt-8
rounded-full
bg-red-600
px-8
py-3
text-xs
font-black
uppercase
tracking-widest
hover:bg-red-700
"

>

DELETE ORDER

</button>










</div>



))}



</div>






)}




</div>






</main>


);



}