const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   id: mongoose.Types.ObjectId,
   model:String,
   imgURL:String,
   description:String,
   price:Number,
   post:[],
   owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
}

})

module.exports = mongoose.model('Product', productSchema)