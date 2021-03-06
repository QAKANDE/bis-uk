import React, { Component } from "react";
import slider1 from "../Assets/Images/slider-1@2x.jpg";
import slider2 from "../Assets/Images/slider-2@2x.jpg";
import slider3 from "../Assets/Images/slider-3@2x.jpg";

class Jumbo extends Component {
  state = {};
  render() {
    return (
      <div className="hero hero-slider">
        <ul className="slides">
          <li style={{ backgroundImage: `url(${slider1})` }}>
            <div className="container">
              <h3 className="slider-subtitle">Your header goes here</h3>
              <h2 className="slider-title">Professional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                molestiae necessitatibus possimus ducimus facere, error,
                nostrum. Quos sapiente ducimus maxime odio alias dolor
                consequuntur, maiores commodi exercitationem veniam. Id, ex?
              </p>
              <a href="#" className="button large">
                Read more
              </a>
            </div>
          </li>
          <li style={{ backgroundImage: `url(${slider2})` }}>
            <div className="container">
              <h3 className="slider-subtitle">Your header goes here</h3>
              <h2 className="slider-title">Professional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                molestiae necessitatibus possimus ducimus facere, error,
                nostrum. Quos sapiente ducimus maxime odio alias dolor
                consequuntur, maiores commodi exercitationem veniam. Id, ex?
              </p>
              <a href="#" className="button large">
                Read more
              </a>
            </div>
          </li>
          <li style={{ backgroundImage: `url(${slider3})` }}>
            <div className="container">
              <h3 className="slider-subtitle">Your header goes here</h3>
              <h2 className="slider-title">Professional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                molestiae necessitatibus possimus ducimus facere, error,
                nostrum. Quos sapiente ducimus maxime odio alias dolor
                consequuntur, maiores commodi exercitationem veniam. Id, ex?
              </p>
              <a href="#" className="button large">
                Read more
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Jumbo;
