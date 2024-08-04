import jwt from 'jsonwebtoken'

export const secret = "213354tgfver65ytgfvcdw4r"

export const createJWTToken = (user) => {
    try {
        return jwt.sign(user,secret,{expiresIn:"30s"})
    } catch (error) {
        throw new Error("Error in generating token")
    }
} 


export const decodeJWT = (accessToken)=>{
    try {
        return jwt.verify(accessToken,secret)
    } catch (error) {
        throw new Error(error.message.toString())
    }
}