import React from "react";
import "./Loginform.scss";
import imgStuds from "../../images/students_09.jpg";
import { useState } from "react";
import { userLogin } from "../redux/action/user";
import { useDispatch } from "react-redux";


const Loginform = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const LoginFormHandler=(e)=>{
         e.preventDefault();

         dispatch(userLogin(email,password))
  }
  return (
    <div className="wrapper">
      <section class="container">
        <header>Login Form</header>
        <form action="#" class="form" onSubmit={LoginFormHandler}>
          <div class="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required 

                 value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="input-box">
            <label>Enter Password</label>
            <input type="password" placeholder="Enter Password" required 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button class="btn" type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Loginform;
