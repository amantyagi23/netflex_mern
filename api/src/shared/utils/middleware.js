import { decodeJWT } from "./JWTUtils.js";


export const ensureAuthentication = (req,resp,next) =>{
    try {
        const accessToken = req.headers.authorization;
        if(!accessToken){
            throw new Error("No Access Token Found!! Please Login")
        }
        console.log(decodeJWT(accessToken))
        next();
    } catch (error) {
       resp.status(403).json({message:error.message.toString()}) 
    }
}


export const ensureAuthorization = (req,resp,next)=>{

}