import React from "react";
import { AiFillFire, AiFillCarryOut } from "react-icons/ai";
import { GiRunningShoe } from "react-icons/gi";

const products = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "Adobe Photoshop CC 2022",
    location: "Lisbon, Portugal",
    price: "$850",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "React Native Development",
    location: "San Francisco, CA",
    price: "$1,200",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Vue.js Mastery",
    location: "Vancouver, BC",
    price: "$799",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "GraphQL Fundamentals",
    location: "Remote",
    price: "$599",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    title: "GraphQL Fundamentals",
    location: "Remote",
    price: "$599",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "GraphQL Fundamentals",
    location: "Remote",
    price: "$599",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    title: "GraphQL Fundamentals",
    location: "Remote",
    price: "$599",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    title: "GraphQL Fundamentals",
    location: "Remote",
    price: "$599",
  },
];

const ProductList = () => {
  return (
    <>
      {/* Title */}
      <div className=" bg-white">
        <h3 className="text-center text-3xl font-bold text-gray-800">
          Our Collection
        </h3>
      </div>
      {/* Tab Menu */}
      <ul className="flex flex-wrap items-center py-10 justify-center bg-white text-cyan-800 gap-20 text-lg font-semibold ">
        <li className="flex gap-2 cursor-pointer">
          <GiRunningShoe className="mt-1 text-green-700 text-xl" />
          New Arrivals
        </li>
        <li className="flex gap-2 cursor-pointer">
          <AiFillFire className="mt-1 text-red-600 text-xl" />
          Most Selling
        </li>
        <li className="flex gap-2 cursor-pointer">
          <AiFillCarryOut className="mt-1 text-sky-400 text-xl" />
          Pre-Order
        </li>
      </ul>
{/* Product List */}

<section className="py-10 bg-gray-100">
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products.map((product) => (
      <article
        key={product.id}
        className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <div className="relative">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src={product.imageUrl}
            alt={product.title}
          />
          {/* Sale Tag */}
          {product.price.includes("%") ? (
            <div className="absolute top-0 left-0 bg-yellow-500 py-1 px-2 rounded-br-lg text-white font-semibold">
              {product.price}
            </div>
          ) : null}
        </div>
        <div className="py-3">
          <h4 className="text-lg font-semibold">{product.title}</h4>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="mr-1">{product.location}</span>
            <div className="h-2 w-2 rounded-full bg-current"></div>
            <span className="mx-1">{product.price}</span>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>
</>
);
};
export default ProductList;