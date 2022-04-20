const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment= require("moment");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (function (req, res, next) {
//     const formatDate=(date= new Date())=>{
//         const days= date.getDate() +1;
//         const months=date.getMonth() +1;
//         const year = date.getFullYear();
//         return `${date}/${months}/${year}`;
//    }
   const a=moment().format('l LTS');
    console.log(req.originalUrl+" "+req.ip+" "+a)
   // console.log(req.url);
    //console.log(req.path);
   //console.log(req.route.path);
   // console.log(req.ip+" "+new Date()+)
   // console.log(new Date())
   // console.log(req.baseUrl);
   // console.log(req.hostname);
   // console.log(req.headers.host) // OR req.header('host'));
   // console.log(req.protocol);
   res.sendStatus(200);
    });

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
