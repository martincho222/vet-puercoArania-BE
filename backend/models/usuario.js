const {Schema, Types, model}=require ('mongoose');

const usuarioModelo= new Schema({
    username: {
        type: String,
        required: true
    },
    nombre:{
        type:String, 
    },
    apellido:{
        type:String,
    },
    telefono:{
        type:Number,
    },
    email:{
        type: String,
        required: true
    },
    pais:{
        type:String,

    },
    provincia:{
        type:String,

    },
    password:{
        type: String,
        required:true
    },
    direccion:[{
        type: String,
        ref:'producto'
    }],
    mascotas:[{
        type: String,
        ref:'producto'
    }],
    role: {
        type: String,
        required: true
    }
});

const Usuario= model('usuario',usuarioModelo);

module.exports= Usuario;
 