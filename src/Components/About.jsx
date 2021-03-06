import React, { Component } from "react";
import figure1 from "../Assets/Images/figure-1.jpg";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="fullwidth-block information-section">
        <div className="container">
          <h2 className="section-title">Information</h2>
          <div className="row">
            <div className="col-md-4">
              <figure>
                <img src={figure1} />
              </figure>
            </div>
            <div className="col-md-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque omnis minima accusamus nihil eligendi quas cumque
                rerum odit quo architecto repudiandae adipisci repellendus velit
                nostrum sed quisquam doloribus, consequatur sint. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Doloremque omnis
                minima accusamus nihil eligendi quas cumque rerum odit quo
                architecto repudiandae adipisci repellendus velit nostrum sed
                quisquam doloribus, consequatur sint.
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium odit, blanditiis aliquam officia soluta modi amet ex
                nihil nulla minima. Nam earum est magnam tempore corrupti quos
                consequatur, numquam voluptas! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Doloremque omnis minima accusamus
                nihil eligendi quas cumque rerum odit quo architecto repudiandae
                adipisci repellendus velit nostrum sed quisquam doloribus,
                consequatur sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
