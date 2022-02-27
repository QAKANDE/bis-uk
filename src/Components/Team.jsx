import React, { Component } from "react";
import person1 from "../Assets/Images/person-1.jpg";
import "../css/Team.css";

class Team extends Component {
  state = {
    url: "https://res.cloudinary.com/quadri/image/upload/v1645981882/BisolaImage_kmfld0.png",
  };

  render() {
    return (
      <div className="team-container">
        <div id="team-sub-container">
          <h2 className="section-title">Your Artist</h2>
          <div id="team-holder">
            <img src={this.state.url} id="bis-image" />
          </div>
          <h3 id="team-member">Bisola. O</h3>
          <p id="team-member">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            nihil distinctio natus doloremque id tempore repellendus atque
          </p>
          <div className="team">
            {/* <div class="social-links">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div> */}
          </div>
          {/* <div className="row">
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
          </div> */}
        </div>
      </div>
    );
  }
}

export default Team;
