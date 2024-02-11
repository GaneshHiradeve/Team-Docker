import React, { useEffect } from "react";
import "./UserDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { OnclickShow } from "../../components/redux/action/user";
const UserDetails = (props) => {

    const { onclickuser} = useSelector(
        (state) => state.user
      );


  
    return (
        // <ContentWrapper>
        <div className="body">
            <div className="flex">
                <div className="div">
                    <h1>Anuj Thakare</h1>
                    <div className="sides">
                        <div className="info">
                            <h3 className="field email">Name:{onclickuser.name} </h3>
                            <h3 className="field dob">Email: {onclickuser.email}</h3>
                            <h3 className="field dob">DOB: {onclickuser.dob}</h3>
                            <h3 className="field dob">Department: {onclickuser.department}</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;