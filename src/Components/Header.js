import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  fetchCategories,
  getAllCategory,
} from "./../RTK/Slices.js/categorySlice";
import "../MediaQuery.css";
import { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {AiOutlineMenuFold} from "react-icons/ai"
const Header = () => {
  const dispatch = useDispatch();
  const activeLink = "text-warning";
  const unActiveLink = "text-white header-category";
  const navigate = useNavigate();

  const categories = useSelector(getAllCategory);
  const cart = useSelector((state) => state.cart);
  const userName = JSON.parse(localStorage.getItem("user"));
  const isLOggedIn = localStorage.getItem("isloggedin");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("isloggedin");
    navigate("/log-in");
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
// .......................................
const [showNavbar, setShowNavbar] = useState(false)

const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
}
// ........................................
  return (
    <>
      <header className="header-top py-3">
        <div className="container-xxl">
          <div className="row d-flex align-items-center">
            <div className="col-xxl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <p className="text-white mb-0">
                Free shopping over $100 | Free returns
              </p>
            </div>
            <div className="col-xxl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
              {isLOggedIn ? (
                <div style={{ color: "#febd69" }}>
                  <span className="text-white">Hello |</span> {userName.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-xxl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <p className="text-end text-white mb-0">
                {" "}
                Hotline :{" "}
                <a className="text-white" href="tel 001637393737">
                  01065330985
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-mid">
        <div className="container-xxl">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="header-mid-logo col-xxl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-none d-lg-flex">
              <h1>
                <h1 data-aos="zoom-in" className="text-white ">SHOPPING</h1>
              </h1>
            </div>
            <div className="header-mid-search col-xxl-5 col-lg-6 col-md-8 col-sm-8 col-xs-4">
              <div className="input-group py-3 w-100">
                <input
                  onChange={(e) => handleSearchTerm(e)}
                  type="text"
                  className="form-control py-3 w-100"
                  placeholder="search product here"
                  aria-label="search product here"
                  aria-describedby="basic-addon2"
                />
                <Link to={`search/${searchTerm}`}>
                  <span className="input-group-text p-3" id="basic-addon2">
                    <BsSearch className="fs-4" />
                  </span>
                </Link>
              </div>
            </div>
            {/*  */}
           
             
            <div className="navbar col-xxl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <div className="container">
        
        <div className="menu-icon" onClick={handleShowNavbar}>
          <AiOutlineMenuFold className="text-white fs-5"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
            <div className="comapre-product">
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img data-aos="zoom-in" src="images/compare.svg" />
                    <p className="mb-0">
                      Compare <br /> products
                    </p>
                  </Link>
                </div>
            </li>
            <li>
            <div className="favorite-wishlist">
                  <Link
                    to="/favorite-wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img data-aos="zoom-in" src="images/wishlist.svg" />
                    <p className="mb-0">
                      Favorit
                      <br /> wishlist
                    </p>
                  </Link>
                </div>
            </li>
            <li>
            {isLOggedIn ? (
                  <>
                    <Link to="/log-in" onClick={handleLogOut}>
                      <div className="d-flex align-items-center justify-content-center gap-10">
                        <BiLogOutCircle className="text-white fs-5" />
                        <h6 className="text-white">logout</h6>
                      </div>
                    </Link>
                  </>
                ) : (
                  <div className="log-in-content">
                    <Link
                      to="/log-in"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <img data-aos="zoom-in" src="images/user.svg" />
                      <p className="mb-0">
                        Log in <br /> My account
                      </p>
                    </Link>
                  </div>
                )}
            </li>
            <li>
            <div className="cart-content">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {cart.quantity}
                      </span>
                      <p className="mb-0">${cart.totalPrice}</p>
                    </div>
                  </Link>
                </div>
            </li>
            
          </ul>
        </div>
      </div>
            </div>
            
           {/*  */}
            <div className="header-links align-items-center justify-content-center col-xxl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <div className="gap-30 d-flex align-items-center justify-content-between">
                <div className="comapre-product">
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img data-aos="zoom-in" src="images/compare.svg" />
                    <p className="mb-0">
                      Compare <br /> products
                    </p>
                  </Link>
                </div>
                <div className="favorite-wishlist">
                  <Link
                    to="/favorite-wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img data-aos="zoom-in" src="images/wishlist.svg" />
                    <p className="mb-0">
                      Favorit
                      <br /> wishlist
                    </p>
                  </Link>
                </div>
                {isLOggedIn ? (
                  <>
                    <Link to="/log-in" onClick={handleLogOut}>
                      <div className="d-flex align-items-center justify-content-center gap-10">
                        <BiLogOutCircle className="text-white fs-5" />
                        <h6 className="text-white">logout</h6>
                      </div>
                    </Link>
                  </>
                ) : (
                  <div className="log-in-content">
                    <Link
                      to="/log-in"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <img data-aos="zoom-in" src="images/user.svg" />
                      <p className="mb-0">
                        Log in <br /> My account
                      </p>
                    </Link>
                  </div>
                )}
                <div className="cart-content">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart.svg" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {cart.quantity}
                      </span>
                      <p className="mb-0">${cart.totalPrice}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="menueShow col-xxl-5  d-flex align-items-center justify-content-center">
              {/* <div className="menu-category d-flex align-items-center gap-15 mx-5">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle  bg-transparent border-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {categories.slice(0, 8).map((category, idx) => {
                      return (
                        <>
                          <li key={idx}>
                            <Link
                              to={`/category/${category}`}
                              className="dropdown-item"
                            >
                              {category}
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div> */}
              
                <div className="d-flex menueLinks align-items-center gap-15 justify-content-center">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : unActiveLink
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? activeLink : unActiveLink
                    }
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeLink : unActiveLink
                    }
                  >
                    Contact
                  </NavLink>
                </div>
              
            </div>
            <div className="categoryShow  col-xxl-7 align-items-center justify-content-center">
              <ul className="gap-15 d-flex align-items-center mb-0">
                {categories.slice(0, 6).map((category, idx) => {
                  return (
                    <>
                      <li key={idx}>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? activeLink : unActiveLink
                          }
                          to={`/category/${category}`}
                        >
                          {category.replace("-", "")}
                        </NavLink>
                      </li>
                    </>
                  );
                })}
                <li>
                  <NavLink className="text-white" to="/">
                    All Products
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="header-top py-3">
        <div className="container-xxl">
          <div className="row d-flex justify-content-between flex-wrap">
            <div className="col-5">
              <p className="text-white mb-0">
                Free shopping over $100 | Free returns
              </p>
            </div>
            <div className="col-2">
              {isLOggedIn ? (
                <div style={{ color: "#febd69" }}>
                  <span className="text-white">Hello |</span> {userName.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-5">
              <p className="text-end text-white mb-0">
                {" "}
                Hotline :{" "}
                <a className="text-white" href="tel 001637393737">
                  01065330985
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-mid">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-xxl-2 col-md-1 col-sm-12 col-xs-12">
              <h1>
                <h1 className="text-white">SHOPPING</h1>
              </h1>
            </div>
            <div className="col-xxl-5 col-md-4 col-sm-9 col-xs-9">
              <div className="input-group py-3">
                <input
                  onChange={(e) => handleSearchTerm(e)}
                  type="text"
                  className="form-control py-3"
                  placeholder="search product here"
                  aria-label="search product here"
                  aria-describedby="basic-addon2"
                />
                <Link to={`search/${searchTerm}`}>
                  <span className="input-group-text p-3" id="basic-addon2">
                    <BsSearch className="fs-4" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-xxl-5 col-md-2 col-sm-2 col-xs-2 gap-15 d-flex justify-content-end">
              <nav className="navbar navbar-expand-xl">
                <button
                  className="navbar-toggler border-warning"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>
                    <AiOutlineMenu className="text-white fs-5" />
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo03"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-15">
                    <li className="nav-item">
                      <div>
                        <Link
                          to="/compare-product"
                          className="d-flex align-items-center gap-10 text-white"
                        >
                          <img src="images/compare.svg" />
                          <p className="mb-0">
                            Compare <br /> products
                          </p>
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div>
                        <Link
                          to="/favorite-wishlist"
                          className="d-flex align-items-center gap-10 text-white"
                        >
                          <img src="images/wishlist.svg" />
                          <p className="mb-0">
                            Favorit
                            <br /> wishlist
                          </p>
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      {isLOggedIn ? (
                        <>
                          <Link to="/log-in" onClick={handleLogOut}>
                            <div className="d-flex align-items-center justify-content-center gap-10">
                              <BiLogOutCircle className="text-white fs-5" />
                              <h6 className="text-white">logout</h6>
                            </div>
                          </Link>
                        </>
                      ) : (
                        <div>
                          <Link
                            to="/log-in"
                            className="d-flex align-items-center gap-10 text-white"
                          >
                            <img src="images/user.svg" />
                            <p className="mb-0">
                              Log in <br /> My account
                            </p>
                          </Link>
                        </div>
                      )}
                    </li>
                    <li className="nav-item">
                      <div>
                        <Link
                          to="/cart"
                          className="d-flex align-items-center gap-10 text-white"
                        >
                          <img src="images/cart.svg" />
                          <div className="d-flex flex-column">
                            <span className="badge bg-white text-dark">
                              {cart.quantity}
                            </span>
                            <p className="mb-0">${cart.totalPrice}</p>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <div>
                <Link
                  to="/compare-product"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/compare.svg" />
                  <p className="mb-0">
                    Compare <br /> products
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to="/favorite-wishlist"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/wishlist.svg" />
                  <p className="mb-0">
                    Favorit
                    <br /> wishlist
                  </p>
                </Link>
              </div>
              {isLOggedIn ? (
                <>
                  <Link to="/log-in" onClick={handleLogOut}>
                    <div className="d-flex align-items-center justify-content-center gap-10">
                      <BiLogOutCircle className="text-white fs-5" />
                      <h6 className="text-white">logout</h6>
                    </div>
                  </Link>
                </>
              ) : (
                <div>
                  <Link
                    to="/log-in"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/user.svg" />
                    <p className="mb-0">
                      Log in <br /> My account
                    </p>
                  </Link>
                </div>
              )}
              <div>
                <Link
                  to="/cart"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/cart.svg" />
                  <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">
                      {cart.quantity}
                    </span>
                    <p className="mb-0">${cart.totalPrice}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-around">
              <nav className="navbar navbar-expand-xl">
                <button
                  className="navbar-toggler border-warning"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>
                    <AiOutlineMenu className="text-white fs-5" />
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-15">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? activeLink : unActiveLink
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    
                    <li className="nav-item">
                      <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                          isActive ? activeLink : unActiveLink
                        }
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? activeLink : unActiveLink
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="menu-links d-flex align-items-center ">
                <div className="mx-5">
                  <nav class="navbar navbar-expand-xl">
                    <button
                      className="navbar-toggler border-warning"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarTogglerDemo02"
                      aria-controls="navbarTogglerDemo02"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span>
                        <AiOutlineMenu className="text-white fs-5" />
                      </span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarTogglerDemo02"
                    >
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-15">
                        {categories.slice(0, 6).map((category, idx) => {
                          return (
                            <>
                              <li key={idx}>
                                <NavLink
                                  className={({ isActive }) =>
                                    isActive ? activeLink : unActiveLink
                                  }
                                  to={`/category/${category}`}
                                >
                                  {category.replace("-", "")}
                                </NavLink>
                              </li>
                            </>
                          );
                        })}
                        <li>
                          <NavLink
                            className="text-white header-category"
                            to="/"
                          >
                            All Products
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
