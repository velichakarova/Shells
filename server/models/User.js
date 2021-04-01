const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username:String,
    password:String,
    product:[{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    }],

    posts:[{
        type:mongoose.Types.ObjectId,
        ref:'Comment'
    }]
})


module.exports = mongoose.model('User', userSchema );