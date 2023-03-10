import React from "react";
import BlogCard from "../Components/BlogCard";
import BreadCrum from "../Components/BreadCrum";
import Meta from "../Components/Meta";

const Blogs = () => {
 
  
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrum title="Blogs" />
      <div className="blog-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                {/* <h3 className="filter-title">Find By Categories</h3> */}
                <div className="blogs-item">
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Camera</li>
                    <li>Tv</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-9 col-xs-9 mb-3">
                  <BlogCard />
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-9 col-xs-9 mb-3">
                  <BlogCard />
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-9 col-xs-9 mb-3">
                  <BlogCard />
                </div>
                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-9 col-xs-9 mb-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
