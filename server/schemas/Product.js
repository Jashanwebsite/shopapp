const { ObjectId } = require("mongodb");
const { Schema, default: mongoose } = require("mongoose");

const product = new Schema({
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
    type: String, // Corrected the typo in the type declaration
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
  rating: {
    rate: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
});

const Product = mongoose.model("Product", product);
module.exports = Product;
