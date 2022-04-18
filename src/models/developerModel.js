const mongoose= require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId
const developersSchema = new mongoose.Schema({
    developerName:String,
		gender:{
            type:String,
            enum:["male", "female", "others"]
        },
		percentage:Number,
batches:{type:ObjectId,
    ref : "Batch"}
},{timestamps:true})

module.exports=mongoose.model("Developer", developersSchema)