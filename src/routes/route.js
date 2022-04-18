const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const publisherController= require("../controllers/publisherController")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createauthor", authorController.createAuthor  )
router.post("/createPublisher", publisherController.createPublisher)



router.post("/createBook", bookController.createBook  )

router.get("/getbook", bookController.getBooksData)
router.put("/updatebook", bookController.updateBooks)
router.put("/updateprice", bookController.priceUpdate)


module.exports = router;