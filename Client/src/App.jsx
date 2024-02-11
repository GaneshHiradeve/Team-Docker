import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Loginform from "./components/Loginform/Loginform";
import Registrationform from "./components/Registrationform/Registrationform";
import Homepage from "./pages/Homepage/Homepage";
import Staffpage from "./pages/Staffpage/Staffpage";
import Chat from "./components/Chat/Chat";
import Profile from "./components/Profile/Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoute } from "protected-route-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userProfile } from "./components/redux/action/user";
import Userinfo from "./components/Userinfo/Userinfo";
import Post from "./components/Post/Post";
import Postpage from "./pages/Postpage/Postpage";
import UserDetails from "./pages/UserDetails/UserDetails";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, message, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch({ type: "cleanMessage" });
    }

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch({ type: "cleanError" });
    }
  }, [dispatch, message, error, toast]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userProfile());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/home">
              <Loginform />
            </ProtectedRoute>
          }
        />

        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/register" element={<Registrationform />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/home">
              <Loginform />
            </ProtectedRoute>
          }
        />

        <Route path="/staff" element={<Staffpage />} />

        {/* <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/home">
              <Loginform />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Loginform />
            </ProtectedRoute>
          }
        />

        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Registrationform />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/login">
              <Homepage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/check"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Staffpage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkinfo"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Userinfo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/post"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Postpage />
            </ProtectedRoute>
          }
        />

<Route
          path="/onclickshow"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserDetails/>
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
