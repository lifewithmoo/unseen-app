"use client";


import Link from "next/link";

import { products } from "@/app/data/products";



export default function AdminProductsPage(){



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





<div

className="
flex
items-center
justify-between
"

>



<h1

className="
text-4xl
font-black
tracking-widest
"

>

PRODUCTS

</h1>





<Link

href="/admin/products/add"

className="
rounded-full
bg-red-600
px-7
py-4
text-xs
font-black
uppercase
tracking-widest
hover:bg-red-700
"

>

+ Add Product

</Link>





</div>









<div

className="
mt-12
grid
gap-6
"

>





{products.map((product)=>(





<div

key={product.id}

className="
rounded-3xl
border
border-white/10
bg-zinc-900
p-6
"

>






<div

className="
flex
gap-5
items-center
"

>





<img

src={product.image}

alt={product.name}

className="
h-28
w-24
rounded-2xl
object-cover
"

/>







<div>


<h2

className="
text-xl
font-black
uppercase
"

>

{product.name}

</h2>





<p

className="
mt-2
text-red-500
font-bold
"

>

{product.price}

</p>





<p

className="
mt-2
text-sm
text-zinc-400
"

>

Category:
{product.category}

</p>



</div>





</div>









{/* STOCK */}





<div

className="
mt-6
grid
grid-cols-4
gap-3
"

>


{product.sizes &&

Object.entries(product.sizes).map(

([size,count])=>(


<div

key={size}

className="
rounded-xl
bg-black
p-3
text-center
"

>


<p

className="
text-xs
text-zinc-500
"

>

{size}

</p>


<p

className="
mt-1
font-black
"

>

{count}

</p>


</div>


)


)

}

</div>









<div

className="
mt-6
flex
gap-3
"

>



<Link

href={`/admin/products/edit/${product.id}`}

className="
rounded-full
border
border-white/20
px-6
py-3
text-xs
font-black
uppercase
hover:bg-white
hover:text-black
transition
"

>

EDIT

</Link>







<button

className="
rounded-full
bg-red-600
px-6
py-3
text-xs
font-black
uppercase
"

>

DELETE

</button>





</div>






</div>





))}






</div>








</div>





</main>


);



}