const cartModel = require("../models/shoppingCart");
// const itemModels = require("../models/product");
// const item = itemModels.name;

const shoppingController = {
  addToCart: async (req, res) => {
    const { product, quantity } = req.body;
    const cart = await cartModel.findOne({ customer: req.user.sub });

    if (cart) {
      const found = cart.items.find((product) => {
        product._id === product;
      });
      if (found) {
        const cart = await cartModel
          .findOne(
            { customer: req.user.sub },
            { $inc: { items: { quantity: quantity } } },
            { safe: true }
          )
          .exec();
        cart = await cartModel.findOne({ customer: req.user.sub });
        return res.json(cart);
      }
      await cart.items.push({ product, quantity });
      return res.json(cart);
    }
    const newCart = new cartModel({
      customer: req.user.sub,
      items: [{ product, quantity }],
    });
    const result = await newCart.save();
    return res.json(result);
  },

  listCart: async (req, res) => {
    const result = await cartModel.find().populate("items");
    return res.json(result);
  },
  searchCartById: async (req, res) => {
    const { id } = req.params;
    const cart = await cartModel.findById(id).populate("items.product");
    return res.json({ items: cart.items.product });
  },
  toUpdateCart: async (req, res) => {
    const { id } = req.params;
    const paramsToUpdate = { ...req.body };
    const result = await cartModel.findByIdAndUpdate(id, paramsToUpdate);
    return res.json(result);
  },
  removeCart: async (req, res) => {
    const { id } = req.params;
    const result = await cartModel.findByIdAndDelete(id);
    return res.json(result);
  },
  removeItemCart: async (req, res) => {
    const { product } = req.body;
    cartModel.update(
      { customer: req.user.sub },
      { $pull: { items: { product: product } } },
      { safe: true }
    );
    return res.json(cartModel);
  },
};

module.exports = shoppingController;
