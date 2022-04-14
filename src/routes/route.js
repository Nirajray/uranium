const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const allController= require("../controllers/allController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewAuthor", allController.createNewAuthor)
router.post("/createNewBook", allController.createNewBook)
router.get("/allBook", allController.allBook)
router.get("/updateBookPrice", allController.updateBookPrice)
router.get("/authorsname", allController.authorsName)

module.exports = router;



