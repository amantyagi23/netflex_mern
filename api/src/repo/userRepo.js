import { userModel } from "../models/userModel.js"




export const createUser = async (rawUser)=>{
    try {
        
        
       await userModel.create(rawUser)
       
    } catch (error) {
        throw new Error(error.message.toString())
    }

}