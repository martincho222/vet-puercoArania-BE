const cartModel = require("../models/shoppingCart");
const itemModels = require("../models/product");
// const item = itemModels.name;

const shoppingController = {
  generateCart: async (req, res) => {
    const { userId, product, quantity } = req.body; // aqui tiene que ir el usuario
    const cart = new cartModel({
      customer: userId,
      items: [],
    });

    cart.items.push({ product, quantity });
    const result = await cart.save();
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
  //   listItemsCart: async (req, res) => {
  //     const { idCart } = req.params;
  //     const cart = await (await cartModel.findById(idCart)).populate("product");
  //     res.json({ product: cart.product });
  //   },
  //   addItemsCart: async (req, res) => {
  //     const { userId, product } = req.body;
  //     const itemCart = new cartModel({ customer: userId, product });
  //   },
};

module.exports = shoppingController;
