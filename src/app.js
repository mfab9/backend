import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"; //this is for crud operation on server cookies 

const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"})) //ye form bhrne se arha hai data
app.use(express.urlencoded({extended:true,limit:"16kb"})) // ye data arha from url 
app.use(express.static("public")) //ye hai public naam ki file jisme imags /vids hogi 

app.use(cookieParser()); //more option later...

export {app}