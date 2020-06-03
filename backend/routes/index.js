const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const contentRoutes = require("./content");
const authenticateUser = require("../middlewares/authenticateUser");


// Ruta Raiz
router.get('/', (req, res, next) => res.send('Gestion de Usuarios'));
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/private',authenticateUser, contentRoutes);