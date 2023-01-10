const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    sizes:[
        {
            type:String,
            required:true
        }
    ],
    reviews:[
        {
            userId:{type:mongoose.Types.ObjectId,required:true,ref:"User"},
            rate:{type:Number,required:true},
        }
    ]
})

module.exports = mongoose.model('Product',productSchema)