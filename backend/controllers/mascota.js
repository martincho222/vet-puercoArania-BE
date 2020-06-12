const mascotaModel = require("../models/mascota");

const mascotaController = {
  listarMascotas: async (res, req, next) => {
    try {
      const mascotas = await mascotaModel.find();

      const test = res.json(mascotas);
      console.log(test)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  agregarMascota: async (res, req, next) => {
    try {
      const { idDuenio } = req.body;

      if (!idDuenio) {
        throw { message: "Error ID not found" };
      }

      const {
        nombre,
        especie,
        raza,
        tamanio,
        peso,
        consultas,
        duenio
      } = req.body;

      const mascota = new mascotaModel({
        nombre,
        especie: especie._id,
        raza: raza._id,
        tamanio,
        peso,
        consultas,
        duenio: duenio._id
      });

      const newMascota = await mascota.save();

      duenio.mascotas.push(newMascota.toObject())
      const resultado = await duenio.save();

      return res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  buscarMascotaPorNombre: async (res, req, next) => {
    try {
      const nombre = req.body;
      const resultado = await mascotaModel.find({nombre: nombre});
    
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  buscarMascotaPorDuenio: async (res, req, next) => {
    try {
      const { idDuenio } = req.body
      const resultado = mascotaModel.find({duenio: idDuenio});

      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  actualizarMascota: async (res, req, next) => {
    try {
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  eliminarMascota: async (res, req, next) => {
    try {
        const { idMascota } = req.params;
        const resultado = await mascotaModel.findByIdAndDelete({idMascota});
        return res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },
};

module.exports = mascotaController;