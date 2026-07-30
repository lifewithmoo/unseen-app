"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";



export default function AddProductPage(){



const router = useRouter();




const [product,setProduct] = useState({

name:"",

price:"",

category:"Tees",

image:"",

hoverImage:"",

description:"",

sizes:{

S:0,

M:0,

L:0,

XL:0,

}

});







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









function handleSubmit(){


console.log(product);


// later connect database


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

ADD PRODUCT

</h1>








<div

className="
mt-10
space-y-5
"

>





<input

placeholder="Product Name"

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
outline-none
"

/>









<input

placeholder="Price"

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
outline-none
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

placeholder="Main Image URL"

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

placeholder="Hover Image URL"

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

placeholder="Description"

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
outline-none
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

onClick={handleSubmit}

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

CREATE PRODUCT

</button>








</div>






</div>





</main>


);



}