const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    id:String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String


})
const model = new mongoose.model("carauselproduct",schema)
module.exports = model 