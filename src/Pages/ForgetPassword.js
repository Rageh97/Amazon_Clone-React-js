import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrum title="Forgot Password" />
      <div className="login-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center my-3 mb-3">
                    We will send you an email to reset your password
                </p>

                <form className="d-flex flex-column gap-30" action="">
                  <div>
                    <input
                      placeholder="email"
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <div>
                   
                  </div>
                  <div>
                  
                    <div className="mt-3 d-flex flex-column align-items-center justify-content-center gap-15">
                      <button className="button border-0" type="submit">Submit</button>

                      <Link to="/log-in">Cancel</Link>
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

export default ForgetPassword;
