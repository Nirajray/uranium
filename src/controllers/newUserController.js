const jwt = require("jsonwebtoken");
const newUserModel = require("../models/newUserModel");
//1==================
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await newUserModel.create(data);
  res.send({ msg: savedData });
};
//2===============================
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await newUserModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "titanium",
      organisation: "FunctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};
//3.====================================
const getUserData = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  // if (!token) return res.send({ status: false, msg: "token must be present" });
  // let decodedToken = jwt.verify(token, "functionup-thorium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });


  let userId = req.params.userId;
  let userDetails = await newUserModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};


//4.========================
const updateUser = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  // if (!token) return res.send({ status: false, msg: "token must be present" });
  // let decodedToken = jwt.verify(token, "functionup-thorium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  
    let userId = req.params.userId;
  let user = await newUserModel.findById(userId);
 if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await newUserModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedUser });
};
//5======================
const deleteUser = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  // if (!token) return res.send({ status: false, msg: "token must be present" });
  // let decodedToken = jwt.verify(token, "functionup-thorium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  
    let userId = req.params.userId;
  let user = await newUserModel.findById(userId);

  if (!user) {
    return res.send("No such user exist");
  }

  let userDetails = await newUserModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
  res.send({ status: userDetails })

}



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
