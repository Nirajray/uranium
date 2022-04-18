const batchModel= require("../models/batchModel")
const developerModel=require("../models/developerModel")


const createBatch= async function(req, res){
    let saved =req.body
     let savedData = await batchModel.create(saved)
   res.send({data:savedData})
}

const createDevelopers= async function(req, res){
    let saved1 =req.body
     let developerscrated = await developerModel.create(saved1)
   res.send({data:developerscrated})
}

const scholarDevelopers= async function(req, res){
     let savedData3 = await developerModel.find({gender:"female", percentage:{$gte:70}})
   res.send({data:savedData3})
}

const getDevelopers= async function(req, res){
    let save =req.query.percentage                        
    let save1=req.query.program
    console.log(save1)

     let savedData2 = await batchModel.find({batchName:save1}).select({_id:1})
     console.log(savedData2)
     let data1= await developerModel.find({batches:savedData2,percentage:{$gte:save}}).populate("batches")
   res.send({data:data1})
}





module.exports.createBatch=createBatch
module.exports.createDevelopers=createDevelopers
module.exports.scholarDevelopers=scholarDevelopers
module.exports.getDevelopers=getDevelopers