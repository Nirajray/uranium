const express = require('express');
const logger = require('./logger')
const logging = require('../logger/logging.js')
const helper = require('../util/helper.js')
const formatter = require('../validator/formatter.js')
const _ = require("lodash");
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(logger.endpoint)
    console.log(logging.welcome())
    console.log(helper.printDate())
    console.log(helper.printMonth())
    console.log(helper.getBatchInfo())
    console.log(formatter.trim())
    console.log(formatter.changeToLowerCase())
    console.log(formatter.changeToUperCase())
    res.send('My first ever api!')
    
});

router.get('/hello', function (req, res){
    console.log("print month sub array")
    const year = ["jan", "feb", "mar", "apr","may", "june","july", "aug", "sep", "oct", "nov", "dec"]
    console.log(_.chunk(year, 3))
    let add =[1,3,5,7,9,11,13,15,17,19]
    console.log("from last 9 odd no")
    console.log(_.tail(add))
    console.log("my merged unique array")
    let arr1 = [1,2,3,3,4,5]
    let arr2 = [2,6,7,8,8]
    let arr3 = [9,9,5,3,7,8]
    let arr4 = [10,10,23,45,55]
    let arr5 = [15,15,16,17,18]
    
    console.log("key value pairs are")
    let pairs = [['ram age', 15], ['harry', 20], ['kishan', 37], ['prakash', 18]]
  
let obj = _.fromPairs(pairs);
  
console.log(obj)


    res.send(_.union(arr1,arr2,arr3,arr4,arr5))
})

module.exports = router;
// adding this comment for no reasons