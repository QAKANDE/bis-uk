import React, { Component } from "react";
import { Container, Card, CardDeck, CardGroup } from "react-bootstrap";
import vid from "../../src/Assets/IMG_1686.MOV";
import "../css/Portfolio.css";

class Portfolio extends Component {
  state = {
    arr: [1, 2, 3, 4, 5, 6],
    fullGlamImages: [],
    fullGlamFeatures: [],
    naturalGlamFeatures: [],
    naturalGlamImages: [],
    softGlamFeatures: [],
    softGlamImages: [],
    naturalGlam: [],
    softGlam: [],
    pageNumber: 1,
    naturalPageNumber: 1,
    softPageNumber: 1,
    next_page_full_glam: undefined,
    next_page_soft_glam: undefined,
    next_page_natural_glam: undefined,
    prev_page: null,
    nextButton: false,
    prevButton: true,
    nextButtonNatural: false,
    prevButtonNatural: true,
    nextButtonSoft: false,
    prevButtonSoft: true,
    naturalGlamVideos: [],
    fullGlamVideos: [],
    softGlamVideos: [],
  };

  paginator(items, current_page, per_page_items) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems,
    };
  }

  fetchDetails = async () => {
    const response = await fetch(
      "https://bisbeautyukbackend-rqp7g.ondigitalocean.app/services/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const services = await response.json();

    const fullGlam = services.filter(
      (service) => service.serviceName === "Full Glam"
    );
    const naturalGlam = services.filter(
      (service) => service.serviceName === "Natural Glam"
    );
    const softGlam = services.filter(
      (service) => service.serviceName === "Soft Glam"
    );

    const paginateFullGlam = this.paginator(
      fullGlam[0].images,
      this.state.pageNumber,
      3
    );
    const paginateNaturalGlam = this.paginator(
      naturalGlam[0].images,
      this.state.naturalPageNumber,
      3
    );
    const paginateSoftGlam = this.paginator(
      softGlam[0].images,
      this.state.softPageNumber,
      3
    );
    this.setState({
      fullGlamFeatures: fullGlam[0].features,
      fullGlamImages: paginateFullGlam.data,
      naturalGlamFeatures: naturalGlam[0].features,
      naturalGlamImages: paginateNaturalGlam.data,
      softGlamFeatures: softGlam[0].features,
      softGlamImages: paginateSoftGlam.data,
      next_page_full_glam: paginateFullGlam.next_page,
      next_page_soft_glam: paginateSoftGlam.next_page,
      next_page_natural_glam: paginateNaturalGlam.next_page,
    });
  };

  fetchVideos = async () => {
    const response = await fetch(
      "https://bisbeautyukbackend-rqp7g.ondigitalocean.app/services/get-all-videos",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const videos = await response.json();
    console.log(videos);

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
    console.log(this.state.naturalGlamVideos);
  };

  componentDidMount = async () => {
    this.fetchDetails();
    this.fetchVideos();
  };
  // increasePaginate = () => {
  //   if (this.state.next_page_full_glam === null) {
  //     this.setState({ nextButton: true });
  //   } else if (
  //     this.state.next_page_full_glam !== null ||
  //     this.state.next_page_full_glam >= 1
  //   ) {
  //     this.setState({
  //       pageNumber: this.state.pageNumber + 1,
  //       prevButton: false,
  //     });
  //   }
  //   this.fetchDetails();
  // };
  // decreasePaginate = () => {
  //   if (this.state.pageNumber === 1) {
  //     this.setState({ prevButton: true });
  //   } else {
  //     this.setState({ pageNumber: this.state.pageNumber - 1 });
  //   }
  //   this.fetchDetails();
  // };
  // increaseNaturalGlamPaginate = () => {
  //   if (this.state.next_page_natural_glam === null) {
  //     this.setState({ nextButtonNatural: true });
  //   } else if (
  //     this.state.next_page_natural_glam !== null ||
  //     this.state.next_page_natural_glam >= 1
  //   ) {
  //     this.setState({
  //       naturalPageNumber: this.state.naturalPageNumber + 1,
  //       prevButtonNatural: false,
  //     });
  //   }
  //   this.fetchDetails();
  // };
  // decreaseNaturalGlamPaginate = () => {
  //   if (this.state.naturalPageNumber === 1) {
  //     this.setState({ prevButtonNatural: true });
  //   } else {
  //     this.setState({ naturalPageNumber: this.state.naturalPageNumber - 1 });
  //   }
  //   this.fetchDetails();
  // };
  // increaseSoftGlamPaginate = () => {
  //   if (this.state.next_page_soft_glam === null) {
  //     this.setState({ nextButtonSoft: true });
  //   } else if (
  //     this.state.next_page_soft_glam !== null ||
  //     this.state.next_page_soft_glam >= 1
  //   ) {
  //     this.setState({
  //       softPageNumber: this.state.softPageNumber + 1,
  //       prevButtonSoft: false,
  //     });
  //   }
  //   this.fetchDetails();
  // };
  // decreaseSoftGlamPaginate = () => {
  //   if (this.state.softPageNumber === 1) {
  //     this.setState({ prevButtonSoft: true });
  //   } else {
  //     this.setState({ softPageNumber: this.state.softPageNumber - 1 });
  //   }
  //   this.fetchDetails();
  // };
  render() {
    return (
      <Container className="mb-5 mt-5">
        <h2 className="section-title">Previous works</h2>
        <h3 className="text-center mb-5">FULL GLAM</h3>
        <div className="row">
          {this.state.fullGlamFeatures.map((feature, index) => {
            return (
              <div className="col-md-4" key={index}>
                <p className="feature-wrapper">{feature.text}</p>
              </div>
            );
          })}
        </div>
        <div className="row mt-5">
          {this.state.fullGlamImages.map((picture, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={picture.url} className="service-image" />
              </div>
            );
          })}
        </div>
        <div className="row mt-5">
          {this.state.fullGlamVideos.map((picture, index) => {
            return (
              <video
                width="370"
                height="466"
                controls
                muted
                id="video-container"
              >
                <source src={picture.url} type="video/mp4" />
                <source src={picture.url} type="video/ogg" />
                Your browser doesddd not support the video tag.
              </video>
            );
          })}
        </div>
        {/* <div id="paginator-ultimate-wrapper">
          <div id="paginator-wrapper">
            <button
              onClick={() => this.increasePaginate()}
              disabled={this.state.nextButton}
              className="paginator-buttons button large"
            >
              Next
            </button>
            <p>{this.state.pageNumber}</p>
            <button
              onClick={() => this.decreasePaginate()}
              disabled={this.state.prevButton}
              className="paginator-buttons button large"
            >
              Prev
            </button>
          </div>
        </div> */}

        <h3 className="text-center mb-5 mt-5">NATURAL GLAM</h3>

        <div className="row">
          {this.state.naturalGlamFeatures.map((feature, index) => {
            return (
              <div className="col-md-4" key={index}>
                <p className="feature-wrapper">{feature.text}</p>
              </div>
            );
          })}
        </div>
        <div className="row mt-5">
          {this.state.naturalGlamImages.map((picture, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={picture.url} className="service-image" />
              </div>
            );
          })}
        </div>
        <div className="row mt-5">
          {this.state.naturalGlamVideos.map((picture, index) => {
            return (
              <video
                width="370"
                height="466"
                controls
                muted
                id="video-container"
              >
                <source src={picture.url} type="video/mp4" />
                <source src={picture.url} type="video/ogg" />
                Your browser doesddd not support the video tag.
              </video>
            );
          })}
        </div>
        <h3 className="text-center mb-5 mt-5">SOFT GLAM</h3>
        <div className="row">
          {this.state.softGlamFeatures.map((feature, index) => {
            return (
              <div className="col-md-4" key={index}>
                <p className="feature-wrapper">{feature.text}</p>
              </div>
            );
          })}
        </div>
        <div className="row mt-5">
          {this.state.softGlamImages.map((picture, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={picture.url} className="service-image" />
              </div>
            );
          })}
        </div>
        <div className="row mt-5">
          {this.state.softGlamVideos.map((picture, index) => {
            return (
              <video
                width="370"
                height="466"
                controls
                muted
                id="video-container"
              >
                <source src={picture.url} type="video/mp4" />
                <source src={picture.url} type="video/ogg" />
                Your browser doesddd not support the video tag.
              </video>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Portfolio;
