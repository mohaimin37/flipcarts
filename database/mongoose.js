const mongoose =  require("mongoose")
mongoose.connect("mongodb+srv://syedanas:anas@ecommerce.c33xdsh.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce").then(()=>{
console.log("you are going correctly")
}).catch(()=>{
    console.log("something something haha delete it ")
})
module.exports = mongoose

