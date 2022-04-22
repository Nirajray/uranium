const express = require('express');
const router = express.Router();
const newUsercontroller= require("../controllers/newUserController")
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", newUsercontroller.createUser  )

router.post("/login", newUsercontroller.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleware.auth, newUsercontroller.getUserData)

router.put("/users/:userId", middleware.auth, newUsercontroller.updateUser)
router.delete("/users/:userId", middleware.auth, newUsercontroller.deleteUser)


middleware.auth,

module.exports = router;