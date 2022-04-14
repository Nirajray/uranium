const readBookModel= require("../models/readBook")
const authorModel= require("../models/authorModel")

const createNewAuthor= async function (req, res) {
    const data= req.body
const savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createNewBook= async function (req, res){
    const reqBook= req.body
const saved= await readBookModel.create(reqBook)
console.log(saved)
res.send({msg:saved})
}


const allBook = async function (req, res){
    const authorDetail= await authorModel.find({author_name: "Chetan Bhagat"})
    console.log(authorDetail)
    const id= authorDetail[0].author_id
    const bookName= await readBookModel.find({author_id:id}).select({name:1})
    console.log(bookName)
    res.send({msg:bookName})
}

const updateBookPrice= async function (req, res){
const bookDetails= await readBookModel.find({name:"Two states"})
console.log(bookDetails)
const id= bookDetails[0].author_id
const authorName= await authorModel.find({author_id:id}).select({author_name:1, _id:0})
const bookName= bookDetails[0].name
newPrice=await readBookModel.findOneAndUpdate({name:bookName},{price:100},{new: true}).select({price:1, _id:0})
res.send({msg:authorName, newPrice})
}

const authorsName = async function (req, res){
 const booksId= await readBookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
 const id= booksId.map(inp=>(inp.author_id))
let temp=[]
 for (let i=0;i<id.length;i++){
     let a= id[i]
const author= await authorModel.find({author_id:a}).select({author_name:1, _id:0})
temp.push(author)
 }
 const authorName= temp.flat()
res.send({msg:authorName})
 }





module.exports.createNewAuthor=createNewAuthor
module.exports.createNewBook=createNewBook
module.exports.allBook=allBook
module.exports.updateBookPrice =updateBookPrice
module.exports.authorsName=authorsName