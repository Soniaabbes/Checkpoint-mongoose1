const express= require("express")
const connectDB = require("./Config/Connection")
const app= express()
connectDB()
app.use(express.json())
app.use('/api/person', require('./Routes/Route.js'))
const port = 5000
app.listen (port, ()=>{
    console.log(`server run on port ${port}`)
})