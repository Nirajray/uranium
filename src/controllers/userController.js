const jwt = require("jsonwebtoken");
const userOneModel = require("../models/userOneModel");
//1============================================================
const createUser = async function (req, res) {
  try {
    let data = req.body;
    if ( Object.keys(data).length != 0) {
     
    let savedData = await userOneModel.create(data);
    res.status(201).send({ msg: savedData });
  }
  else res.status(400).send({ msg: "BAD REQUEST"})

}
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

//2.=======================================================================

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userOneModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(), 
        batch: "radium",
        organisation: "FunctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  }

  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

//3.=====================================================================
const getUserData = async function (req, res) {
 
  try {
    let userId = req.params.userId;
    let userDetails = await userOneModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  } 
};

//4.==============================================================================
const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userOneModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userOneModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status: true, data: updatedUser });
}
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};
//5.==============================================================================
const postMessage = async function (req, res) {
  try{
  let message = req.body.message
  let user = await userOneModel.findById(req.params.userId)
  if (!user) return res.status(404).send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userOneModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.status(200).send({ status: true, data: updatedUser })
}
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};
//6.=========================================================================
const deleteUser = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  // if (!token) return res.send({ status: false, msg: "token must be present" });
  // let decodedToken = jwt.verify(token, "functionup-thorium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });
  try{
    let userId = req.params.userId;
  let user = await userOneModel.findById(userId);

  if (!user) {
    return res.status(404).send("No such user exist");
  }

  let userDetails = await userOneModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
  res.status(200).send({ status: userDetails })

}
catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser = deleteUser;
