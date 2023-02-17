import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
import {AiOutlineHome} from "react-icons/ai"
import {BiPhoneCall} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import ScrollToTop from "../Components/Scroll";
const Contact = () => {
  return (
    <>
    <ScrollToTop />
      <Meta title={"Contact us"} />
      <BreadCrum title="Contact" />
      <div className="contact-wrapper py-5 home-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13683.76047585647!2d30.962285171691796!3d30.972153204867386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7b3b31ed01575%3A0x2ae50b1962e6af90!2z2YLYt9mI2LHYjCDZhdiv2YrZhtipINmC2LfZiNix2Iwg2YXYsdmD2LIg2YLYt9mI2LHYjCDYp9mE2LrYsdio2YrYqQ!5e0!3m2!1sar!2seg!4v1675170625543!5m2!1sar!2seg"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="row mt-5">
              <div className="col-xxl-8 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="contact-wrapper2 d-flex  justify-content-between">
                <div>
                  <h3 className="contact-title">Contact us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="name"/>
                    </div>

                    <div>
                      <input type="email" className="form-control" placeholder="email"/>
                    </div>

                    <div>
                      <input type="tel" className="form-control" placeholder="mobile number"/>
                    </div>

                    <div>
                      <textarea rows="10" cols="30" className='w-100 form-control'type="text"  placeholder="coments"/>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                </div>
                </div>
                <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="d-flex flex-column ">
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-15"> <AiOutlineHome className="fs-5 text-dark"/>
                        <address className="mb-0 text-dark">Egypt: Tanata/Qutur /Cairo</address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15"> <BiPhoneCall className="fs-5 text-dark"/>
                      <a href="tel: 01065330985">01065330985</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15"> <AiOutlineMail className="fs-5 text-dark"/>
                      <a href="mailto:abdelhady412rageh@gmail.com">mailto:abdelhady412rageh@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15"> <BsInfoCircle className="fs-5 text-dark"/>
                      <p className="mb-0 text-dark">Sunday - Friday 8 AM - 5 PM </p>
                      </li>
                    </ul>
                  
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
