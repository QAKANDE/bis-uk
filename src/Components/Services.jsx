import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../css/Services.css";

class Services extends Component {
  state = {
    services: [],
  };

  componentDidMount = async () => {
    const response = await fetch("http://localhost:3003/services/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const services = await response.json();
    this.setState({
      services,
    });
  };

  render() {
    return (
      <div className="fullwidth-block features-section">
        <div className="container">
          <h2 className="section-title">our Services</h2>
          <div className="row">
            {this.state.services.map((service, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="feature">
                    <img
                      src={service.images[0].url}
                      className="feature-image service-image"
                    />
                    <h3 className="feature-title mt-5">
                      {service.serviceName}
                    </h3>
                    <p>£ {service.price}</p>
                    <Row>
                      <Col>
                        <Link to={"/details/" + service._id}>
                          <button className="button mt-2">See more</button>
                        </Link>
                      </Col>
                      <Col>
                        <Link to={"/bookus/"}>
                          <button className="button  mt-2">Book now</button>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
