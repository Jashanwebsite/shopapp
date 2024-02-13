const express = require("express")
const  connectToMongo  = require("./db")
const cors = require("cors")
const app = express()
connectToMongo();
app.use(express.json())
app.use(cors())

app.use("/api/product",require("./routes/Product_created.js"))
app.use("/api/user",require("./routes/User_Route.js"))
app.use("/api/fetchproduct",require("./routes/fetching_product.js"))
app.use("/api/cart",require("./routes/Cartitem.js"))

app.listen(process.env.data || 5000  ,()=>{
    console.log(` app is listening at ${5000}`)
})