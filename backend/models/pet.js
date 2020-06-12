const { Schema, Types, model } = require("mongoose");

const petModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: Types.ObjectId,
    required: true,
    ref: "species",
  },
  race: {
    type: Types.ObjectId,
    required: true,
    ref: "race",
  },
  size: {
    type: String,
    required: true,
  },
  weigth: {
    type: Number,
    required: true,
  },
  querys: {
    type: String,
    required: true,
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
