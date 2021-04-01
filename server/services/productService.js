const Product =require('../models/Product');

async function getAll() {

    let products = await Product.find()
    return products;
}

async function getOne(id){
    let product = await Product.findById(id)
    return product;
}
 function create (data, userId){
    let product = new Product({...data, owner:userId, })

    if(product.model.length < 3){
        throw {massage:'Model should be at least 3 charecters'}
    }
    if(!product.description){
        throw {massage:'Description should be at least 12 charectes'}
    }
    
    return  product.save();
}

module.exports = {
    create,
    getAll,
    getOne,
    
}