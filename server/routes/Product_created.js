const fetchdetails = require("../middleware/fetchdetails");
const Product = require("../schemas/Product");
const express = require("express");

const Router = express.Router();
Router.post("/addproduct", fetchdetails, async (req, res) => {
//   const bodyType = typeof req.body;
  const  productarray = await req.body;
  const insertproduct = []
  if (!req.user.userId) {
      return res.status(400).send("invalid id");
    }
    if (Array.isArray(req.body)) {
        for (let index = 0; index < req.body.length; index++) {
        const { title, id, price, category, description, image,  rating } =
          productarray[index]
          const user =  req.user.userId
      const newProduct = await Product.create({
        user : user,
        title,
        id,
        price,
        category,
        description,
        image,
        rating,
      });
      insertproduct.push(newProduct)
    }
  } else {
  }
     res.json(insertproduct);
});
module.exports = Router;
