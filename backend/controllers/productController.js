const Product = require("../models/product");

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

// Create New Product

exports.newProduct = catchAsyncErrors( async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success:true,
    product
  })
});

// Get All Products
exports.getProducts = catchAsyncErrors(async (req, res ) => {
  const products = await Product.find()
  res.status(200).json({
    success: true,
    count: products.length,
    products
  });
});

// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {

  const product = await Product.findById(req.params.id);

  if (!product) {
      return next(new ErrorHandler('Product Not Found', 404))
      }
  
  res.status(200).json({
      success: true,
      product
  })
})

// Update Product

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
   let product = await Product.findById(req.params.id)

   if (!product) {
    return res.status(404).json ({
      success: false,
      message: 'Product not found'
    })
}

product = await Product.findByIdAndUpdate(req.params.id, req.body,{
  new: true,
  runValidators:true,
  useFindAndModify: false
})

res.status(200).json ({
  success: true,
  product
})
})

// Delete Product 

exports.deleteProduct = catchAsyncErrors(async(req,res,next) => {
  
  const product = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).json ({
      success: false,
      message: 'Product not found'
    })
}
  await product.remove()

  res.status(200).json ({
    success: true,
    message: 'Product Is Deleted'
  })

})