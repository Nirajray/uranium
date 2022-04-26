const axios = require("axios")

const wheatherData= async function(req, res){
    try {
        let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[];
        for(let i=0;i<cities.length;i++){
            let obj = {city:cities[i]}
      
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d78a20990ece519e9829d86161563f9c`,
         }
         let result = await axios(options)
      obj.temp=result.data.main.temp
      cityObjArray.push(obj)
        }

         sorted = cityObjArray.sort( function(a, b) {return a.temp - b.temp})
         res.status(200).send({info:sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.wheatherData=wheatherData