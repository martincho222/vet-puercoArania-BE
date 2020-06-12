const { Schema, Types, model } = require("mongoose");

const speciesModel = new Schema({
  Name: {
    type: String,
    required: true,
  },
  animalType: {
    type: Types.ObjectId,
    ref: "pet",
  },
});

const Species = model("species", speciesModel);

module.exports = Species;
