import { getUserByEmail } from "../../repo/userRepo.js"
import { verifiyPwd } from "../../shared/utils/bcryptUtils.js";
import { createJWTToken } from "../../shared/utils/JWTUtils.js";



export const loginController = async (req,resp) =>{
    try {
        const {email, password} = req.body

        try {
            const user = await getUserByEmail(email);

            if(verifiyPwd(password,user.password)=== true){
                const customUser = {
                    uuid:user.userId,
                    userName:user.userName,
                    email:user.email,
                    role:user.role
                }
                const token = createJWTToken(customUser);

                resp.status(200).json({message:"User Login Successfully",accessToken:token})
            }
        } catch (error) {
            resp.status(404).json({message:"this Email is not assiocate with any account "})
        }

    } catch (error) {
        resp.status(500).json({message:"Internal Server Error"})
    }
}