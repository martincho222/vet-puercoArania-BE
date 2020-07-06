const salesModel = require("../models/sales");
const cartModel = require("../models/shoppingCart");

const salesController = {
  addToSales: async (req, res, next) => {
    const { details, state, totalPayment, paymentMethod } = req.body;
    const cart = await cartModel.findOne({ customer: req.user.sub });
    console.log(cart.items);
    // if(cart){
    //     const sale = cart.items.map((item) => {

    //     })
    // }
  },
};

module.exports = salesController;
