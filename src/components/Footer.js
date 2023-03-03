import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="Newsletter"></img>
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  Demo Store
                  <br />
                  No. 1259 Freedom, New York 1111 <br />
                  United States <br />
                </address>
                <a
                  href="tel: +91 826458923"
                  className="text-white mt-3 d-block mb-1"
                >
                  +91 826458923
                </a>
                <a
                  href="mailto:giovannamantonucci@gmail.com"
                  className="text-white mt-2 d-block mb-0"
                >
                  giovannamantonucci@gmail.com
                </a>
              </div>
              <div className="social-icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white " href="">
                  <BsLinkedin className="fs-4" />
                </a>
                <a className="text-white " href="">
                  <BsInstagram className="fs-4" />
                </a>
                <a className="text-white " href="">
                  <BsGithub className=" fs-4" />
                </a>
                <a className="text-white " href="">
                  <BsYoutube className=" fs-4" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Private Policy</Link>
                <Link className="text-white mb-1 py-2">Refund Policy</Link>
                <Link className="text-white mb-1 py-2">Shipping Policy</Link>
                <Link className="text-white mb-1 py-2">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Search</Link>
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">FAQ</Link>
                <Link className="text-white mb-1 py-2">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Laptops</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
                <Link className="text-white mb-1 py-2">Tablets</Link>
                <Link className="text-white mb-1 py-2">Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                ©: {new Date().getFullYear()}; Powered by Shaio.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
