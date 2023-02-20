import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";

import Colors from "./../Components/Colors";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../Components/Scroll";
import {addToCart} from "../RTK/Slices.js/CartSlice"
import {addToFavorite} from "../RTK/Slices.js/favoriteSlice"
import {addToCompare} from "../RTK/Slices.js/compareProductSlice"
import {

  getSingleProduct,
  getSingleProductStatus,
  fetchSingleProduct,
} from "../RTK/Slices.js/productsSlice";
import { ToastContainer } from 'react-toastify';
const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getSingleProduct);
  const singleProductStatus = useSelector(getSingleProductStatus);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);


  return (
    <>
    <ToastContainer/>
      <ScrollToTop />
      <>
        <Meta title={product?.brand} />
        <BreadCrum title={product?.title} />
        <div className="main-product-wrapper py-5 home-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="main-product-img">
                  <div>
                    {/* <ReactImageZoom {...props} /> */}
                    <img
                      src={
                        product ? (product.images ? product.images[0] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="other-product-img d-flex flex-wrap gap-10">
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        product ? (product.images ? product.images[1] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        product ? (product.images ? product.images[2] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        product ? (product.images ? product.images[3] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid"
                      src={
                        product ? (product.images ? product.images[4] : "") : ""
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h3>{product?.description}.</h3>
                  </div>
                  <div className="border-bottom py-3">
                    <p className="price mt-3">${product?.price}</p>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={4.5}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0 text-success">
                        {product?.rating} stars
                      </p>
                      <p className="mb-0 t-review">(2 reviews)</p>
                    </div>
                    <a className="review-btn" href="#review">
                      write a review
                    </a>
                  </div>
                  <div className="border-bottom py-3">
                    <div className="d-flex my-2 gap-10 align-items-center">
                      <h3 className="produc-heddingt-hedding">Type :</h3>
                      <p className="product-data">{product?.title}</p>
                    </div>
                    <div className="d-flex my-2 gap-10 align-items-center">
                      <h3 className="product-hedding">Brand :</h3>
                      <p className="product-data">{product?.brand}</p>
                    </div>
                    <div className="d-flex my-2 gap-10 align-items-center">
                      <h3 className="product-hedding">Category :</h3>
                      <p className="product-data">{product?.category}</p>
                    </div>
                    <div className="d-flex my-2 gap-10 align-items-center">
                      <h3 className="product-hedding">Tags :</h3>
                      <p className="product-data">{product?.title}</p>
                    </div>
                    <div className="d-flex my-2 gap-10 align-items-center">
                      <h3 className="product-hedding">Availablity :</h3>
                      <p className="product-data">{product?.stock}</p>
                    </div>
                    <div className="d-flex flex-column mt-2 gap-10 mb-3">
                      <h3 className="product-hedding">Size :</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          S
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          M
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          XL
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          XXL
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-column my-2 gap-10">
                      <h3 className="product-hedding">Color :</h3>
                      <Colors />
                    </div>
                    <div className="d-flex align-items-center flex-row mt-2 mb-0 gap-10">
                      <h3 className="product-hedding">Quantity :</h3>
                      
                      <div className="d-flex row single-button-singleproduct single-button ms-5 justify-content-center align-items-center gap-15">
                        <button onClick={() => dispatch(addToCart(product))} type="submit" className="button border-0">
                          Add to cart
                        </button>
                        <Link  to="/cart">
                        <button
                        onClick={() => dispatch(addToCart(product))}
                         
                          className="button w-100 text-dark bg-warning border-0  signup"
                        >
                          Buy it now
                        </button>
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex gap-15 align-items-center mt-3">
                      <div onClick={() => dispatch(addToFavorite(product))}>
                        {" "}
                        <Link to="/compare-product">
                          <AiOutlineHeart className="fs-5 me-2" />
                          Add to wishlist
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex flex-column  my-3 gap-10 ">
                      <h3 className="produc-heddingt-hedding">
                        Shipping & Redunce{" "}
                      </h3>
                      <p className="product-data">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati, quam.
                      </p>
                    </div>
                    <div className="d-flex my-3 gap-10 ">
                      <h3 className="produc-heddingt-hedding">
                        Copy Product link{" "}
                      </h3>
                      <a
                        href="javascript:void(0);"
                        onClick={() => {
                          copyToClipboard(
                            "https://images.pexels.com/photos/9896959/pexels-photo-9896959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          );
                        }}
                      >
                        Copy product link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper py-5 home-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4>Description</h4>
                  <p>{product?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-wrapper home-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 id="review" className="mb-2">
                  Reviews
                </h3>
                <div className="review-inner">
                  <div className="review-head d-flex align-items-center justify-content-start">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          value={3}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <p className="mb-2">Based on 2 Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a review</h4>
                    <form action="" className="d-flex flex-column gap-15 ">
                      <div>
                        <ReactStars
                          count={5}
                          value={3}
                          edit={true}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>

                      <div>
                        <textarea
                          rows="4"
                          cols="30"
                          className="w-100 form-control"
                          type="text"
                          placeholder="coments"
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Navdeep</h6>
                        <ReactStars
                          count={5}
                          value={3}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mb-3">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
                {orderProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write A Review
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <section className="popular-product py-5 home-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="mb-4">Our Popular Products</h3>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default SingleProduct;
