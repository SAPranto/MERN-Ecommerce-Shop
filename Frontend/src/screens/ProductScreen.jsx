import React from 'react'
import ProductDetails from '../components/ProductDetails'
import ProductCard from '../components/ProductCard'

const ProductScreen = () => {
  return (
    <>
    <ProductDetails/>
    <h2 className='text-center text-2xl font-bold my-10'>Related Products</h2>
    <div className='gap-4 grid grid-cols-4 container mx-auto my-6'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </div>
    </>
  )
}

export default ProductScreen