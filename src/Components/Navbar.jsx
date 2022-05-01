import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../Assets/Images/bisbeautyylogo.jpg";
import openIcon from "../Assets/menu.png";
import closeIcon from "../Assets/cancel.png";

class Navbar extends Component {
  state = {
    toggle: false,
  };

  setMobile = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    return (
      <>
        <div className="header-middle">
          <div className="container">
            <div className="row  dt-menu">
              <div className="col-md-4 clearfix">
                <div className="logo pull-left mb-3">
                  <img src={logo} id="logo" />
                </div>
              </div>
              <div className="col-md-8 clearfix ">
                <div className="d-flex flex-row shop-menu clearfix pull-right">
                  <ul>
                    <li>
                      <Link to="/" className="navbar-links">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio" className="navbar-links">
                        Portfolio
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/videos" className="navbar-links">
                        Videos
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/bookus" className="navbar-links">
                        Book us
                      </Link>
                    </li>
                    <li>
                      <Link to="/team" className="navbar-links">
                        Who we are
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-all-wrapper">
          <div id="mw-menu">
            <div className="mobile-menu-wrapper container">
              <Link to="/">
                <div className="logo">
                  <img src={logo} id="mobile-logo" />
                </div>
              </Link>
              <div id="open-icon-wrapper" onClick={() => this.setMobile()}>
                <img
                  src={this.state.toggle ? closeIcon : openIcon}
                  id="open-icon"
                />
              </div>
            </div>
          </div>
          <div
            className={this.state.toggle ? "mobile-inner" : "hide-mobile-inner"}
          >
            <div id="mobile-2nd-inner">
              <p onClick={() => this.setMobile()}>
                <Link to="/">Home</Link>
              </p>
              <p onClick={() => this.setMobile()}>
                <Link to="/portfolio">Portfolio</Link>
              </p>
              {/* <p onClick={() => this.setMobile()}>
                <Link to="/videos">Videos</Link>
              </p> */}
              <p onClick={() => this.setMobile()}>
                <Link to="/bookus">Book us</Link>
              </p>
              <p onClick={() => this.setMobile()}>
                <Link to="/team">Who we are</Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
