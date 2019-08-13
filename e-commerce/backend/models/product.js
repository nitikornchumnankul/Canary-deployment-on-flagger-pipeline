const mongoose = require('mongoose');
const config   = require('../config/database');

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String,
    },
    description:{
        type:String
    },
    Catag:{
        type: String,
        required: true
    },
});

var Product = module.exports = mongoose.model('Product',productSchema);
module.exports = Product;

module.exports.addProduct = function(newPorduct,callback){
    newPorduct.save(callback);
}
module.exports.editProduct = function(oldProductID,newProduct,callback){
    const query ={_id:oldProductID}
    Product.findByIdAndUpdate(query,newProduct,callback);
}
module.exports.removeProduct = function(productID,callback){
    const query = {_id: productID};
    Product.remove(query,callback);
}



