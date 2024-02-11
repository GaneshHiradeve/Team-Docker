import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import logger from "../utils/logger.js";
import { User } from "../models/user.js";
export const isAuthenticated=async(req,res,next)=>{
 

    logger.info(`AuthMiddleware |  User Authentication in progress for user.`);

    const { token } = req.cookies;
    if (!token) {
     
        return next(new ErrorHandler("Login First", 400));

    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
 
    req.user = await User.findById(decoded._id);
   
  
    logger.info(`AuthMiddleware |  User Authentication in completed for user.`);

    next();
    
}