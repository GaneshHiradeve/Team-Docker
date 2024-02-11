import React from "react";
import "./Userinfo.scss";
// import image from "./Profile-img.jpeg"
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { UserConfirm, UserReject } from "../redux/action/user";
import { Link, redirect } from "react-router-dom";
// import {collegeImage} from "../../images/collegeImage"
import { useNavigate } from "react-router-dom";


const Userinfo = (props) => {

    const {student} = useSelector(
        (state) => state.user
      );
   const navigate=useNavigate()
      const dispatch=useDispatch();

    const ConfirmHandler=async(id)=>{
         
       await dispatch(UserConfirm(id))
        navigate('/check')

    }

    const RejectHandler=async(e)=>{
        e.preventDefault();

       await dispatch(UserReject(student._id))
       navigate('/check')
   }
    return (
        // <ContentWrapper>
        <div className="body">
            <div className="flex">
                <div className="div">
                    <h1>{student.name}</h1>
                    <div className="sides">
                        <div className="info">
                            <h3 className="field email">Email:{student && student.email} </h3>
                            <h3 className="field dob">Phone:{student && student.phonenumber} </h3>
                            <h3 className="field dob">Date of Birth:{student && student.dob} </h3>
                            <h3 className="field dob">Gender: {student && student.gender}</h3>
                            <h3 className="field dob">Department:{student && student.department}</h3>
                            <h3 className="field dob">Role: {student && student.role}</h3>
                            <h3 className="field dob">CreatedAt: {new Date(student.createdAt).getDate()+'/'+new Date(student.createdAt).getMonth()+'/'+new Date(student.createdAt).getFullYear()} </h3>
                        </div>
                    </div>
                </div>
                <div className="prof-image">
                <img src={student.file} alt="Nothing" />
            </div>
            </div>
            <div className="butDiv">
          
            <button className="btn" onClick={()=>ConfirmHandler(student._id)}>Confirm</button>
          
         
            <button className="btn" onClick={RejectHandler}>Reject</button>
        
        </div>
        </div>
        // </ContentWrapper>
    );
};

export default Userinfo;