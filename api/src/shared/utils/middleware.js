import { decodeJWT } from "./JWTUtils.js";


export const ensureAuthentication = (req,resp,next) =>{
    try {
        const accessToken = req.headers.authorization;
        if(!accessToken){
            throw new Error("No Access Token Found!! Please Login")
        }
     const user =  decodeJWT(accessToken);
     req.decoded =  user;
        next();
    } catch (error) {
       resp.status(403).json({message:error.message.toString()}) 
    }
}

// is admin or not
export const ensureAuthorization = (req,resp,next)=>{
    try {
        const {role,userId}  = req.decoded;
        if(role === 'admin'){
            next();
        }else{
            throw new Error('Your are Not A Admin')
        }
       
    } catch (error) {
        resp.status(403).json({message:error.message.toString()}) 
    }
}