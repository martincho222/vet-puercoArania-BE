const { Schema, Types, model } = require("mongoose");

const turnsModel = new Schema({
  service: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    required: true,
  },
  pet: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: Date,
    required: true,
  },
});

const Turns = model("turns", turnsModel);
module.exports = Turns;
