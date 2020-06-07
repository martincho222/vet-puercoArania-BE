const {Schema, Types, model}=require ('mongoose');

const accesorioModelo= new Schema({
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

const Accesorio=model('producto',accesorioModelo);
module.exports=Accesorio;
