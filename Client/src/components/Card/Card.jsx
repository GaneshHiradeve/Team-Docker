import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./Card.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {

  const {pendingusers } = useSelector(
    (state) => state.user
  );

  console.log(pendingusers)
  return (
   <div>

{pendingusers && pendingusers.map((item, index) => {

   return(
      <>
   <div className="card">
    <div className="card1">
      <h4 className="id">{item.name}</h4>
      <h4 className="date">{item.email}</h4>
      <h4 className="name">{new Date(item.createdAt).getDate()+'/'+new Date(item.createdAt).getMonth()+'/'+new Date(item.createdAt).getFullYear()}</h4>
      <div className="status fail">
        <h4>Pending</h4>
      </div>
    </div>
   <Link to={'/checkinfo'} >
    <div className="logo">
      <MdOutlineDoubleArrow />
    </div>
    </Link>
  </div>
      </>
   )
            
          })

        } 
   </div>
    

 
   
  );
};

export default Card;
