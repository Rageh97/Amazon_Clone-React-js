import React from "react";
import BreadCrum from "../Components/BreadCrum";
import Colors from "../Components/Colors";
import Meta from "../Components/Meta";
import { useDispatch, useSelector } from "react-redux";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import {
  removeFromCompare,
  clearCompare,
} from "../RTK/Slices.js/compareProductSlice";
import { ToastContainer } from "react-toastify";
const CompareProduct = () => {
  const dispatch = useDispatch();
  const compareProduct = useSelector((state) => state.compare.compareItems);
  return (
    <>
    <ToastContainer/>
      <Meta title={"Compare-products"} />
      <BreadCrum title="Compare-products" />
      <div className="compare-product home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {compareProduct.length > 0 ? (
              <>
               <div className="row mb-5">
                <button
                  onClick={() => dispatch(clearCompare())}
                  className="button "
                >
                  Clear All Products
                </button>
                </div>
                {compareProduct.map((item) => {
                  return (
                    <>
                      <div className="col-3 mb-3">
                        <div className="position-relative compare-product-card">
                          <img onClick={() => dispatch(removeFromCompare(item))}
                            src="images/cross.svg"
                            alt=""
                            className="position-absolute cross"
                          />
                          <div  className="product-card-img">
                            <img className="img-fluid mb-2" src={item.images[0]} alt="" />
                          </div>
                          <div className="compare-product-details">
                            <h5 className="title">
                            {item.description}
                            </h5>
                            <h6 className="price mb-3 mt-3">${item.price}</h6>
                            <div>
                              <div className="product-detail">
                                <h5>Brand: {item.brand}</h5>
                                <p>{item.title}</p>
                              </div>
                              <div className="product-detail">
                                <h5>Type: {item.category}</h5>
                                <p>{item.title}</p>
                              </div>
                              <div className="product-detail">
                                <h5>Avilablity:</h5>
                                <p>In stock: {item.stock}</p>
                              </div>
                              <div className="product-detail">
                                <h5>color:</h5>
                                <Colors />
                              </div>
                              <div className="product-detail">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                  <p>S</p>
                                  <p>M</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <>
                {" "}
                <div className="container ">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                      <div>
                        <img
                          className="img-fluid w-50 h-50"
                          src="images/EmptyCompare.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <div>
                        <Link
                          className="d-flex bg-primary p-2 text-white gap-10 justify-content-center align-items-center"
                          to="/"
                        >
                          <BsFillArrowLeftCircleFill />{" "}
                          <p className="mb-0">Go Back To Shipping</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
