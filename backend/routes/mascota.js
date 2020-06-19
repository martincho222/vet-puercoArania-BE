const router = require('express').Router();
const mascotaController = require('../controllers/mascota');

const {
    listarMascotas,
    agregarMascota,
    buscarMascotaPorDuenio,
    actualizarMascota,
    eliminarMascota
} = mascotaController

router.route('/')
    .get(listarMascotas)
    .post(agregarMascota)
    .put(actualizarMascota)
    .delete(eliminarMascota);

router.route('/:idOwner')
    .get(buscarMascotaPorDuenio);

module.exports = router;