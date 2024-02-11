import express from 'express';
import { Login, Logout, OnclickShow, Profile, Register } from '../controllers/user.js';
import { isAuthenticated } from '../middleware/Auth.js';
import { singleUpload } from '../middleware/multer.js';
import { ConfirmUser, GetAllStudents, UserReject, getStudentByEmail } from '../controllers/staff.js';



const router=express.Router();


router.route('/register').post(singleUpload,Register); //single upload

router.route('/login').post(Login)

router.route('/logout').get(Logout)


router.route('/profile').get(isAuthenticated,Profile)

router.route('/confirm').get(isAuthenticated,GetAllStudents)

router.route('/getuserdata/:id').get(isAuthenticated,getStudentByEmail)
                        

router.route('/confirmuser').post(isAuthenticated,ConfirmUser)

router.route('/rejectuser').post(isAuthenticated,UserReject)

router.route('/onclickshow/:id').get(isAuthenticated,OnclickShow)






export default router;




