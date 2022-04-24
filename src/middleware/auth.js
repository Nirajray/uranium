
const jwt = require("jsonwebtoken");
const { count }= require("console")

const authenticate = function(req, res,next)  {
    //Using try and catch
    //check the token in request header
    //validate this token
    try{ 
        let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })  
    }
    
        next()
}    


  


const autherization= function(req, res, next){
  try
   {
       let token =req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });
      let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
  if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    
    
}

catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })  
}

    next()

}


module.exports.authenticate=authenticate
module.exports.autherization=autherization