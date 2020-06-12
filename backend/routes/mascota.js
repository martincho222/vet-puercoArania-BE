const router = require('express').Router();
const mascotaController = require('../controllers/mascota');

const {
    listarMascotas,
    agregarMascota,
    buscarMascotaPorNombre,
    buscarMascotaPorDuenio,
    actualizarMascota,
    eliminarMascota
} = mascotaController

router.route('/')
    .get(listarMascotas)
    .get(buscarMascotaPorNombre)
    .post(agregarMascota)
    .put(actualizarMascota)
    .delete(eliminarMascota);

router.route('/:idDuenio')
    .get(buscarMascotaPorDuenio);
    
module.exports = router;