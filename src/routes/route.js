const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
});

// Problem 1-----------------------------------------------------------------
router.get('/movies', function(req, res) {
    let arr = ['Rang De Basanti', 'Inception', 'King', 'RRR']
    res.send(arr)
});

// Problem 2 ---------------------------------------------------------------

router.get('/movie/:index', function (req, res) {
    let arr = ['Rang De Basanti', 'Inception', 'King', 'RRR'];
     res.send(arr[req.params.index])
});

// Problem no 3 -------------------------------------------------------------

router.get('/movies/:index', function (req, res) {
    let arr = ['Rang De Basanti', 'Inception', 'King', 'RRR'];
    if (req.params.index>arr.length-1){
        res.send("the index is exceeded")
    }
     res.send(arr[req.params.index])
});

// Problem 4 -----------------------------------------------------------------
router.get('/films', function (req, res) {
    movies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo" }];
        res.send(movies)
});
 
// Problem no 5 -------------------------------------------------

router.get('/films/:filmId', function (req, res) {
    
    movies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo" }];
        if(req.params.filmId > movies.length){

          res.send("the filmid no is exceeded")      

        }
        for(let i = 0; i< movies.length;i++){
            if(req.params.filmId == movies[i].id){
                res.send(movies[i])}
            }
res.send(movies[req.params.filmId])


});
router.get('/array', function (req, res) {
    function missNo(arr, n ){
         let nArrSum = (n*(n+1)/2);
        let sumOfTheArr= 0 ;
        for(let i = 0; i < arr.length;i++){
        

            sumOfTheArr += arr[i]; 
        }
            return nArrSum-sumOfTheArr  ; 
    
    }
    let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 11] ;
    let n = arr.length + 1;
    let miss = missNo(arr, n)

console.log(miss)
     res.send(miss.toString())

});


router.get('/rangemiss', function (req, res) {
    let arr = [32, 33, 34, 35, 37, 38, 39]
    let w = 0;
    for(let i=arr[0]; i < arr[arr.length-1]; i++){

        w +=i;
    }

    let y = 0;
    for (let j = 0; j< arr.length; j++){
        y +=j[i];
    }

    let k = w - y;
    res.send(k.toString())
});

module.exports = router;
// adding this comment for no reason------