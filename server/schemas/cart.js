const { ObjectId } = require("mongodb");
const { Schema, default: mongoose } = require("mongoose");

const cart = new Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cart);
module.exports = Cart;
