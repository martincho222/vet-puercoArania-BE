const {Schema, Types, model}=require ('mongoose');

const especieModelo= new Schema({
    especieNombre:{
        type:String,
        required:true
    },
    tipoAnimal:{
        type:Types.ObjectId,
        ref:'mascota'
    }
});

const Especie=model('especie',especieModelo);

module.exports=Especie;