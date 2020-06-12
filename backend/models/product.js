const { Schema, Types, model } = require("mongoose");

const productModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
});

const Product = model("product", productModel);

module.exports = Product;
