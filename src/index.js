const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Nirajkumar:2gkjm25Aa8wh01yS@cluster0.kzih8.mongodb.net/niraj-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});



// 1. Call directly from main file (app.js / index.js):
// app.get('/admin/:foo/:bar/:baz', async (req, res) => {
//     console.log(req.originalUrl);
//     console.log(req.url);
//     console.log(req.path);
//     console.log(req.route.path);
//     console.log(req.baseUrl);
//     console.log(req.hostname);
//     console.log(req.headers.host) // OR req.header('host'));
//     console.log(req.protocol);

//     res.sendStatus(200);
// });
