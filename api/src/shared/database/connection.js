import mongoose from "mongoose";

const URI =  "mongodb+srv://amantyagi2223:admin123@cluster0.k0xonxj.mongodb.net/netflexmernDB"

export const mongoDBConnection = async()=>{
   try {
    await mongoose.connect(URI)
    console.log("MongoDB Connected Successfully")
   } catch (error) {
    console.log('error in connection',error.message.toString());
   }
}