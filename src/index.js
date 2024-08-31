import connectDB from "./db/index.js";
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config({
    path:'./env' 
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is runnuing at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db connection failed in src/index.js");
    
})
/*
import express from 'express';
const app =express();
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERROR",error)
        throw error
    }
})()
*/