const { Schema, Types, model } = require("mongoose");

const foodModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  animalType: {
    type: String,
    required: true,
  },
  animalRace: {
    type: String,
    required: true,
  },
  animalSize: {
    type: String,
    required: true,
  },
  presentation: {
    type: String,
    required: true,
  },
  product: {
    type: Types.ObjectId,
    ref: "productType",
  },
});

const Food = model("producto", foodModel);

module.exports = Food;
