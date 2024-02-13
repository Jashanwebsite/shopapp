const jwt = require("jsonwebtoken")
const salt = "jashandeepsinghclass ic commerce brooll "
async function fetchdetails(req,res,next){
    const {token} =await req.headers;
    // res.json(token)
    if (!token) {
      return  res.status(400).send("bad token")
    }
     req.user =  jwt.verify(token,salt)
     console.log(req.user)
     next();

}
module.exports = fetchdetails
