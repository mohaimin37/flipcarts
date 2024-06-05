const express = require('express')
const app = express()
const model = require("../database/cartproduct.js")

app.get("/product/:id",async(req,res)=>{
try {
   const id = req.params.id
   console.log(id)
   const anas = await model.findOne({"id":id})
   res.send(anas)
} catch (error) {
   res.send('no data')
   
}
   
})
module.exports = app
      
      

