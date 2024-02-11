import jwt from "jsonwebtoken";
import logger from "./logger.js";
import { catchAsyncError } from "../middleware/Catcherror.js";


export const sendToken=catchAsyncError(async(res,user)=>{
 
    logger.info(`SendToekn |  Sending token.`);

     
    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);

  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      user: user,
      message: "user login successfully",
    });
});