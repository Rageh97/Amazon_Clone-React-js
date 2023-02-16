import React from "react";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import { addToCompare } from "../RTK/Slices.js/compareProductSlice";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { MdFavorite } from "react-icons/md";
import { formatPrice } from "./../Utilts.js/formatPrice";
import Category from "./../Pages/Category";
import { useDispatch } from "react-redux";
import { addToCart } from "../RTK/Slices.js/CartSlice";
import { addToFavorite } from "../RTK/Slices.js/favoriteSlice";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-5 col-sm-12 col-xs-12 mx-3 mb-5">
        <div className="d-flex w-100 h-100 flex-column justify-content-between">
          <Link
            to={`/product/${product?.id}`}
            key={product?.id}
            className="product-card position-relative"
          >
            <div className="wishlist-icon position-absolute">
              <Link>
                <MdFavorite
                  className="img-Wish"
                  onClick={() => dispatch(addToFavorite(product))}
                />
              </Link>
            </div>
            <div style={{ height: "200px" }} className="product-img mb-2 me-2">
              <img
                style={{ height: "200px" }}
                className="img-fluid w-100 h-100"
                src={product?.images[0]}
                alt={product.title}
              />
              <img
                className="img-fluid w-100 h-100"
                src={product?.images[1]}
                alt={product.title}
              />
            </div>
            <div className="product-details">
              <h6 className="brand">{product?.brand}</h6>
              <h5 className="product-title">{product?.title}</h5>
              <ReactStars
                count={5}
                value={3}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />

              <p className="price text-dark">{formatPrice(product?.price)}</p>
              <span className="new-price text-success">
                {formatPrice(product?.discountedPrice)}
              </span>
              <span className="text-primary">
                ({product?.discountedPercentage}% Off)
              </span>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link to="/cart">
                  <img
                    onClick={() => dispatch(addToCart(product))}
                    src={addcart}
                    alt=""
                  />
                </Link>
                <Link to={`/product/${product?.id}`}>
                  <img src={view} alt="" />
                </Link>
                <Link>
                  <img
                    onClick={() => dispatch(addToCompare(product))}
                    src={prodcompare}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </Link>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="button mt-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
