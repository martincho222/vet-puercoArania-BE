const { Schema, Types, model } = require("mongoose");

const medicineModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  animalType: {
    type: String,
    required: true,
  },
  raceAnimal: {
    type: String,
    required: true,
  },
  sizeAnimal: {
    type: String,
    required: true,
  },
  presentation: {
    type: String,
    required: true,
  },
  product: {
    type: Types.ObjectId,
    ref: "typeProduct",
  },
});

const Medicine = model("medicine", medicineModel);
module.exports = Medicine;
