const UserModel= require("../models/userModel")

//const createUser= async function (req, res) {
    //let data= req.body
  //  let savedData= await UserModel.create(data)
  //  res.send({msg: savedData})
//}

//const getUsersData= async function (req, res) {
    //let allUsers= await UserModel.find()
  //  res.send({msg: allUsers})
//}

const createBook= async function (req, res) {
    let bookData= req.body
    let savedBookData= await UserModel.create(bookData)
    res.send({msg: savedBookData})
}

const getBooksData= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
//module.exports.createUser= createUser
//module.exports.getUsersData= getUsersData