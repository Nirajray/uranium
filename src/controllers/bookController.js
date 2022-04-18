const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
    if(!authorId) {
        return res.send({message: "Author id must be present in the book detials"})   
    }

    //3 b)
    let authors = await authorModel.findById(authorId)

    if(!authors) {
        return res.send({message: "Not a valid author id"})
    }

    //3 c)
    if(!publisherId) {
        return res.send({message: "Publihser id must be present in the book details"})
    }

    //3 d)
    let publisher = await publisherModel.findById(publisherId) 

    if(!publisher) {
        return res.send({message: "Not a valid publisher id"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find().populate("publisher").populate("author")
    res.send({ data: books })
}

const updateBooks = async function (req, res) {
    // update hardcover to true for few books
    let hardCOverPublishers = await publisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
    let arrayOfPublishers = []
    
    for (let i = 0; i < hardCOverPublishers.length; i++) {
        let objId = hardCOverPublishers[i]._id 
        arrayOfPublishers.push(objId)
    }
    
    let books = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})

    res.send({data: books})
}
const priceUpdate= async function (req, res){
    let authorIds= await authorModel.find({rating:{$gt:3.5}}).select({"_id":1})
    
    await bookModel.updateMany(
        {author:{$in:authorIds}},
        {$inc:{price:10}}
    )
    let saved = await bookModel.find()
    res.send({data:saved})
    }


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBooks = updateBooks
module.exports.priceUpdate=priceUpdate
