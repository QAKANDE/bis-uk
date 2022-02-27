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
            You look beautiful when you feel beautiful. I believe my work is to
            help women by enhancing their individual beauty.
          </p>
          <p id="team-member">
            I love art and I have found that the best way to express my art is
            through make up. I hope you love what you see and I can't wait to
            slay your face!
          </p>
          <p id="team-member">With Love,</p>
          <p id="team-member">Bis x</p>
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
