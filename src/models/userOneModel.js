const mongoose = require('mongoose');

const userOneSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isDeleted: {
        type: Boolean,
        default: false
    },
    posts: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('UserOne', userOneSchema)
