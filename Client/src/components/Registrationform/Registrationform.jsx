import React, { useState } from "react";
import "./Registrationform.scss";
import instu from "./../../images/institution.jpg";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/action/user";
import { useNavigate } from "react-router-dom";

const Registrationform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState("");
  const [profile, setProfile] = useState("");
  const [role,setRole]=useState("student");
  const [department,setDepartment]=useState("cse");

  const navigate=useNavigate();

  const dispatch=useDispatch()
   
  const RegistrationHandler = (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name',name)
      formData.append('email',email)
      formData.append('phonenumber',phonenumber)
      formData.append('dob',dob)
      formData.append('gender',gender)
      formData.append('password',password)
      formData.append('file',file)
      formData.append('profile',profile)
      formData.append('role',role)

      formData.append('department',department)
      
    
      dispatch(userRegister(formData))
         

      navigate('/login')


   
  };
  const changeImageHandler = (e) => {
    const temp_file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(temp_file);
    reader.onloadend = () => {
      setFile(temp_file);
    };
  };

  const changeImageHandler1 = (e) => {
    const temp_file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(temp_file);
    reader.onloadend = () => {
      setProfile(temp_file);
    };
  };


  return (
    <div className="sidebar">
      <section class="container">
        <header>Register</header>
        <form action="#" class="form" onSubmit={RegistrationHandler}>
          <div class="input-box">
            <input
              type="text"
              placeholder="Enter full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="input-box">
            <input
              type="text"
              placeholder="Enter email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex">
          <div className="roles">
            <label for="role">Choose your role:</label>
            <select name="role" id="roles"
               value={role}
               onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          <div className="roles">
            <label for="role">Choose your Department:</label>
            <select name="role" id="roles"
               value={role}
               onChange={(e) => setRole(e.target.value)}
            >
              <option value="cse">CSE</option>
              <option value="it">IT</option>
              <option value="extc">EXTC</option>
            </select>
          </div>
          </div>
          <div class="column">
            <div class="input-box">
              <input
                type="text"
                placeholder="Enter phone number"
                required
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div class="input-box">
              <input
                type="date"
                placeholder="DOB"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div class="gender-box">
            <div class="gender-option">
              <div class="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  checked
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="check-male">male</label>
              </div>
              <div class="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />

                <label for="check-female">Female</label>
              </div>
            </div>
          </div>
          <div class="input-box">
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div class="select">
            Select id card to upload:
            <input
              type="file"
              name="fileToUpload"
              id="fileToUpload"
              onChange={changeImageHandler}
            />
          </div>
        
         
          <button class="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      {/* <div className="imgInstu">
        <img src={instu} className="imgIns" />
      </div> */}
    </div>
  );
};

export default Registrationform;
