const {Schema, Types, model}=require ('mongoose');

const mascotaModelo= new Schema({
    nombre:{
        type:String,
        required:true
    },
    especie:{
        type:Types.ObjectId,
        required:true,
        ref:'especie'
    },
    raza:{
        type:Types.ObjectId,
        required:true,
        ref:'raza'
    },
    tamanio:{
        type:String,
        required:true
    },
    peso:{
        type:Number,
        required:true
    },
    consultas:{
        type:String,
        required:true
    },
    duenio:{
        type: Types.ObjectId,
        ref:'usuario'
    }
    
});

const Mascota=model('mascota',mascotaModelo);

module.exports=Mascota;