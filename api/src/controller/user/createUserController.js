import { createUser } from "../../repo/userRepo.js"
import { hashPwd } from "../../shared/utils/bcryptUtils.js";
import { uniqueId } from "../../shared/utils/uuidUtils.js";



export const createUserController = async (req,resp)=>{
    try {
        console.log(req.body)

        // validate

        const rawUser = {
            userId: uniqueId(),
            userName: req.body.username,
            email:req.body.email,
            password: hashPwd(req.body.password),
            role: req.body.email === "admin123@gmail.com" ? 'admin':'user'
            
        } 

        try {
            await createUser(rawUser);
            resp.status(201).json({message:"User Created Successfully"})
        } catch (error) {
            resp.json({message:error.message.toString()})
        }
        
        // save database
       
        
    } catch (error) {
        resp.status(500).json({message:"Internal Server Error"})
    }
}

