import React, { Component } from "react";
import figure1 from "../Assets/bisbeauty-white-logo2.png";
import "../css/Services.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="fullwidth-block information-section">
        <div className="container">
          <h2 className="section-title">Information</h2>
          <p className="more-info-text">
            To ensure a flawless face beat, please ensure your eyebrows are in
            good shape. If you would like to book us to travel for events such
            as weddings, please contact us for more information.
          </p>
          <p className="more-info-text">
            Please ensure to inform us if you would like to cancel or rebook
            your appointment <span>3 days</span> before the day of your initial
            appointment, if not you will lose your deposit.
          </p>
          <p className="more-info-text">
            Please note that all makeup will be provided for you by us. If you
            choose to bring your own products - the price will remain the same.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
