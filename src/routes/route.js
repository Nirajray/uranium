const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController=require("../controllers/memeController")
const wheatherController= require("../controllers/wheatherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/districtsAndDate", CowinController.getByDistrictAndDate)
router.get("/cowin/getByPin", CowinController.getByPin)
 
router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/editmeme", memeController.editmeme)
router.get("/wheatherData", wheatherController.wheatherData)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;