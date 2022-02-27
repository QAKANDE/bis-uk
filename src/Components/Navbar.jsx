import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../Assets/Images/bisbeautyylogo.jpg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 clearfix">
              <div className="logo pull-left mb-3">
                <img src={logo} id="logo" />
              </div>
            </div>
            <div className="col-md-8 clearfix">
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
    );
    // <div className="header_top">
    // 	<div className="container">
    // 		<div className="row">
    // 			<div className="col-sm-6">
    // 				<Link to="/">
    // 					<img
    // 						src="https://johnpaulstephen.com/wp-content/uploads/2020/05/johnPaulStephenLOGOhead-1.png"
    // 						style={{ width: '12%' }}
    // 					/>
    // 				</Link>
    // 			</div>
    // 			<div className="col-sm-6">
    // 				<div className="d-flex justidy-content-between social-icons pull-right">
    // 					<ul>
    // 						<li>HOME</li>
    // 						<li>PORTFOLIO</li>
    // 						<li>BOOK US</li>
    // 					</ul>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  }
}

export default Navbar;
