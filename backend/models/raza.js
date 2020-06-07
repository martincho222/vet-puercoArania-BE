const {Schema, Types, model}=require ('mongoose');

const razaModelo= new Schema({
    razaNombre:{
        type:String,
        required:true
    },
    razaAnimal:{
        type:Types.ObjectId,
        ref:'mascota'
    }
});

const Raza=model('raza',razaModelo);

module.exports=Raza;