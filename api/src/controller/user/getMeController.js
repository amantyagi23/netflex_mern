import { getUserByEmail } from "../../repo/userRepo.js";




export const getMeController = async (req,resp) =>{
    try {
        const {email} =  req.decoded;
        console.log(email);

        const user = await getUserByEmail(email);
        console.log(user);

        // dto = > data tranfer object
        
        const dto = {
            userName:user.userName,
            userId:user.userId,
            email:user.email,
            role:user.role
        }
        
        resp.status(200).json({userDTO:dto})
    } catch (error) {
        resp.status(500).json({message:"Internal Server Error"})
    }
}