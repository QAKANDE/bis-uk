import React, { Component } from 'react'
import logo from '../Assets/Images/logo.png'
import '../css/SecondNav.css'

class SecondNav extends Component {
  state = {}
  render() {
    return (
      <>
        <header className="second_nav_site-header">
          <div className="container">
             <a id="second_nav_brand" href="index.html">
              <img src={logo} alt="Company name" className="second_nav_logo" />
              <div className="second_nav_logo-copy">
                <h1 className="second_nav_site-title">Company Name</h1>
                <small className="second_nav_site-description">Slogan goes here</small>
              </div>
            </a>
              <div className="second_nav_main-navigation">
              <button type="button" className="second_nav_menu-toggle">
                <i className="fa fa-bars"></i>
              </button>
              <ul className="second_nav_menu">
                <li className="second_nav_menu-item second_nav_current-menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="second_nav_menu-item">
                  <a href="about.html">About</a>
                </li>
                <li className="second_nav_menu-item">
                  <a href="service.html">Services</a>
                </li>
                <li className="second_nav_menu-item">
                  <a href="gallery.html">Gallery</a>
                </li>
                <li className="second_nav_menu-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="second_nav_mobile-navigation"></div>
          </div>
        </header>
      </>
    )
  }
}

export default SecondNav
