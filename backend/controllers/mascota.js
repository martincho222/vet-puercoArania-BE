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
        query: [],
        owner
      });
      console.log(pet)
      const newPet = await pet.save();

      owner.pets.push(newPet.toObject());
      const resultado = await owner.save();

      return res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  buscarMascotaPorNombre: async (req, res, next) => {
    try {
      const name = req.body;
      const resultado = await petModel.find({ nombre: name });

      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  buscarMascotaPorDuenio: async (req, res, next) => {
    try {
      const { idDuenio: idOwner } = req.body;
      const resultado = petModel.find({ owner: idOwner });

      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  actualizarMascota: async (req, res, next) => {
    try {
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },

  eliminarMascota: async (req, res, next) => {
    try {
      const { idMascota: idPet } = req.params;
      const resultado = await petModel.findByIdAndDelete({ idMascota: idPet });
      return res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error 500: Internal server error" });
    }
  },
};

module.exports = mascotaController;
