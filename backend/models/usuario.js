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
});

const Usuario=model('usuarios',usuarioModelo);

module.exports=Usuario;
 