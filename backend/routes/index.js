const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const contentRoutes = require("./content");
const userRoutes = require("./user");
const productRoutes = require("./product");
const shoppingCartRoutes = require("./shoppingCart");
const mascotaRoutes = require("./mascota");
const appointmentRoutes = require("./appointments");
const authenticateUser = require("../middlewares/authenticateUser");
const checkoutRoutes = require("./checkout");
const salesRoutes = require("./sales");

// Ruta Raiz
router.get("/", (req, res, next) => res.send("Gestion de Usuarios"));
router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/public", contentRoutes);
router.use("/mascota", mascotaRoutes);
router.use("/private", authenticateUser, userRoutes);
router.use("/shoppingCart", authenticateUser, shoppingCartRoutes);
// router.use('/private', authenticateAdmin, userRoutes);
router.use("/product", productRoutes);
router.use("/turnos", authenticateUser, appointmentRoutes);
router.use("/turnos", authenticateUser, appointmentRoutes);
router.use("/checkout", authenticateUser, checkoutRoutes);
router.use("/sales", authenticateUser, salesRoutes);

module.exports = router;
