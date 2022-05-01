import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Videos extends React.Component {
  state = {
    naturalGlamVideos: [],
    fullGlamVideos: [],
    softGlamVideos: [],
  };
  fetchVideos = async () => {
    const response = await fetch(
      "http://localhost:3003/services/get-all-videos",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const videos = await response.json();

    const fullGlamVideos = videos.data.filter(
      (service) => service.serviceName === "Full glam"
    );
    const naturalGlamVideos = videos.data.filter(
      (service) => service.serviceName === "Natural glam"
    );
    const softGlamVideos = videos.data.filter(
      (service) => service.serviceName === "Soft glam"
    );

    this.setState({
      naturalGlamVideos,
      fullGlamVideos,
      softGlamVideos,
    });
  };
  componentDidMount = async () => {
    this.fetchVideos();
  };
  render() {
    return (
      <div>
        <Container className="mb-5 mt-5">
          <h3 className="section-title">Videos</h3>
          <h4 className="text-center mb-5">FULL GLAM</h4>
          <div className="row">
            {this.state.fullGlamVideos.map((picture, index) => {
              return (
                <video
                  width="370"
                  height="466"
                  loop
                  muted
                  controls
                  defaultMuted
                  nodownload
                  id="video-container"
                >
                  <source src={picture.url} type="video/mp4" />
                </video>
              );
            })}
          </div>
          <h4 className="text-center mb-5 mt-5">NATURAL GLAM</h4>
          <div className="row mt-5">
            {this.state.naturalGlamVideos.map((picture, index) => {
              return (
                <video
                  width="370"
                  height="466"
                  muted
                  controls
                  id="video-container"
                >
                  <source src={picture.url} type="video/mp4" />
                </video>
              );
            })}
          </div>
          <h3 className="text-center mb-5 mt-5">SOFT GLAM</h3>
          <div className="row mt-5">
            {this.state.softGlamVideos.map((picture, index) => {
              return (
                <div>
                  <video
                    width="370"
                    height="466"
                    muted
                    defaultMuted
                    autoplay
                    controls
                    nodownload
                    id="video-container"
                  >
                    <source src={picture.url} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default Videos;
