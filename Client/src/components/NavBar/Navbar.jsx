import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/action/user";

const Navbar = () => {

  const { isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch=useDispatch();

  const LogoutHandler=async()=>{

       dispatch(userLogout())
  }

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <li class="fas fa-bars"></li>
        </label>
        <label class="logo">
          SGGS<span>IE&T</span>
        </label>
        {/* <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul> */}
        {
           isAuthenticated ? (<>
           <div className="butDiv">

           <Link to="/profile">
           <button className="btn">Profile</button>
           </Link>
           <button className="btn" onClick={LogoutHandler}>Logout</button>

           </div>
           </>):(<> <div className="butDiv">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn">SignUp</button>
          </Link>
        </div></>)
        }
       
      </nav>
    </div>
  );
};

export default Navbar;
