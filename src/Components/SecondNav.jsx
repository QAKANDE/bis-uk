import React, { Component } from "react";
import logo from "../Assets/Images/logo.png";

class SecondNav extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="site-header">
          <div className="container">
            <a id="branding" href="index.html">
              <img src={logo} alt="Company name" className="logo" />
              <div className="logo-copy">
                <h1 className="site-title">Company Name</h1>
                <small className="site-description">Slogan goes here</small>
              </div>
            </a>

            <div className="main-navigation">
              <button type="button" className="menu-toggle">
                <i className="fa fa-bars"></i>
              </button>
              <ul className="menu">
                <li className="menu-item current-menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="about.html">About</a>
                </li>
                <li className="menu-item">
                  <a href="service.html">Services</a>
                </li>
                <li className="menu-item">
                  <a href="gallery.html">Gallery</a>
                </li>
                <li className="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>

            <div className="mobile-navigation"></div>
          </div>
        </header>
      </>
    );
  }
}

export default SecondNav;
