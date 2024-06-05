


const model = require("../database/cartproduct.js")
const carauseldata = require("./product2")
const products2 = async()=>{
    try {
     model.insertMany(carauseldata)
     console.log("data saved")


    } catch (error) {
        console.log("some error occured while loading data")
        
    }
}

module.exports = products2;
