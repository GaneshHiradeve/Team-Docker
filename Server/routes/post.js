import express from 'express'
import { isAuthenticated } from '../middleware/Auth.js';
import { CreatePost, countLike, downVote, getallPost, upVote } from '../controllers/post.js';
import { singleUpload } from '../middleware/multer.js';



const postrouter=express.Router();


postrouter.route("/createpost").post(isAuthenticated,singleUpload,CreatePost);

postrouter.route("/getallpost").get(isAuthenticated,getallPost)

postrouter.route("/upvote").post(isAuthenticated,upVote)

postrouter.route("/downvote/:id").put(isAuthenticated,downVote)

postrouter.get('/like/:id',isAuthenticated,countLike)








export default postrouter