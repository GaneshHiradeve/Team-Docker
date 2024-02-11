import { server } from '../reducer/userReducer.js';

import axios from 'axios';

export const userLogin = (email,password) => async dispatch => {
  try {
    dispatch({ type: 'userloginRequest' });

    const { data } = await axios.post(`${server}/login`, {email,password}, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: 'userloginSuccess', payload: data });
  } catch (err) {
    console.log("vercel not working",server)
    dispatch({ type: 'userloginFail', payload: err.response.data.message});
  }
};

export const userRegister =(formData) => async dispatch => {
    try {
      dispatch({ type: 'userRegisterRequest' });

    
      const { data } = await axios.post(`${server}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      dispatch({ type: 'userRegisterSuccess', payload: data });
    } catch (err) {
      dispatch({
        type: 'userRegisterFail',
        payload: err.response.data.message
      });
    }
  };

export const userProfile = () => async dispatch => {
  try {
    dispatch({ type: 'getuserprofile' });

    const { data } = await axios.get(`${server}/profile`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    dispatch({ type: 'getuserprofileSuccess', payload: data.user });
  } catch (err) {
    dispatch({
      type: 'getuserprofileFail',
      payload: err.response.data.message,
    });
  }
};

export const userLogout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutuser' });

    const { data } = await axios.get(`${server}/logout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'logoutuserSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'logoutuserFail', payload: err.response.data.message });
  }
};

export const PendingUsers=() => async dispatch => {

  try {
    dispatch({ type: 'pendinguser' });

    const { data } = await axios.get(`${server}/confirm`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'pendinguserSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'pendinguserFail', payload: err.response.data.message });
  }
}


export const GetUserById=(id) => async dispatch => {

  try {
    dispatch({ type: 'getuseridRequest' });

    const { data } = await axios.get(`${server}/getuserdata/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'getuseridSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'getuseridFail', payload: err.response.data.message });
  }
}

export const UserConfirm=(id) => async dispatch => {

  try {
    dispatch({ type: 'userconfirmRequest' });

    const { data } = await axios.post(`${server}/confirmuser`,{id}, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'userconfirmSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'userconfirmFail', payload: err.response.data.message });
  }
}

export const UserReject=(id) => async dispatch => {

  try {
    dispatch({ type: 'userrejectReject' });

    const { data } = await axios.post(`${server}/rejectuser`,{id}, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'userrejectSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'userrejectFail', payload: err.response.data.message });
  }
}



export const CreatePost=(formData) => async dispatch => {

  try {
    dispatch({ type: 'createpostRequest' });


    const { data } = await axios.post(`${server}/createpost`, formData , {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({ type: 'createpostSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'createpostFail', payload: err.response.data.message });
  }
}


export const GetAllPost=() => async dispatch => {

  try {
    dispatch({ type: 'getallpostRequest' });


    const { data } = await axios.get(`${server}/getallpost`,{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'getallpostSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'getallpostFail', payload: err.response.data.message });
  }
}



export const OnclickShow=(id) => async dispatch => {

  try {
    dispatch({ type: 'onclickshowRequest' });


    const { data } = await axios.get(`${server}/onclickshow/${id}`,{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'onclickshowSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'onclickshowFail', payload: err.response.data.message });
  }
}


export const Upvote=(id) => async dispatch => {

  try {
    dispatch({ type: 'upvoteRequest' });


    const { data } = await axios.post(`${server}/upvote`,{id},{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'upvoteSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'upvoteFail', payload: err.response.data.message });
  }
}


export const Addcomments=(id,message) => async dispatch => {

  try {
    dispatch({ type: 'addcommentRequest' });


    const { data } = await axios.post(`${server}/upvote`,{id,message},{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    dispatch({ type: 'addcommentSuccess', payload: data });
  } catch (err) {
    dispatch({ type: 'addcommentFail', payload: err.response.data.message });
  }
}















export const changePassword=(newpassword)=>async(dispatch)=>{
     
  try{
           dispatch({type:"changepasswordRequest"});

           const {data}=await axios.put(`${server}/changepassword`,{
              newpassword
           },{
               headers:{
                      "Content-Type":"application/json",
               },
               withCredentials:true,
           })
        dispatch({type:"changepasswordSuccess",payload:data})
  }catch(err){
   dispatch({type:'changepasswordFail',payload:err.response.data.message})

  }
}

