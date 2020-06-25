const router = require('express').Router();
const mascotaController = require('../controllers/petController');

const {
    listarMascotas,
    agregarMascota,
    actualizarMascota,
    eliminarMascota
} = mascotaController

router.route('/')
    .get(listarMascotas)
    .post(agregarMascota)
    .put(actualizarMascota)
    .delete(eliminarMascota);

module.exports = router;