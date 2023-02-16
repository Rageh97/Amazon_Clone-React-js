import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { addToCart } from "../RTK/Slices.js/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducts } from "../RTK/Slices.js/categorySlice";
const SpecialProduct = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer />
      {products.slice(0, 3).map((product) => {
        return (
          <>
            <div className="col-4">
              <div style={{ height: "500px" }} className="special-product-card">
                <div className="d-flex justify-content-between">
                  <div>
                    <img
                      className="img-fluid w-75"
                      src={product.image}
                      alt=""
                    />
                  </div>

                  <div className="special-product-content">
                    <h5 className="brand">{product.title}</h5>
                    <h6 className="title">{product.description}</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="price">
                      <span className="red-p">{product.price}</span>&nbsp;
                      <strike>$200</strike>
                    </p>
                    <div className="discount d-flex align-items-center gap-10">
                      <p className="mb-0">
                        <b> 5</b>Days
                      </p>
                      <div className="d-flex gap-10 align-items-center">
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                        :
                        <span className="badge rounded-circle p-2 bg-danger">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="prod-count my-3">
                      <p>Products: {product.size}</p>
                      <div class="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <Link
                      onClick={() => dispatch(addToCart(product))}
                      className="button"
                    >
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SpecialProduct;
