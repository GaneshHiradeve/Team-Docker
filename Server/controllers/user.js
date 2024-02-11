import { catchAsyncError } from "../middleware/Catcherror.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import logger from "../utils/logger.js";
import { sendToken } from "../utils/sendToken.js";
import bcrypt from "bcrypt";
import { sendemail } from "../utils/sendmail.js";
import { getDataUri } from "../middleware/Fileuri.js";
import cloudinary from "cloudinary";


export const Register = catchAsyncError(async (req, res, next) => {
  logger.info(`Controllers |  User Registration in progress for user.`);

  let { name, email, phonenumber, dob, gender, password,role,department } = req.body;

   if(!name || !email || !phonenumber || !dob || !gender || !password ){
      return next(new ErrorHandler("Input Field Required", 400));

   }

   if(email.includes("@sggs.ac.in")==false){
    return next(new ErrorHandler("Email is not Valid.", 400));

   }

  if (password.length < 8) {
    return next(new ErrorHandler("Password is too short.", 400));
  }

  let user = await User.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User Already Exit", 400));
  }

  password = await bcrypt.hash(password, 10);

 

  let file=req.file;



  if (!file) {
    return res.status(200).json({
      message: "Input Required",
      status: true,
    });
  }

  const fileUri = getDataUri(file);

  

  const cloudSecret = await cloudinary.v2.uploader.upload(fileUri.content, {
    folder: process.env.CLOUDINARY_AVATAR_PATH,
  });

 file = cloudSecret.secure_url;



  user = await User.create({
    name,
    email,
    phonenumber,
    dob,
    gender,
    password,
    file,
    role,
    department
  });

 // set mail after this
  await sendemail(user,"mail")


  res.status(200).json({
    message:"Registration Initiated"
  })

  
  logger.info(`Controllers |  User Registration in Completed.`);
});

export const Login = catchAsyncError(async (req, res, next) => {
  logger.info(`UserController | User login in progress for user.`);

  const { email, password } = req.body;

  

  let user = await User.findOne({ email });

  

  if (!user) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  // console.log(user)

  if(user.role!="staff"){

  if(user.status=="pending" ){
    return next(new ErrorHandler("Your Registration not completed yet.", 400));

  }}

  const check = await bcrypt.compare(password, user.password);

  if (!check) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  sendToken(res, user);

  logger.info(`UserController |  User login was successful for user.`);
});

export const Logout = catchAsyncError((req, res) => {
  logger.info(`UserController |  User logout in progress for user.`);

  res
    .status(201)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "user logout successfully",
    });
  logger.info(`UserController |  User logout was successful for user.`);
});

export const Profile = catchAsyncError((req, res) => {
  logger.info(`UserController | get profile in progress for user.`);

  res.status(200).json({
    success: true,
    user: req.user,
  });
  logger.info(`UserController | get profile was successful for user.`);
});

export const UpdateProfile = catchAsyncError(async (req, res, next) => {
  logger.info(`UserController |  User profile update in progress for user.`);

  const name = req.body.name;
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorHandler("User not exits.", 400));
    }

    user.name = name;

    await user.save();

    res.status(201).json({
      success: true,
      message: "profile updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
  logger.info(`UserController |  User profile update was successful for user.`);
});

export const ChangePassword = catchAsyncError(async (req, res, next) => {
  logger.info(`UserController |  User changepassword in progress for user.`);

  const id = req.params.id;
  const newpassword = req.body.newpassword;
  const confirmpassword = req.body.confirmpassword;

  if (newpassword !== confirmpassword) {
    return next(new ErrorHandler("password not matched.", 400));
  }

  const password = await bcrypt.hash(newpassword, 10);

  const user = await User.findById(id);

  await User.findOneAndUpdate(
    { _id: id },
    { $set: { password: password } }
  );

  user.save();

  res.status(201).json({
    success: true,
    user: user,
    message: "password updated successfully",
  });
  logger.info(
    `UserController |  User changepassword  was successful for user.`
  );
});


export const OnclickShow=catchAsyncError(async(req,res)=>{

  
      
        let {id}=req.params;

        const onclickuser=await User.findById(id);

      
        res.status(200).json({
          onclickuser:onclickuser,
           status:true

        })
        
      
})