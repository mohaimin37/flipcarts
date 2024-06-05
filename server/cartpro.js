const express = require("express")
const menupulate = express()
const model = require("../database/cartproduct.js")
menupulate.get("/datas",async(req,res)=>{
    try {
        const abdul = await model.find({})
        res.send(abdul)
        
    } catch (error) {
        res.send(error)
        
    }
})

 
  
module.exports = menupulate


