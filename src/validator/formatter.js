
let text = "function up"
let trim = function()
{
return text.trim()
}

 let changeToLowerCase = function(){
return text.toLowerCase()
}

let changeToUperCase = function(){
return text.toUpperCase()
}
module.exports.trim = trim ;
module.exports.changeToLowerCase = changeToLowerCase ;
module.exports.changeToUperCase = changeToUperCase ;


