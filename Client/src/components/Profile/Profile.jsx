import React from "react";
import "./Profile.scss";
// import image from "./Profile-img.jpeg";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useSelector } from "react-redux";
// import {collegeImage} from "../../images/collegeImage"
const Profile = (props) => {

  const { user,isAuthenticated } = useSelector(
    (state) => state.user
  );

  return (
    // <ContentWrapper>
    <div className="body">
      <div className="flex">
        <div className="prof-image">
          <img src={isAuthenticated  && user.file} alt="Nothing" />
        </div>
        <div className="div">
          <div className="sides">
            <div className="info">
            <h3 className="field email">Name:{isAuthenticated && user.name}</h3>
              <h3 className="field email">Email:{isAuthenticated && user.email} </h3>
              <h3 className="field email">PhoneNumber: {isAuthenticated && user.phonenumber}</h3>
              <h3 className="field email">DOB: {isAuthenticated && user.dob}</h3>
              <h3 className="field email">Department: {isAuthenticated && user.department}</h3>
              <h3 className="field email">Role: {isAuthenticated && user.role}</h3>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn">Actions</button>
          <div class="dropdown-content">
            <a href="#">Edit Your Profile</a>
            <a href="#">Change Password</a>
            <a href="/post">Posts</a>

           
            {
               isAuthenticated && user.role=='student' ?(<><a href="#">Switch Account</a></>):(<></>)
            }
            {
               isAuthenticated && user.role=='staff' ?(<><a href="/check">Check Status</a></>):(<></>)
            }
            
          </div>
        </div>
      </div>
    </div>
    // </ContentWrapper>
  );
};

export default Profile;