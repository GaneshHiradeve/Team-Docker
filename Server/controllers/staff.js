import { catchAsyncError } from "../middleware/Catcherror.js"
import { User } from "../models/user.js"
import { sendemailReg } from "../utils/sendmailReg.js";


export const GetAllStudents=catchAsyncError(async(req,res,next)=>{

     

    const pendingusers = await User.find({ status: "pending", role: { $ne: "staff" } });

     res.status(200).json({
        pendingusers:pendingusers,
        success: true,
     })

})

export const getStudentByEmail = catchAsyncError(async (req, res) => {
    const { id } = req.params;

    const student = await User.findById(id);

    if (!student) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }

    res.status(200).json({
        success: true,
        student: student
    });
});


export const ConfirmUser = catchAsyncError(async (req, res,next) => {
    const { id } = req.body;


    const student = await User.findById(id);
    if (!student) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }
    student.status="Completed";
    await student.save();

    
     await sendemailReg(student,"Registration Approved")

    res.status(200).json({
        success: true,
        message:"Application Approved"
    });
});


export const UserReject = catchAsyncError(async (req, res) => {

    const { id } = req.body;

    const student = await User.findById(id);

    if (!student) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }

    await User.deleteOne(student);

    res.status(200).json({
        success: true,
        message:"Application Rejected"
    });
});