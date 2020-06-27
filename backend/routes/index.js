const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const contentRoutes = require("./content");
const userRoutes = require("./user");
const authenticateUser = require("../middlewares/authenticateUser");
const productRoutes = require("./product");
const shoppingCartRoutes = require("./shoppingCart");
const mascotaRoutes = require("./mascota");

// Ruta Raiz
router.get("/", (req, res, next) => res.send("Gestion de Usuarios"));
router.use("/registro", registerRoutes);
router.use("/login", loginRoutes);
router.use("/private", authenticateUser, contentRoutes);
router.use("/product", productRoutes);
router.use("/shoppingCart", shoppingCartRoutes);
router.use("/public", contentRoutes);
router.use("/mascota", mascotaRoutes);
router.use("/private/list", authenticateUser, userRoutes);

module.exports = router;
