import ProductCard from "../components/ProductCard";

const products = [
  {
     id: "1",
    name: "UNSEEN Black Hoodie",
    price: "$120",
    image: "/hoodie.jpg",
  },
  {
    id: "2",
    name: "UNSEEN Oversized T-Shirt",
    price: "$80",
    image: "/shirt.jpg",
  },
  {
    id: "3",
    name: "UNSEEN Jacket",
    price: "$200",
    image: "/jacket.jpg",
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-black p-10 pt-44 text-white">
 
      <h1 className="text-center text-4xl font-black tracking-[0.3em]">
  SHOP
</h1>

      <p className="mt-3 text-center text-gray-400 tracking-wider">
  Explore our latest collection.
</p>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {products.map((product) => (
         <ProductCard
  key={product.id}
  id={product.id}
  name={product.name}
  price={product.price}
  image={product.image}
          />
        ))}
      </div>
    </main>
  );
}