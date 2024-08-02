


export const createUserController = (req,resp)=>{
    try {

        resp.status(200).json({message:"in create user controller"})
        
    } catch (error) {
        resp.status(500).json({message:"Internal Server Error"})
    }
}

