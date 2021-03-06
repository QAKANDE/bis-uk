import React, { Component } from "react";
import iconMapSmall from "../Assets/Images/icon-map-small.png";
import iconPhoneSmall from "../Assets/Images/icon-phone-small.png";
import iconEnvelopeSmall from "../Assets/Images/icon-envelope-small.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget contact-widget">
                <h3 className="widget-title">Contact</h3>
                <div className="contact-info">
                  <address>
                    <img src={iconMapSmall} className="icon" />
                    <p>
                      <strong>Company name</strong> 563 Avenue Street, New York
                    </p>
                  </address>
                  <a href="mailto:contact@companyname.com" className="mail">
                    <img src={iconEnvelopeSmall} className="icon" />
                    contact@companyname.com
                  </a>
                  <a href="tel:(500)942042259" className="phone">
                    <img src={iconPhoneSmall} className="icon" />
                    (500)942042259
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget">
                <h3 className="widget-title">Social Media</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident et praesentium{" "}
                </p>
                <div className="social-links">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget">
                <h3 className="widget-title">Newsletter</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident et praesentium{" "}
                </p>
                <form action="#" className="subscribe-form">
                  <input type="email" placeholder="Enter our email..." />
                  <input type="submit" value="Sign up" />
                </form>
              </div>
            </div>
          </div>
          <div className="colophon">
            <p>
              Copyright 2021 BizUK. Designed by Quadri Omofolarin Akande. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
