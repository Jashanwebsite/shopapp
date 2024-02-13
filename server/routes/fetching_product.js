const express = require("express");
// const  fetchdetails = require("../middleware/fetchdetails");
const Product = require("../schemas/Product");
const Router = express.Router();
Router.get("/category", async (req, res) => {
  try {
    const query = req.body;
    const fetchProduct = await Product.find(query)
    const ftechproductlength = fetchProduct.length
    res.json({query,ftechproductlength,fetchProduct});
  } catch (error) {
    console.log(error);
  }
});



module.exports = Router