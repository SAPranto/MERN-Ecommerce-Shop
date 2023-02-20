import React from "react";
import "../App.css";
import TabMenu from "./TabMenu";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "Nike Shoe",
    description: "Original Replica",
    price: "৳2850",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Adidas",
    description: "KA7",
    price: "৳1,200",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Puma",
    description: "B579",
    price: "৳799",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Demo Shoe",
    description: "Description or Model",
    price: "৳1890",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    title: "Demo Shoe",
    description: "Description or Model",
    price: "৳1890",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Demo Shoe",
    description: "Description or Model",
    price: "৳1890",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    title: "Demo Shoe",
    description: "Description or Model",
    price: "৳1890",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    title: "Demo Shoe",
    description: "Description or Model",
    price: "৳1890",
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
      <TabMenu />
      {/* Product List */}
      <section className="py-10 bg-gray-100 fade-in">
        <div className="mx-6 md:mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white p-3 shadow-lg hover:shadow-2xl hover:transform transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 md:hover:scale-110 cursor-pointer"
            >
              <div className="relative">
                <img
                  className="w-full h-60 object-cover rounded-xl"
                  src={product.imageUrl}
                  alt={product.title}
                />
              </div>
              <div className="py-3">
                <h4 className="text-lg font-semibold">{product.title}</h4>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="mr-1">{product.description}</span>
                  <div className="h-2 w-2 rounded-full bg-current"></div>
                  <span className="mx-1">{product.price}</span>
                </div>
                <div className="flex justify-between pt-4">
                  <Link to="/product">
                  <button className="btn bg-sky-600">Buy Now</button>
                  </Link>
                  <Link to="/product">
                  <button className="btn bg-red-500">Add To Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default ProductList;
