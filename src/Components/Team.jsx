import React, { Component } from "react";
import person1 from "../Assets/Images/person-1.jpg";
import person2 from "../Assets/Images/person-2.jpg";
import person3 from "../Assets/Images/person-3.jpg";
import person4 from "../Assets/Images/person-4.jpg";

class Team extends Component {
  state = {};
  render() {
    return (
      <div className="fullwidth-block team-section">
        <div className="container">
          <h2 className="section-title">Our team</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="team">
                <figure class="team-image">
                  <img src={person1} />
                </figure>
                <h3 class="team-name">Bisola Olufade</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio nihil distinctio natus doloremque id tempore repellendus
                  atque
                </p>
                <div class="social-links">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="team">
                <figure class="team-image">
                  <img src={person2} />
                </figure>
                <h3 class="team-name">Ariel Olufade</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta iste natus voluptatum eius? Vitae accusantium, deserunt
                  maiores incidunt
                </p>
                <div class="social-links">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
