const cartModel = require("../models/shoppingCart");
const productModels = require("../models/product");
var mongoose = require('mongoose');

// const item = itemModels.name;

const shoppingController = {
  addToCart: async (req, res) => {
    const { product, quantity } = req.body; 
    const cart = await cartModel.findOne({customer: req.user.sub})
    console.log(req.body);
    if(cart){
      const found = cart.items.find((product) =>{
        return product._id === product 
      })
      if(found){
        console.log('por aqui paso')
        const cart = await cartModel.findOne( 
          { customer: req.user.sub },
          { $inc:  {items :{ quantity : quantity } }  },
          { safe: true })
          .exec()
          cart = await (await cartModel.findOne({customer: req.user.sub}))
        return res.json(cart);
      }
      console.log(product);
      let newProduct = await productModels.findOne({_id: product});
      console.log(newProduct);
       cart.items.push({product: newProduct, quantity});
       try {
         console.log(cart)
        cart.save();
       } catch (error) {
         console.log(error)
       }
       
       
      return res.json(cart)
    }
    const newCart = new cartModel({
      customer: req.user.sub,
      items:[{product, quantity}]
    });
    const result = await newCart.save();
    return res.json(result); 
  },

  listCart: async (req, res) => {
    const result = await cartModel.findOne({customer: req.user.sub}).populate("items.product").populate("customer")
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
    const { product } = req.params;
    // const cart = await cartModel.findOne({customer: req.user.sub})
    console.log(product)
    // if(cart){
    //   const cartToDelete = cart.items.pull({product})
    //   console.log(cart.items[0].product)
    //   await cart.save()
    //   res.json({msg: 'me borre coño'})
    // }
    const cart= await cartModel.update( 
      { customer: req.user.sub },
      { $pull: { items : { product : product } } },
      ).exec()
    return res.json(cart);
  },
 
};

module.exports = shoppingController;
