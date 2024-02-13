const mongoose = require("mongoose")
const mongouri ="mongodb://localhost:27017/shop"

const connectToMongo =() => {
    try {
        mongoose.connect(mongouri).then(
            console.log("connected to mongo database")
        )
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectToMongo