const express = require('express');
const router = express.Router();
const UserDataController= require("../controllers/userDataController")
const orderController= require("../controllers/orderController")
const productController =require("../controllers/productController");
const { route } = require('express/lib/application');
const middleware= require("../middlewares/commonMiddlewares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
}) 

router.post("/createproduct", productController.createProduct)
router.post("/createuserdata",  middleware.mid1, UserDataController.createUser)
router.post("/createorder", middleware.mid1, orderController.createOrder)

 



 

// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;