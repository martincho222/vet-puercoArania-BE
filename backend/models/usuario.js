const {Schema, Types, model}=require ('mongoose');

const usuarioModelo= new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    email:{
        type:email
    },
    ciudad:{
        type:String,
        required:true
    },
    provincia:{
        type:String,
        required:true
    },
    password:{
        type:password
    },
    mascotas:[{
        type:Types,
        ref:'producto'
    }]
});

const Usuario=model('usuario',usuarioModelo);

module.exports=Usuario;
 