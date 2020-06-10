const router = require('express').Router();

const UserController = require('../controllers/userController');



router.route("/")
    .post(UserController.agregarUsuario);

    module.exports = router;