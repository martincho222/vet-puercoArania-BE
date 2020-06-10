const {Schema, Types, model}=require ('mongoose');

const productoModelo= new Schema({
    nombre:{
        type:String,
        required:true
    },
    detalle:{
        type:String,
        required:true
    },
    url: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
    }

});

const Producto=model('producto',productoModelo);

module.exports=Producto;