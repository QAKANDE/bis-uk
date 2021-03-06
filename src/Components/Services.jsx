import React, { Component } from "react";
import icon1 from "../Assets/Images/icon-1.png";
import icon2 from "../Assets/Images/icon-2.png";
import icon3 from "../Assets/Images/icon-3.png";
import icon4 from "../Assets/Images/icon-4.png";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="fullwidth-block features-section">
        <div className="container">
          <h2 className="section-title">our Services</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="feature">
                <img src={icon1} className="feature-image" />
                <h3 className="feature-title">Voluptatem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur dolor perferendis blanditiis voluptate maiores
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="feature">
                <img src={icon2} class="feature-image" />
                <h3 class="feature-title">COnsequatur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Esse, minus, totam. Officia ea accusamus quis tenetur quas
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="feature">
                <img src={icon3} class="feature-image" />
                <h3 class="feature-title">COnsequatur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Esse, minus, totam. Officia ea accusamus quis tenetur quas
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="feature">
                <img src={icon4} class="feature-image" />
                <h3 class="feature-title">COnsequatur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Esse, minus, totam. Officia ea accusamus quis tenetur quas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
