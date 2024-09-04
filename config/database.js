import mongoose from "mongoose";


const connectDb=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Databse connected ${connection.connection.host}`);
    }catch(error){
        console.log("Error while connecting to Database");
    }
}

export default connectDb;