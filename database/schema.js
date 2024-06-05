const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    id: {
        "type":String,
        "required":true,

    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String

})
const model = new mongoose.model("Productdata",schema)
module.exports =  model
