const model  = require("../database/schema.js")

const dealData =  require("./product.js")

const data = async()=>{
    try {
      model.insertMany(dealData)
        console.log("data stored sucessfully")

    } catch (error) {
        console.log("some error occured while loading data")
        
    }
}
module.exports = data