const Product = require("../models/product");

// Create New Product

exports.newProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success:true,
    product
  })
};

// Get All Products
exports.getProducts = async (req, res ) => {
  const products = await Product.find()
  res.status(200).json({
    success: true,
    count: products.length,
    products
  });
};

// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {

  const product = await Product.findById(req.params.id);

  if (!product) {
      return next(new ErrorHandler('Product not found', 404));
  }


  res.status(200).json({
      success: true,
      product
  })

})