import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { addToCart } from "../RTK/Slices.js/CartSlice";
import ReactStars from "react-rating-stars-component";
import { formatPrice } from "../Utilts.js/formatPrice";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  removeFromFavorite,
  clearFavorite,
  subTotal,
} from "../RTK/Slices.js/favoriteSlice";
import { ToastContainer } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";

import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const FavoriteWishlist = () => {
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subTotal());
  }, [favorite, dispatch]);

  return (
    <>
      <ToastContainer />
      <Meta title={"Favorite-wishlist"} />
      <BreadCrum title="Favorite-wishlist" />
      <div className="wishlist-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {favoriteItems.length > 0 ? (
              <>
                <div className="row mb-5">
                  <button
                    onClick={() => dispatch(clearFavorite())}
                    className="button "
                  >
                    Clear All Favorite
                  </button>
                </div>
                {favoriteItems.map((item) => {
                  return (
                    <>
                      <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-5 col-sm-8 col-xs-10 mx-3 mb-5">
                        <div className="d-flex w-100 h-100 flex-column justify-content-between">
                          <h6
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch(removeFromFavorite(item))}
                            className="bg-danger p-2 text-center text-white"
                          >
                            Remove
                          </h6>

                          <Link
                            to={`/product/${item?.id}`}
                            key={item?.id}
                            className="product-card position-relative"
                          >
                            <div
                              style={{ height: "200px" }}
                              className="product-img mb-2 me-2"
                            >
                              <img
                                style={{ height: "200px" }}
                                className="img-fluid w-100 h-100"
                                src={item?.images[0]}
                                alt=""
                              />
                              <img
                                className="img-fluid w-100 h-100"
                                src={item?.images[1]}
                                alt=""
                              />
                            </div>
                            <div className="product-details">
                              <h6 className="brand">{item?.brand}</h6>
                              <h5 className="product-title">{item?.title}</h5>
                              <ReactStars
                                count={5}
                                value={3}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                              />

                              <p className="price text-dark">
                                {formatPrice(item?.price)}
                              </p>
                              <span className="new-price text-success">
                                {formatPrice(item?.discountedPrice)}
                              </span>
                              <span className="text-primary">
                                ({item?.discountedPercentage}% Off)
                              </span>
                            </div>
                            <div className="action-bar position-absolute">
                              <div className="d-flex flex-column gap-15">
                                <Link>
                                  <img src={addcart} alt="" />
                                </Link>
                                <Link>
                                  <img src={view} alt="" />
                                </Link>
                                <Link>
                                  <img
                                    to="/compare-product"
                                    src={prodcompare}
                                    alt=""
                                  />
                                </Link>
                              </div>
                            </div>
                          </Link>
                          <button
                            onClick={() => dispatch(addToCart(item))}
                            className="button mt-2"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      {/* <div className="col-3">
                        <div className="wishlist-card">
                          <ImCross onClick={() => dispatch(removeFromFavorite(item))}/>
                          
                          <div className="wishlist-card-img">
                            <img
                              className="img-fluid w-100"
                              src={item.images[0]}
                              alt=""
                            />
                            <div className="py-3 px-3">
                              <h5 className="title">{item.description}</h5>
                              <h6 className="Price">${item.price}</h6>
                            </div>
                          </div>
                        </div>
                      </div> */}
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
                          src="images/EmptyFavorite.png"
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

            {/* <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="wishlist-card-img">
                  <img
                    className="img-fluid w-100"
                    src="images/watch.jpg"
                    alt=""
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="Price">$100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="wishlist-card-img">
                  <img
                    className="img-fluid w-100"
                    src="images/watch.jpg"
                    alt=""
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="Price">$100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross"
                />
                <div className="wishlist-card-img">
                  <img
                    className="img-fluid w-100"
                    src="images/watch.jpg"
                    alt=""
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Honor T1 7.0.1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="Price">$100</h6>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteWishlist;
