let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() +1)).slice(-2);
let year = date_ob.getFullYear();
let printDate = function(){
return (date+" "+month+" "+year)
}

 let printMonth= function(){
return (month)
}
 
let getBatchInfo = function(){
    return ("Uranium, W3D3, the topic for today is nodejs module system")
}

module.exports.printDate =printDate ;
module.exports.printMonth = printMonth ;
module.exports.getBatchInfo= getBatchInfo ;