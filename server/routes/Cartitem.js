const express = require("express");
const fetchdetails = require("../middleware/fetchdetails");
const Product = require("../schemas/Product");
const Cart = require("../schemas/cart");
const Router = express.Router();
Router.get("/fetchcart",fetchdetails,async (req,res)=>{
    try {
        if(!req.user){
            return "must login"
        }
        const user = req.user.userId
        const cartitems = await Cart.find({user: user})
        res.json(cartitems)
    } catch (error) {
        console.log(error)
    }
})
Router.post("/addcartitem",fetchdetails,async (req,res)=>{
    // let user;
    try {
        if(!req.user){
            return "must login to add cart item"
        }
        user = req.user.userId
        const {userid }= req.body
        const product = await Product.findById(userid)
        // res.json(user)
        const { title, description, category, price,id, image }= product
        const cart = await Cart.create({ user:user,id, title, description, category, price, id, image })
        res.json(cart)
    } catch (error) {
        console.log(error)
    }
})

Router.delete("/deletecart",fetchdetails,async (req,res)=>{
    try {
        if(!req.user){
            return "must login"
        }
        const {id} = req.body
        const cartitems = await Cart.findByIdAndDelete(id)
        res.json("item deleted")
    } catch (error) {
        console.log(error)
    }
})

module.exports = Router