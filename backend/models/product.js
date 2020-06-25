const { Schema, Types, model } = require("mongoose");

const productModel = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
  },
  category: {
    type: String,
    // enum: ["food", "accesory", "medicine"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Product = model("product", productModel);

module.exports = Product;
