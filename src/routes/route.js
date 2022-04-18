const express = require('express');
const router = express.Router();
const allController = require('../controllers/allcontroller')
const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createdevelopers", allController.createDevelopers)

router.post("/createbatch", allController.createBatch)
router.get("/scholarship-developers",allController.scholarDevelopers)
router.get("/developers",allController.getDevelopers)

module.exports = router;