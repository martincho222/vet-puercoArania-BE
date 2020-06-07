const {Schema, Types, model}=require ('mongoose');

const productoModelo= new Schema({
    codigo:{
        type:Number,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    },
    tipoProducto:[{
        type:Types,
        ref:'producto'
    }]

});

const Producto=model('producto',productoModelo);

module.exports=Producto;