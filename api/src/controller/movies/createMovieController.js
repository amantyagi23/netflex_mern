

export const createMovieController = (req,resp)=>{
    try {
        // data validate - zod 
        // in database validate - name exist 
        // save 
        resp.status(201).json({message:"Movie Created Successfully"})
    } catch (error) {
        resp.status(500).json({message:"Internal Server Error"})
    }
}