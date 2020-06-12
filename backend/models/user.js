const { Schema, Types, model } = require("mongoose");

const userModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  tel: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  province: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  pets: [
    {
      type: String,
      ref: "pets",
    },
  ],
  role: {
    type: String,
    required: true,
  },
});

const User = model("user", userModel);

module.exports = User;