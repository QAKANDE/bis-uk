import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
          <Container>
            <p id="team-member" className="more-info-text">
              “You look beautiful when you feel beautiful”. This is one of the
              quotes I live by. Therefore, expressing my love for art through
              makeup is one of my many joys.Most importantly, my work aims to
              serve you by enhancing your unique beauty. I would love for you to
              leave my studio feeling extra confident! I appreciate your
              interest in booking our services, so I hope you love what you see
              and I can’t wait to meet you!
            </p>
            {/* <p id="team-member" className="more-info-text">
              Most importantly, my work aims to serve you by enhancing your
              unique beauty. I would love for you to leave my studio feeling
              extra confident!
            </p>
            <p id="team-member" className="more-info-text">
              I appreciate your interest in booking our services, so I hope you
              love what you see and I can’t wait to meet you!
            </p> */}
            <p id="team-member" className="more-info-text">
              With Love,
            </p>
            <p id="team-member" className="more-info-text">
              Bis x
            </p>
          </Container>
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
