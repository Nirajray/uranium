const productModel= require("../models/productModel")


const createProduct= async function (req, res){
    let save= req.body
    let savedData= await productModel.create(save)
    res.send({data:savedData})
}


module.exports.createProduct=createProduct