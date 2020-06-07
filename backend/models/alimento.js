const {Schema, Types, model}=require ('mongoose');

const alimentoModelo= new Schema({
    nombre:{
        type:String,
        required:true
    },
    tipoAnimal:{
        type:String,
        required:true
    },
    razaAnimal:{
        type:String,
        required:true
    },
    tamanioAnimal:{
        type:String,
        required:true
    },
    presentacion:{
        type:String,
        required:true
    },
    producto:{
        type:Types.ObjectId,
        ref:'tipoProducto'
    }

});

const Alimento=model('producto',alimentoModelo);

module.exports=Alimento;