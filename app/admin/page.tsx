"use client";


import Link from "next/link";



export default function AdminDashboard(){


return (


<main
className="
min-h-screen
bg-black
text-white
p-10
"
>


<h1
className="
text-5xl
font-black
tracking-widest
"
>

UNSEEN ADMIN

</h1>





<div
className="
mt-12
grid
gap-6
md:grid-cols-3
"
>




<Link

href="/admin/products"

className="
rounded-3xl
bg-zinc-900
border
border-white/10
p-8
hover:border-white/40
transition
"

>

<h2
className="
text-2xl
font-black
"
>

PRODUCTS

</h2>


<p
className="
mt-3
text-zinc-400
"
>

Manage products & stock

</p>


</Link>







<div

className="
rounded-3xl
bg-zinc-900
border
border-white/10
p-8
"

>

<h2
className="
text-2xl
font-black
"
>

ORDERS

</h2>


<p
className="
mt-3
text-zinc-400
"
>

Coming soon

</p>


</div>







<div

className="
rounded-3xl
bg-zinc-900
border
border-white/10
p-8
"

>

<h2
className="
text-2xl
font-black
"
>

SALES

</h2>


<p
className="
mt-3
text-zinc-400
"
>

Analytics

</p>


</div>







</div>





</main>


);


}
<Link

href="/admin/orders"

className="
rounded-3xl
bg-zinc-900
border
border-white/10
p-8
hover:border-white/40
transition
"

>

<h2

className="
text-2xl
font-black
"

>

ORDERS

</h2>


<p

className="
mt-3
text-zinc-400
"

>

Manage customer orders

</p>


</Link>