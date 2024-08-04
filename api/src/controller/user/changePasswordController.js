

export const changePasswordController = (req,resp)=>{
    try {
        resp.status(200).json({message:"in Password Change controller"})
        
    } catch (error) {
        resp.status(500).json({message:"Internal Server Error"})
    }
}