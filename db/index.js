import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../src/constants.js";
const connectDB=async()=>{
    try{
        const connectionInstance =await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\nMongoDB connected:${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGO CONNECTION FAILED IN db/INDEX.js")
        process.exit(1)
    }
}
export default connectDB