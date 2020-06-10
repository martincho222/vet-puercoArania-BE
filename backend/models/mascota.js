const {Schema, Types, model}=require ('mongoose');

const mascotaModelo= new Schema({
    nombre:{
        type:String,
        required:true
    },
    especie:{
<<<<<<< HEAD
        type:Types.ObjectId,
        required:true,
        ref:'especie'
    },
    raza:{
        type:Types.ObjectId,
        required:true,
        ref:'raza'
=======
        type: String,
        required:true
    },
    raza:{
        type: String,
        required:true
>>>>>>> 219846a112aaf12374d27004e8903525e83b3297
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