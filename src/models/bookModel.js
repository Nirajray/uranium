const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        required: true,
    },
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages:Number,
    stockAvailable: Boolean,
    year:{type: Number, default:2021}
 
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books
