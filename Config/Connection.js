const mongoose= require("mongoose")
require ("dotenv").config()
const connectDB= async()=>{
    try {await mongoose.connect (process.env.MONGO_URI)
        console.log("database is connected")
        
    } catch (error) {
        console.log("there is an error")
        
    }

}
module.exports=connectDB