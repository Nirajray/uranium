const mongoose= require('mongoose')

const batchesSchema = new mongoose.Schema({
    batchName:String,
    size:Number,
    program:{
        type:String,
        enum:["backend","frontend"]
    }
    
},{timestamps:true})

module.exports=mongoose.model("Batch", batchesSchema)