const { Schema, Types, model } = require("mongoose");

const raceModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  raceAnimal: {
    type: Types.ObjectId,
    ref: "pet",
  },
});

const Race = model("race", raceModel);

module.exports = Race;
