const mercadopago = require("mercadopago");
const cartModel = require("../models/shoppingCart");
const productModel = require("../models/product");
// console.log(mercadopago)
const Payments = {
  checkout: async (req, res, next) => {
    const cart = await cartModel
      .findOne({ customer: req.user.sub })
      .populate("items")
      .populate("items.product");
      console.log(cart.items)
    const preferences = {
      items: [],
      back_urls: {
        success: "http://localhost:3000/payment-success",
        failure: "http://localhost:3000/payment-failure",
        pending: "http://localhost:3000/payment-pending",
      },
      auto_return: "approved",
    };
    cart.items.map((item) => {
      preferences.items.push({
        id: item.product._id,
        title: item.product.name,
        // description: item.product.details,
        category_id: item.product.category,
        unit_price: item.product.price,
        quantity: item.quantity,
      });
    });
    try {
      const payment = await mercadopago.preferences.create(preferences);
      return res.json({ redirectUrl: payment.body.init_point });
    } catch (error) {
      res.status(500).json({ failure: error.message });
    }
  },
  confirmPayment: async (req, res, next) => {
    const { collection_id } = req.body;
    try {
      console.log(collection_id)
      const response = await mercadopago.payment.get(collection_id);
      res.send({
        status: response.response.status,
        transactionDetails: response.response.transaction_details
      });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = Payments;
