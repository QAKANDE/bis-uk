import React, { Component } from "react";
import tiktok from "../Assets/tik-tok.png";
import instagram from "../Assets/instagram.png";
import mail from "../Assets/mail.png";

class Footer extends Component {
  state = {
    messageDetails: {
      name: "",
      email: "",
      customerNumber: "",
    },
  };

  updateSendMessageDetails = (e) => {
    let messageDetails = this.state.messageDetails;
    let id = e.currentTarget.id;
    messageDetails[id] = e.currentTarget.value;
    this.setState({ messageDetails });
  };
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="widget">
              <h3 className="widget-title">Contact Us</h3>
              <div className="social-links">
                {/* <a href="#" className="mx-2">
                  <i className="fa fa-twitter" />
                </a> */}
                <a
                  href="https://instagram.com/bisbeautyuk?utm_medium=copy_link"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <i class="fa fa-indstagram">
                    <img src={instagram} id="icons-img" />
                  </i>
                </a>
                <a
                  href="https://www.tiktok.com/@bisbeautyuk"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <i class="fa fa-tiktok">
                    <img src={tiktok} id="icons-img" />
                  </i>
                </a>
                <a
                  href="mailto:bpolufade@icloud.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <i className="fa fa-twitteddr">
                    <img src={mail} id="icons-img" />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-3">
              <div className="widget contact-widget">
                <h3 className="widget-title">Contact</h3>
                <div className="contact-info">
                  <address>
                    <img src={iconMapSmall} className="icon" />
                    <p>
                      <strong>BisUk</strong> 563 Avenue Street, New York
                    </p>
                  </address>
                  <a href="tel:(500)942042259" className="phone">
                    <img src={iconPhoneSmall} className="icon" />
                    (500)942042259
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-md-3">
              <div className="widget">
                <h3 className="widget-title">Social Media</h3>

                <div className="social-links">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-pinterest" />
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-6">
              <div className="widget">
                <h3 className="widget-title">
                  Send us a message or a feedback
                </h3>
                <form className="subscribe-form">
                  <input
                    className="mb-4"
                    type="email"
                    id="email"
                    value={this.state.messageDetails.email}
                    size="md"
                    placeholder="Enter your email"
                    onChange={(e) => this.updateSendMessageDetails(e)}
                  />
                  <input
                    className="mb-4"
                    type="text"
                    id="customerNumber"
                    value={this.state.messageDetails.customerNumber}
                    placeholder="Enter the best number to reach you on"
                    size="md"
                    onChange={(e) => this.updateSendMessageDetails(e)}
                  />
                  <input
                    className="mb-4"
                    type="text"
                    id="message"
                    value={this.state.messageDetails.message}
                    placeholder="Enter your message"
                    size="md"
                    onChange={(e) => this.updateSendMessageDetails(e)}
                  />
                  <button className="button large">Send message</button>
                </form>
              </div>
            </div> */}
          </div>
          <div className="colophon">
            <p>
              Copyright 2022 BisBeautyUK. Designed by Quadri Akande. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
