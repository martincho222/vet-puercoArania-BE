const { Schema, Types, model } = require("mongoose");

const appointmentModel = new Schema({
  service: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: 'user'
  },
  pet: {
    type: Types.ObjectId,
    ref: 'pet'
  },
  date: {
    type: String,
    required: true,
  },
  time:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
});

const Appointment = model("appointment", appointmentModel);
module.exports = Appointment;
