const express=require("express")

const mid1= function ( req, res, next) {
   if (req.headers['isfreeappuser']){
    next()
    }
    else{
        res.send({msg:"request is missing a mandatory header"})
    }

}



const updatedValidator = function (req, res, next) {
    req.headers['isfreeappuser'] = true;
    next();
}



module.exports.mid1= mid1
module.exports.updatedValidator=updatedValidator

     