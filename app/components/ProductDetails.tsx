"use client";

import { useState } from "react";

import { useCart } from "@/app/context/CartContext";
import SizeChart from "@/app/components/SizeChart";
import SizeSelector from "@/app/components/SizeSelector";
import CartPopup from "@/app/components/CartPopup";



type Product = {

  id: string;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  description?: string;

  sizes: {
  M: number;
  L: number;
  XL: number;
};
};





export default function ProductDetails({

  product,

}:{
  product: Product;

}) {



  const { addToCart } = useCart();



  const [size,setSize] =
    useState("M");



  const [quantity,setQuantity] =
    useState(1);



  const [showPopup,setShowPopup] =
    useState(false);

const [showSizeChart, setShowSizeChart] = useState(false);





  const availableStock =
    product.sizes?.[
      size as keyof typeof product.sizes
    ] || 0;








  function handleAdd(){


    if(availableStock === 0){

      return;

    }




    addToCart({

      ...product,

      size,

      quantity,

    });



    setShowPopup(true);


  }








return (



<div

className="
w-full
max-w-xl
"

>





<p

className="
text-xs
uppercase
tracking-[0.5em]
text-red-500
"

>

UNSEEN DROP

</p>







<h1

className="
mt-5
text-4xl
font-black
uppercase
leading-tight
md:text-6xl
"

>

{product.name}

</h1>







<p

className="
mt-6
text-3xl
font-black
"

>

{product.price}

</p>









<p

className="
mt-6
text-sm
leading-8
text-zinc-400
md:text-base
"

>

{product.description ||

"Premium heavyweight streetwear piece. Oversized fit. Limited production."

}

</p>












{/* SIZE */}



<div

className="
mt-10
"

>



<h3

className="
mb-4
text-xs
font-black
uppercase
tracking-widest
"

>

Select Size

</h3>






<SizeSelector


size={size}

setSize={(newSize)=>{
setSize(newSize);
<SizeChart />
setQuantity(1);

}}

/>

<div className="mt-4 flex justify-end">
  <button
    type="button"
    onClick={() => setShowSizeChart(true)}
    className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition"
  >
    Size Chart
  </button>
</div>









<p

className={`
mt-4
text-xs
font-bold

${
availableStock === 0

?

"text-red-500"

:

"text-zinc-400"

}

`}

>

{

availableStock === 0

?

"This size is sold out"

:

`Only ${availableStock} left in size ${size}`

}

</p>





</div>














{/* QUANTITY */}





<div

className="
mt-8
flex
items-center
justify-between
rounded-full
border
border-white/10
px-6
py-4
"

>



<span

className="
text-xs
font-black
uppercase
tracking-widest
"

>

Quantity

</span>









<div

className="
flex
items-center
gap-5
"

>





<button

onClick={()=>

setQuantity(
Math.max(
1,
quantity-1
)
)

}

className="
text-xl
text-zinc-400
hover:text-white
"

>

-

</button>







<span className="font-black">

{quantity}

</span>








<button

disabled={
quantity >= availableStock
}

onClick={()=>

setQuantity(
quantity+1
)

}

className="
text-xl
text-zinc-400
hover:text-white
disabled:opacity-30
"

>

+

</button>





</div>






</div>













{/* BUTTON */}





{

availableStock === 0 ? (



<button

disabled

className="
mt-8
w-full
rounded-full
bg-zinc-700
py-5
text-sm
font-black
uppercase
tracking-[0.3em]
text-zinc-400
"

>

SIZE SOLD OUT

</button>



) : (



<button

onClick={handleAdd}

className="
mt-8
w-full
rounded-full
bg-red-600
py-5
text-sm
font-black
uppercase
tracking-[0.3em]
transition
hover:bg-red-700
hover:scale-[1.02]
"

>

ADD TO CART

</button>



)

}













{/* FEATURES */}



<div

className="
mt-10
grid
gap-4
text-sm
text-zinc-400
"

>


<p>
✓ Premium heavyweight fabric
</p>


<p>
✓ Oversized streetwear fit
</p>


<p>
✓ Limited UNSEEN release
</p>


</div>








{showSizeChart && (
  <div
    className="fixed inset-0 z-[100]  flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={() => setShowSizeChart(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900 p-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-black uppercase tracking-widest">
          Size Chart
        </h2>

        <button
          onClick={() => setShowSizeChart(false)}
          className="text-2xl text-zinc-400 hover:text-white"
        >
          ×
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3">Size</th>
              <th>Chest</th>
              <th>Length</th>
              <th>Shoulder</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-white/10">
              <td className="py-3 font-bold">S</td>
              <td>54 cm</td>
              <td>70 cm</td>
              <td>49 cm</td>
            </tr>

            <tr className="border-b border-white/10">
              <td className="py-3 font-bold">M</td>
              <td>57 cm</td>
              <td>73 cm</td>
              <td>52 cm</td>
            </tr>

            <tr className="border-b border-white/10">
              <td className="py-3 font-bold">L</td>
              <td>60 cm</td>
              <td>76 cm</td>
              <td>55 cm</td>
            </tr>

            <tr>
              <td className="py-3 font-bold">XL</td>
              <td>63 cm</td>
              <td>79 cm</td>
              <td>58 cm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-xs text-zinc-500">
        Measurements may vary by ±1–2 cm.
      </p>
    </div>
  </div>
)}
<CartPopup

show={showPopup}

setShow={setShowPopup}

/>







</div>



);



}