const User = require("../schemas/user");
const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const salt = "jashandeepsinghclass ic commerce brooll "
Router.post("/createuser", async (req, res) => {
  try {
    const { name, password, email } = req.body; 
    if (!name || !password || !email) {
     return res.status(400).send("provide credentials"); 
    }

    const exist_user = await User.findOne({ email: email });
    if (exist_user) {
      return res.status(400).send("user exist"); 
    }

    const bcryptpass = await bcrypt.hash(password,salt); 
    const newuser = await User.create({ name, email, password: bcryptpass });
    const token = await jwt.sign({ userId: newuser._id }, salt);
    res.send({user : newuser,token:token})
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // You may want to handle errors more gracefully
  }
});

Router.post("/login", async (req, res) => {
    try {
      const { password, email } = req.body; 
      if ( !password || !email) {
        res.status(500).send("provide credentials"); 
      }
  
      const exist_user = await User.findOne({ email: email });
      if (!exist_user) {
        return res.status(500).send("user not exist"); 
      }
      const token = await jwt.sign({ userId: exist_user._id }, salt);
      res.send({user : exist_user,token:token})

    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error"); // You may want to handle errors more gracefully
    }
  });


module.exports = Router;
