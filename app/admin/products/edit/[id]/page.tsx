"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { products } from "@/app/data/products";



export default function EditProductPage(){


const params = useParams();

const router = useRouter();



const productId =
params.id as string;



const oldProduct =
products.find(
(product)=>
product.id === productId
);






if(!oldProduct){

return (

<div
className="
min-h-screen
bg-black
text-white
p-10
"
>

Product Not Found

</div>

);

}








const [product,setProduct] =
useState(oldProduct);









function updateSize(

size:string,

value:number

){


setProduct({

...product,

sizes:{

...product.sizes,

[size]:value

}

});


}









function handleUpdate(){



console.log(product);


// database connection later


router.push("/admin/products");


}









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
max-w-3xl
"

>




<h1

className="
text-4xl
font-black
tracking-widest
"

>

EDIT PRODUCT

</h1>









<div

className="
mt-10
space-y-5
"

>






<input

value={product.name}

onChange={(e)=>

setProduct({

...product,

name:e.target.value

})

}

className="
w-full
rounded-2xl
bg-zinc-900
border
border-white/10
px-5
py-4
"

/>








<input

value={product.price}

onChange={(e)=>

setProduct({

...product,

price:e.target.value

})

}

className="
w-full
rounded-2xl
bg-zinc-900
border
border-white/10
px-5
py-4
"

/>









<select

value={product.category}

onChange={(e)=>

setProduct({

...product,

category:e.target.value

})

}

className="
w-full
rounded-2xl
bg-zinc-900
border
border-white/10
px-5
py-4
"

>


<option>
Tees
</option>


<option>
Hoodies
</option>


</select>









<input

value={product.image}

onChange={(e)=>

setProduct({

...product,

image:e.target.value

})

}

className="
w-full
rounded-2xl
bg-zinc-900
border
border-white/10
px-5
py-4
"

/>










<input

value={product.hoverImage}

onChange={(e)=>

setProduct({

...product,

hoverImage:e.target.value

})

}

className="
w-full
rounded-2xl
bg-zinc-900
border
border-white/10
px-5
py-4
"

/>











<textarea

value={product.description}

onChange={(e)=>

setProduct({

...product,

description:e.target.value

})

}

className="
h-32
w-full
rounded-2xl
bg-zinc-900
border
border-white/10
px-5
py-4
"

/>









<h2

className="
mt-8
text-xl
font-black
"

>

SIZE STOCK

</h2>









<div

className="
grid
grid-cols-4
gap-4
mt-5
"

>



{Object.keys(product.sizes).map(

(size)=>(



<div

key={size}

>


<p
className="
mb-2
text-xs
text-zinc-400
"
>

{size}

</p>



<input

type="number"

value={
product.sizes[
size as keyof typeof product.sizes
]
}

onChange={(e)=>

updateSize(

size,

Number(e.target.value)

)

}

className="
w-full
rounded-xl
bg-zinc-900
border
border-white/10
p-3
text-center
"

/>



</div>



)

)}



</div>









<button

onClick={handleUpdate}

className="
mt-10
w-full
rounded-full
bg-red-600
py-5
font-black
uppercase
tracking-widest
hover:bg-red-700
"

>

SAVE CHANGES

</button>







</div>






</div>






</main>


);



}