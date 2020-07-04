const { Schema, Types, model } = require("mongoose");

const SalesSchema = new Schema({
  details: [
    {
      detailProduct: {
        type: String,
      },
      quantity: {
        type: String,
      },
      unitPrice: {
        type: String,
      },
      totalPrice: {
        type: String,
      },
    },
  ],

  state: {
    type: String,
  },
  totalPayment: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
});

const Sales = model("sales", SalesSchema);
module.exports = Sales;
