import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillDelete } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ScrollToTop from "../Components/Scroll";
// import {emptyCart} from "../images/EmptyCart"
import {
  removeFromCart,
  clearCart,
  decreaseCart,
  addToCart,
  subTotal,
} from "../RTK/Slices.js/CartSlice";
const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subTotal());
  }, [cart, dispatch]);

  return (
    <>
    <ScrollToTop />
      <Meta title={"Cart"} />
      <BreadCrum title="Cart" />
      <ToastContainer />
      <section className="cart-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {cartItem.length > 0 ? (
              <>
                <span
                  onClick={() => dispatch(clearCart())}
                  style={{ width: "80px", cursor: "pointer" }}
                  className=" bg-danger clear-cart p-2 text-white"
                >
                  Clear All
                </span>
                <div className=" cart-header py-3 d-flex justify-content-between align-items-center">
                  
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>
                
              </>
            ) : (
              <>
                <div className="container ">
                  <div className="row align-items-center justify-content-between">
                  <div className="col-xxl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <div>
                    <img
                      className="img-fluid w-50 h-50"
                      src="images/EmptyCart.png"
                      alt=""
                    />
                 
                  </div>
                  </div>
                 <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                 <div >
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
            {cartItem.map((item) => {
              return (
                <>
                  <div className="col-12">
                    <div className="cart-data mb-3 py-3 d-flex justify-content-between align-items-center">
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-50">
                          <img
                            className="img-fluid"
                            src={item.images[0]}
                            alt=""
                          />
                        </div>
                        {/* <div className="w-50">
                          <p>item</p>
                          <p>Size: {item.size}</p>
                          <p>Color: non</p>
                        </div> */}
                      </div>
                      <div className="cart-col-2">
                        <h5 className="price"> {item.price}</h5>
                      </div>
                      <div className="cart-col-3  d-flex align-items-center gap-15">
                        <div
                          onClick={() => dispatch(decreaseCart(item))}
                          className="increase"
                        >
                          <AiFillMinusCircle className="fs-5" />
                        </div>
                        <p className="mb-0 text-success">{item.quantity}</p>
                        <div className="decrease">
                          <AiFillPlusCircle
                            onClick={() => dispatch(addToCart(item))}
                            className="fs-5"
                          />
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => dispatch(removeFromCart(item))}
                            className="text-danger delete fs-5 "
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <h5 className="price">
                          {" "}
                          ${item.price * item.quantity}
                        </h5>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {cartItem.length > 0 ? (
              <div className="row py-2 mt-4 d-flex button-shipping justify-content-between align-items-end">
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <Link to="/" className="button button-shipping">
                    Continue to shopping
                  </Link>
                </div>
                  <div className="d-flex flex-column align-items-start mt-5 col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Subtotal: ${cart.totalPrice}</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/check-out" className="button">
                      Checkout
                    </Link>
                  </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
