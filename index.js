const express = require("express")
require("dotenv").config()
const userroute= require("./Routes/userRoutes")
const dbconnect=require("./Service/dbConnect")


PORT = process.env.PORT || 5000

const app = express();
app.use('/', userroute);

const startServer = async()=>{
    try {
        await dbconnect.authenticate()
        app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
        })
         
    } catch (error) {
        console.log(error);
    }
}

startServer()
