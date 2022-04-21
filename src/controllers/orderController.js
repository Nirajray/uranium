const userDataModel = require("../models/userDataModel")
const ProductModel = require("../models/productModel")
const OrderModel = require("../models/OrderModel")


const createOrder = async function (req, res) {
    let data = req.body;
    let user = await userDataModel.findById(data.userId);
    if (user) {
        let product = await ProductModel.findById(data.productId);
        if (product) {
            if (req.headers.isfreeappuser == 'true') {
                data['amount'] = 0;
                data['isFreeAppUser'] = req.headers.isfreeappuser;
                let newData = await OrderModel.create(data);
                res.send({ msg: newData });
            }
            else {
                if (user.balance >= product.price) {
                    await userDataModel.findOneAndUpdate(
                        { _id: data.userId },
                        { $set: { balance: user.balance - product.price } }
                    );
                    data['amount'] = product.price;
                    data['isFreeAppUser'] = req.headers.isfreeappuser;
                    let newData = await OrderModel.create(data);
                    res.send({ msg: newData });
                }
                else {
                    res.send("Insufficient Balance!")
                }
            }
        }
        else {
            res.send('Invalid ProductID!');
        }

    }
    else {
        res.send('Invalid UserID!');
    }
}

module.exports.createOrder = createOrder




// const createOrder = async function (req, res) {
//     let data = req.body
//     let userId = req.body.userId
//     let productId = req.body.productId
//     let header = req.headers["isfreeappuser"]
//     console.log(header)
//     let userDetails = await userDataModel.findOne({ userId })
//     let c = userDetails.balance
//    console.log(c)
//     let price = data.amount
//     console.log(price) 
//     let userValidation = await userDataModel.exists({ userId })
//     let productValidation = await productModel.exists({ productId })
//     if (userValidation) {
//         if (productValidation) {
//             if (header) {
//                 let purchase = await orderModel.create(data)
//                 res.send({valup:purchase})
               
//             }
//             else {
//                 if (price > amount) {
//                     res.send({ msg: "balance is not sufficient" })
//                 }
//                 else {
//                    let ordered = await OrderModel.create(data)
//                    await userDataModel.find({_id:userId}).update({balance:`${c}`-`${price}` , new:true})
//                    res.send({value:ordered})

//                 }
  
//                 }
               
//             } else {
//                 res.send({ err: "the product is not present" })
//             }
//         } else {
//             res.send({ alert: "you are not a registered user, please register" })
//         }
//     }

//     module.exports.createOrder = createOrder