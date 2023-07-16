import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout, register } from "../RTK/Slices.js/authSlice";
const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    const getUser = JSON.parse(localStorage.getItem("user"))
    if(formData.email===getUser.email && formData.password===getUser.password){
      localStorage.setItem("isloggedin", true)
      navigate("/")
    }else{
      toast.error('wrong password or email !', {
        position: toast.POSITION.TOP_CENTER
    });
    }
  };
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrum title="Login" />
      <ToastContainer />
      <div className="login-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Login</h3>

                <form className="d-flex flex-column gap-30" action="">
                  <div>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={formData.email}
                      name="email"
                      placeholder="email"
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={formData.password}
                      name="password"
                      placeholder="password"
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                      <button
                        onClick={handleLogIn}
                        type="button"
                        className="button border-0"
                      >
                        Login
                      </button>
                      <Link to="/sign-up" className="button signup">
                        SignUp
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
