import { catchAsyncError } from "../middleware/Catcherror";
import { Post } from "../models/post";


export const CreatePost=catchAsyncError(async()=>{

     let {title,description}=req.body;

     let file=req.file;

    
     let postImg;
     const post=await Post.create({
        title,
        description,
        postImg
     })


     

})