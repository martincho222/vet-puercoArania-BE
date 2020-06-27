const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const contentRoutes = require("./content");
const userRoutes = require("./user");
const productRoutes = require("./product");
const mascotaRoutes = require("./mascota");
const appointmentRoutes = require("./appointments");
const authenticateUser = require("../middlewares/authenticateUser");

// Ruta Raiz
router.get('/', (req, res, next) => res.send('Gestion de Usuarios'));
router.use('/registro', registerRoutes);
router.use('/login', loginRoutes);
router.use('/public', contentRoutes);
router.use('/mascota', mascotaRoutes);
router.use('/private',authenticateUser, contentRoutes);
router.use('/private/list',authenticateUser, userRoutes);
router.use("/product", productRoutes);
// router.use("/publico", userRoutes);
router.use("/private/turnos", appointmentRoutes)



module.exports = router;
