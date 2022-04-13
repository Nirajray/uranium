const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", BookController.createBook  )
router.get("/RandomBooks", BookController.getRandomBooks)
router.post("/yearBook",BookController.getBooksInYear)
router.get("/bookList", BookController.bookList)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.post("/getparticular",BookController.getParticularBooks)
module.exports = router;

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)
