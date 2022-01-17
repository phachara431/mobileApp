const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    products_id: String,
    products_name: String,
    products_price: Number,
});

module.exports = mongoose.model("products", schema);