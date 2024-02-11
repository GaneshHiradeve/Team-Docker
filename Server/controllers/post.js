import { all } from "axios";
import { catchAsyncError } from "../middleware/Catcherror.js";
import { getDataUri } from "../middleware/Fileuri.js";
import { Post } from "../models/post.js";
import logger from "../utils/logger.js";
import cloudinary from 'cloudinary'
import { User } from "../models/user.js";

export const CreatePost=catchAsyncError(async (req,res,next)=>{
  
    logger.info(`UserController | Adding Post in progress for user.`);
  
           const { content} =req.body;
  
           let author=req.user._id;

           const usertdata=await User.findById(author);

           let username=usertdata.name;
           
  
           if( !content ){
       
            return res.status(200).json({
              message: "Input Required",
              status: true,
            });
          }
  
          let file=req.file;

          
          
          if(!file){
       
            return res.status(200).json({
              message: "Input Required",
              status: true,
            });
          }
  
           const fileUri=getDataUri(file);
  
           const cloudSecret = await cloudinary.v2.uploader.upload(fileUri.content, {
             folder: process.env.CLOUDINARY_AVATAR_PATH,
           });
         
          let postImg=cloudSecret.secure_url;
  
           const newpost=await Post.create({
               content,
               author,
               username,
               postImg
            
         })
  
  
           res.status(201).json({
            message:"Post Created Successfully",
            status:true
           })

           logger.info(`UserController | Post Created Successfully.`);

  })


  
export const getallUserPost = catchAsyncError(async (req, res) => {
  const id = req.user._id;

  const userpost = await Post.find({ user: id });

  res.status(201).json({
    message: "get all post",
    userpost: userpost,
  });
});


export const upVote = async (req, res) => {


  const { id } = req.body;

  const post = await Post.findById(id);

  post.upvotes = post.upvotes + 1;

  await post.save();

  

  res.status(201).json({
    message:"Upvote added"
  });
};

export const downVote = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  post.upvotes = post.upvotes - 1;

  await post.save();
  res.status(201).json({
    post: post,
  });
};

export const getallPost = async (req, res) => {
  const allpost = await Post.find({}).sort({ likes: -1 });
  res.status(201).json({
    success: true,
    allpost: allpost,
  });
};


export const countLike = async (req, res) => {
  const id = req.params.id;
  const uid = req.user._id;

  const post = await Post.findById(id);

  const check = await post.likes.includes(uid);
  if (!check) {
    post.likes.push(uid);

    await post.save();

    res.status(200).json({
      message: "like done",
      like1: 1,
      totallength: post.likes.length,
    });
  } else {
    post.likes.pop(uid);

    await post.save();

    res.status(200).json({
      message: "like remove",
      like1: 0,
      totallength: post.likes.length,
    });
  }
};


