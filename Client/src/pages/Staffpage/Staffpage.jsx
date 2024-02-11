import React, { useEffect } from "react";
import "./Staffpage.scss";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetUserById, PendingUsers } from "../../components/redux/action/user";
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";



const Staffpage = () => {

 const { isAuthenticated} = useSelector(
    (state) => state.user
  );

  const dispatch=useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(PendingUsers());
    }
  }, [dispatch, isAuthenticated]);
  const {pendingusers } = useSelector(
    (state) => state.user
  );
  const SendID=async(id)=>{

     await dispatch(GetUserById(id))
  }
  
  return (
    <>
      <div className="card-wrap">
        <h2>
          You have <span>x</span> responses to acknowledge
        </h2>
        

        

        <div>

{pendingusers && pendingusers.map((item, index) => {

   return(
    

        <div className="card">
    <div className="card1">
      <h4 className="id">{item.name}</h4>
      <h4 className="date">{item.email}</h4>
      <h4 className="name">{new Date(item.createdAt).getDate()+'/'+new Date(item.createdAt).getMonth()+'/'+new Date(item.createdAt).getFullYear()}</h4>
      <div className="status fail">
        <h4>Pending</h4>
      </div>
    </div>
   <Link to={'/checkinfo'} onClick={()=>SendID(item._id)} >
    <div className="logo">
      <MdOutlineDoubleArrow />
    </div>
    </Link>
  </div>

 
   )
            
          })

        } 
   </div>
   </div>
    </>
  );
};

export default Staffpage;
