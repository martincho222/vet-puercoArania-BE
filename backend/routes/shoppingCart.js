//const authCtrl = require('/ruta/a/auth.controller');
//const orderCtrl = require("../controllers/salesController");
const router = require("express").Router();
const shoppingController = require("../controllers/shoppingCartController");
const itemsController = require("../controllers/itemsController");

const {
  generateCart,
  listCart,
  searchCartById,
  toUpdateCart,
  removeCart,
  //   adItemsCart,
} = shoppingController;

// const { adItemsCart } = itemsController;

const { adItemsCart, listItemsCart, removeItemCart } = itemsController;
//manejamos la ruta para procesar un pedido
router.route("/").get(listCart).post(generateCart);

router.route("/:id").get(searchCartById).put(toUpdateCart).delete(removeCart);

router
  .route("/:idCart/items")
  .get(listItemsCart)
  .post(adItemsCart)
  .delete(removeItemCart);
module.exports = router;
