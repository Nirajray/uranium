const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const ObjectId = mongoose.Types.ObjectId

const createBook = async function (req, res) {
    let book = req.body
    if (!book.author_id) {

        return res.send({ msg: "author_id is not present" })
    }
    if (!ObjectId.isValid(book.author_id)) {
        return res.send({ msg: "author is not present" })
    }
    if (!book.publisher_id) {

        return res.send({ msg: "publisher_id is not present" })
    }
    if (!ObjectId.isValid(book.publisher_id)) {
        return res.send({ msg: "publisher is not present" })
    }

    const bookCreated = await bookModel.create(book)
    return res.send({ data: bookCreated })

}

const getBooksData = async function (req, res) {
    let books = await bookModel.find().populate("publisher_id").populate("author_id")
    res.send({ data: books })
}

const updateBook = async function (req, res) {
    let publisherIds = await publisherModel.find({ name: { $in: ["Happercollins", "Penguin"] } }).select({ "_id": 1 })
    console.log(publisherIds)
    await bookModel.updateMany(
        { publisher_id: { $in: [publisherIds[0], publisherIds[1]] } },
        { isHardCover: true },{new:true})
    let booksUpdated = await bookModel.find()
    res.send({ data: booksUpdated })

}

const priceUpdate= async function (req, res){
    let bookPrice= await bookModel.find({rating:{$gt:3.5}}).select({"_id":1})
    console.log(bookPrice) 
    await bookModel.updateMany(
        {_id:{$in:bookPrice}},
        {$inc:{price:10}}
    )
    let saved = await bookModel.find()
    res.send({data:saved})
    }


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBook = updateBook
module.exports.priceUpdate=priceUpdate
