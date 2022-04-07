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
        if(req.params.filmId > movies.length -1){

          res.send("the filmid no is exceeded")      

        }
res.send(movies[req.params.filmId])


});

module.exports = router;
// adding this comment for no reason