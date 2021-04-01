const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    message:String,
    author:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    product:[]
},
    {timestamps: {createdAt :'create_at'}})

    

module.exports= mongoose.model('Comment', commentSchema)