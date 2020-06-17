const { Schema, Types, model } = require("mongoose");

const petModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: Types.ObjectId,
    ref: "species",
  },
  race: {
    type: Types.ObjectId,
    ref: "race",
  },
  size: {
    type: String,
  },
  weigth: {
    type: Number,
  },
  owner: {
    type: Types.ObjectId,
    ref: "user",
  },
  query: [
    {
      type: String,
      ref: "query",
    },
  ],
});

const Pet = model("pet", petModel);

module.exports = Pet;
