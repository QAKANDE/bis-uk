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
              "You look beautiful when you feel beautiful" this is one of the
              many quotes I live by. I believe my work is to help women by
              enhancing their individual unique beauty
            </p>
            <p id="team-member" className="more-info-text">
              I have always been passionate about art and i’ve found that the
              best way I am able to express that is through makeup. Every time I
              hand a client the mirror, it never fails that their face lights up
              with joy. It’s very important that everyone leaves feeling
              comfortable and confident.
            </p>
            <p id="team-member" className="more-info-text">
              I highly appreciate your interest in booking our services. I hope
              you love what you see & I can’t wait to meet you all!
            </p>
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
