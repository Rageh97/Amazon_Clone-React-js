import React from "react";
import { Link } from "react-router-dom";
import newsletter from "../images/newsletter.png"
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-lg-5 col-sm-12 col-xs-12">
              <div className="footer-top-data gap-30 mb-0 d-flex align-items-center">
                <img className="" src={newsletter} />
                <h2 className="text-white">Sign For Newsletter</h2>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-5 col-sm-8 col-xs-8">
              <div className="input-group py-3">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="your email address"
                  aria-label="your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-xs-5">
              <h4 className="text-white mb-4">Contact us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : Egypt. Tanta. Qutur <br /> sky without limits 
                </address>
                <a className="d-block text-white mb-5 " href="tel: 01065330985">
                  01065330985
                </a>
                <a
                  className="d-block text-white mb-5"
                  href="mailto:abdelhady412rageh@gmail.com"
                >
                  abdelhady412rageh@gmail.com
                </a>
                <div className="social-icons d-flex  align-items-center gap-15 mb-4">
                  <a href="https://www.linkedin.com/in/mohamed-rageh-5b2144221/">
                    <BsLinkedin className="text-white fs-5 icon"/>
                  </a>
                  <a href="https://m.facebook.com/mohamed.rageh.71465?eav=AfaeTz9ga2TvJC7R1ox5AijI0yg4QZ8Hb0e63aq7E2qNd9TuWRbDfy2LoWlgVd5m6gc&paipv=0">
                    <BsFacebook className="text-white fs-5 icon"/>
                  </a>
                  <a href="">
                    <BsGithub className="text-white fs-5 icon"/>
                  </a>
                  <a href="">
                    <BsInstagram className="text-white fs-5 icon"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-xs-5">
              <h4 className="text-white mb-4">Information</h4>
              <div>
                <div className="footer-links d-flex flex-column ">
                  <Link to="/privacy-policy"  className="text-white py-2 mb-1">Privacy Policy</Link>

                  <Link to="/refund-policy" className="text-white py-2 mb-1">Refund policy</Link>
                  <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping policy</Link>
                  <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
                  <Link to="/Term-and-condition" className="text-white py-2 mb-1">Terms & Condition</Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-xs-5">
              <h4 className="text-white mb-4">Account</h4>
              <div>
                <div className="footer-links d-flex flex-column ">
                  <Link className="text-white py-2 mb-1">About us</Link>
                  <Link className="text-white py-2 mb-1">Faq</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-2 col-md-6 col-sm-6 col-xs-5">
              <h4 className="text-white mb-4">Quick links</h4>
              <div className="footer-links d-flex flex-column ">
                <Link className="text-white py-2 mb-1">Labtops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}. powered by Dev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
