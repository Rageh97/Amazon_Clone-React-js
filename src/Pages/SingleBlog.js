import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import BlogCard from "../Components/BlogCard";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.jpg"
import { HiArrowNarrowLeft } from "react-icons/hi";
import ScrollToTop from "../Components/Scroll";
const SingleBlog = () => {
  return (
    <>
    <ScrollToTop />
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrum title="Dynamic Blog Name" />
      <div className="blog-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className="gap-10 d-flex align-items-center" to="/blogs">
                  <HiArrowNarrowLeft className="fs-5"/>
                  Go Back To Blog
                </Link>
                <h3 className="title">
                  A Beautiful Sunnday Morning Renaissance
                </h3>
                <img
                  className="img-fluid w-100"
                  src={blog}
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  cupiditate eius, modi dolorem eaque possimus optio at nobis,
                  ea quia velit? Est beatae iste velit nisi mollitia sed
                  corrupti ipsam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
