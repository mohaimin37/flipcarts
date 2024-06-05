const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())



require("../database/mongoose.js")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(require("./login.js"))
app.use(require("./cartpro.js"))
app.use(require("./prodetails.js"))
app.use(require("./default.js"))











const PORT = process.env.PORT||8000


app.listen(PORT,()=>{

    console.log("hi how are you are you fine" )
})



