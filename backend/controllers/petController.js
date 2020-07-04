const petModel = require("../models/pet");

const mascotaController = {
  listarMascotas: async (req, res, next) => {
    const pets = await petModel.find();
    return res.json(pets);
  },

  agregarMascota: async (req, res, next) => {
    try {
      const { name, species, race, size, weigth, owner } = req.body;

      const pet = new petModel({
        name,
        species,
        race,
        size,
        weigth,
        owner
      });
      console.log(pet)
      const resultado = await pet.save();

      return res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  actualizarMascota: async (req, res, next) => {
    try {
      const { idPet } = req.body;
      const result = await petModel.findByIdAndUpdate(idPet, {...req.body});
      return res.json(result)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  eliminarMascota: async (req, res, next) => {
    try {
      const { idPet } = req.body;
      const resultado = await petModel.findByIdAndDelete( idPet );
      return res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },
};

module.exports = mascotaController;
