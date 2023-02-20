import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      image: "product1.jpg",
      title: "Product 1",
      price: "$19.99",
    },
    {
      id: 2,
      image: "product2.jpg",
      title: "Product 2",
      price: "$24.99",
    },
    {
      id: 3,
      image: "product3.jpg",
      title: "Product 3",
      price: "$29.99",
    },
    {
      id: 4,
      image: "product3.jpg",
      title: "Product 3",
      price: "$29.99",
    },
    {
      id: 5,
      image: "product4.jpg",
      title: "Product 4",
      price: "$34.99",
    },
    {
      id: 6,
      image: "product4.jpg",
      title: "Product 4",
      price: "$34.99",
    },
    {
      id: 7,
      image: "product4.jpg",
      title: "Product 4",
      price: "$34.99",
    },
    {
      id: 8,
      image: "product4.jpg",
      title: "Product 4",
      price: "$34.99",
    },
    {
      id: 9,
      image: "product4.jpg",
      title: "Product 4",
      price: "$34.99",
    },
  ];

  return (
    <div className="lg:col-span-4">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsGrid;
