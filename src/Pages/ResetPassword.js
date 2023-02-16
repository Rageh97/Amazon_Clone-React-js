import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrum title="Reset Password" />
      <div className="login-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Reset Password</h3>

                <form className="d-flex flex-column gap-30" action="">
                  <div>
                    <input
                      placeholder="password"
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Confirm password"
                      type="password"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                      <button className="button border-0">OK</button>
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

export default ResetPassword;
