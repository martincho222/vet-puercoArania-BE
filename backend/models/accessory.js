const { Schema, Types, model } = require("mongoose");

const accessoryModel = new Schema({
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
  productPresentation: {
    type: String,
    required: true,
  },
  product: {
    type: Types.ObjectId,
    ref: "producType",
  },
});

const Accessory = model("accesory", accessoryModel);
module.exports = Accessory;
