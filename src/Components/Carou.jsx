import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../css/Carousel.css";

class Carou extends Component {
  state = {
    carouselImages: [],
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://my-app-jqli3.ondigitalocean.app/services/get-all-images",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const services = await response.json();
    services.data.splice(2, 1);
    this.setState({ carouselImages: services.data });
  };
  render() {
    return (
      <div>
        <Carousel>
          {this.state.carouselImages.map((im, index) => {
            return (
              <Carousel.Item interval={500} key={index}>
                <img
                  src={im.url}
                  alt="First slide"
                  style={{
                    width: "100%",
                    height: "75vh",
                    objectFit: "cover",
                  }}
                />
                <Carousel.Caption>
                  <h3 style={{ color: "#aea9ad" }}>{im.serviceName}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Carou;
