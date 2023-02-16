import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.mobile === ""
    ) {
      toast.error("please fill all data !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/log-in");
    }
  };
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrum title="Sign Up" />
      <ToastContainer />
      <div className="login-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Sign Up</h3>

                <form className="d-flex flex-column gap-30" action="">
                  <div>
                    <input
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={formData.name}
                      name="name"
                      placeholder="Name"
                      type="text"
                      className="form-control"
                      required
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
                      value={formData.email}
                      name="email"
                      placeholder="email"
                      type="email"
                      className="form-control"
                      required
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
                      required
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
                      value={formData.mobile}
                      name="mobile"
                      placeholder="mobile number"
                      type="tel"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                      <button
                        type="submit"
                        onClick={handleSignUp}
                        className="button border-0"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    Already have account{" "}
                    <Link className="mx-2 text-primary" to="/log-in">
                      Sign in
                    </Link>
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

export default SignUp;
