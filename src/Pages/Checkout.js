import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import ScrollToTop from "../Components/Scroll";
const Checkout = () => {
  return (
    <>
    <ScrollToTop />
      <div className="checkout-warapper py-5 home-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xxl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
              <div className="checkout-left-data">
                <h3 className="website-name">ShopHouse</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark total-price">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Information
                    </li>{" "}
                    &nbsp;/
                    <li className="breadcrumb-item total-price">Shipping</li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>{" "}
                    &nbsp;/
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details total">
                  Moahamed Rageh (abdelhady412rageh@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select className="form-control form-select" name="" id="">
                      <option value="">select country</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Addres"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Apartment, suite, etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control">
                      <option value="">Select State</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zipcode"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" />
                        Return To Cart
                      </Link>
                      <Link to="/product" className="button">
                        Continue to shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="border-bottom py-4">
                <div className="d-flex mb-2 align-items-center gap-10">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img className="img-fluid" src={watch} alt="" />
                    </div>
                    <div>
                      <h5 className="total-price">dddd</h5>
                      <p className="total-price">swss</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total-price">$100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$100</p>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$100</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4 clas">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$100</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
