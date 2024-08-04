import { userModel } from "../models/userModel.js"




export const createUser = async (rawUser)=>{
    try {
        
        
       await userModel.create(rawUser)
       
    } catch (error) {
        throw new Error(error.message.toString())
    }

}


export const getUserByEmail= async (email)=>{
    try {
        const user = await userModel.findOne({email:email})

        return user !== null ? user : new Error("no Email Found")
    } catch (error) {
        throw new Error(error.message.toString());
    }
}