import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
 
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username:{
     type:String,
     required:true
  },
  postImg:{
    type:String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  upvotes: {
    type: Number,
    default: 0
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
   Comments:[{
       message: {
          type:String
       }
    }
   ]

});

export const Post = mongoose.model('Post', postSchema);


