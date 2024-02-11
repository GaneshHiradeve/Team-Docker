import { createReducer } from "@reduxjs/toolkit";

export const server = "http://localhost:8000";

export const userReducer = createReducer(
  {},
  {
    userloginRequest: (state) => {
      state.loading = true;
    },
    userloginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    userloginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    userforgotpassword: (state) => {
      state.loading = true;
    },
    userforgotpasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    userforgotpasswordFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },

    userresetpassword: (state) => {
      state.loading = true;
    },
    userresetpasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    userresetpasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getuserprofile: (state) => {
      state.loading = true;
    },
    getuserprofileSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    getuserprofileFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutuser: (state) => {
      state.loading = true;
    },

    logoutuserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload.message;
    },
    logoutuserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
    userRegisterRequest: (state) => {
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
    },
    userRegisterFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    pendinguserRequest: (state) => {
      state.loading = true;
    },
    pendinguserSuccess: (state, action) => {
      state.loading = false;
      state.pendingusers = action.payload.pendingusers;
    },
    pendinguserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getuseridRequest: (state) => {
      state.loading = true;
    },
    getuseridSuccess: (state, action) => {
      state.loading = false;
      state.student = action.payload.student;
    },
    getuseridFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    userconfirmRequest: (state) => {
      state.loading = true;
    },
    userconfirmSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    userconfirmFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    userrejectRequest: (state) => {
      state.loading = true;
    },
    userrejectSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    userrejectFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createpostRequest: (state) => {
      state.loading = true;
    },
    createpostSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createpostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getallpostRequest: (state) => {
      state.loading = true;
    },
    getallpostSuccess: (state, action) => {
      state.loading = false;
      state.allpost = action.payload.allpost;
    },
    getallpostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    onclickshowRequest: (state) => {
      state.loading = true;
    },
    onclickshowSuccess: (state, action) => {
      state.loading = false;
      state.onclickuser = action.payload.onclickuser;
    },
    onclickshowFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    upvoteRequest: (state) => {
      state.loading = true;
    },
    upvoteSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    upvoteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addcommentRequest: (state) => {
      state.loading = true;
    },
    addcommentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addcommentFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  
    cleanError: (state) => {
      state.error = null;
    },

    cleanMessage: (state) => {
      state.message = null;
    },
  }
);
