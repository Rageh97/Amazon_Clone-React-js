import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import OurStore from "./Pages/OurStore";
import Blogs from "./Pages/Blogs";
import CompareProduct from "./Pages/CompareProduct";
import FavoriteWishlist from "./Pages/FavoriteWishlist";
import LogIn from "./Pages/LogIn";
import Cart from "./Pages/Cart";
import ForgetPassword from "./Pages/ForgetPassword";
import SignUp from "./Pages/SignUp";
import ResetPassword from "./Pages/ResetPassword";
import SingleBlog from "./Pages/SingleBlog";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import TermAndCondition from "./Pages/TermAndCondition";
import SingleProduct from "./Pages/SingleProduct";
import Checkout from "./Pages/Checkout";
import Category from './Pages/Category';
import Search from './Pages/Search';
import "./MediaQuery.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="Favorite-wishlist" element={<FavoriteWishlist />} />
            <Route path="log-in" element={<LogIn />} />
            <Route path="cart" element={<Cart />} />
            <Route path="forgot-password" element={<ForgetPassword />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="Term-and-condition" element={<TermAndCondition />} />
            <Route path="check-out" element={<Checkout />} />
            <Route path="category/:category" element={<Category />} />
            <Route path="search/:searchTerm" element={<Search/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
