const Product = require("../models/product");
const dotenv = require("dotenv");
const connectDB = require("../config/database");
const products = require("../data/products");

// Setting Dotenv File
dotenv.config({ path: "backend/config/config.env" });

connectDB();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("All Products Are Deleted");

    await Product.insertMany(products);
    console.log("All Products Are Added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
