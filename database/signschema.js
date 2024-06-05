const mongoose = require("mongoose") 
const schema = new mongoose.Schema({
    fname:String,
    lname:String,
    uname:String,
    phone:String,
    password:String,
    email:String

})
const model = new mongoose.model("signuplogin",schema)
module.exports =  model 