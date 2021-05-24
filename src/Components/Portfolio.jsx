import React, { Component } from 'react'
import { Container, Card, CardDeck, CardGroup } from 'react-bootstrap'
import picture from '../Assets/girl.jpg'
import '../css/Portfolio.css'

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
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3003/services/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const services = await response.json()

    const fullGlam = services.filter(
      (service) => service.serviceName === 'Full Glam',
    )
    const naturalGlam = services.filter(
      (service) => service.serviceName === 'Natural Glam',
    )
    const softGlam = services.filter(
      (service) => service.serviceName === 'Soft Glam',
    )
    this.setState({
      fullGlamFeatures: fullGlam[0].features,
      fullGlamImages: fullGlam[0].images,
      naturalGlamFeatures: naturalGlam[0].features,
      naturalGlamImages: naturalGlam[0].images,
      softGlamFeatures: softGlam[0].features,
      softGlamImages: softGlam[0].images,
    })
    console.log(this.state.naturalGlamFeatures)
  }
  render() {
    return (
      <Container className="mb-5 mt-5">
        <h2 className="section-title">Previous works</h2>
        <h3 className="text-center mb-5">FULL GLAM</h3>
        <h3 className="mb-3">Features</h3>
        <div className="row">
          {this.state.fullGlamFeatures.map((feature, index) => {
            return (
              <div className="col-md-4" key={index}>
                <p className="feature-wrapper">{feature.text}</p>
              </div>
            )
          })}
        </div>
        <div className="row mt-5">
          {this.state.fullGlamImages.map((picture, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={picture.url} className="service-image" />
              </div>
            )
          })}
        </div>
        <h3 className="text-center mb-5 mt-5">NATURAL GLAM</h3>
        <h3 className="mb-3">Features</h3>
        <div className="row">
          {this.state.naturalGlamFeatures.map((feature, index) => {
            return (
              <div className="col-md-4" key={index}>
                <p className="feature-wrapper">{feature.text}</p>
              </div>
            )
          })}
        </div>
        <div className="row mt-5">
          {this.state.naturalGlamImages.map((picture, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={picture.url} className="service-image" />
              </div>
            )
          })}
        </div>
        <h3 className="text-center mb-5 mt-5">SOFT GLAM</h3>
        <h3 className="mb-3">Features</h3>
        <div className="row">
          {this.state.softGlamFeatures.map((feature, index) => {
            return (
              <div className="col-md-4" key={index}>
                <p className="feature-wrapper">{feature.text}</p>
              </div>
            )
          })}
        </div>
        <div className="row mt-5">
          {this.state.softGlamImages.map((picture, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={picture.url} className="service-image" />
              </div>
            )
          })}
        </div>
      </Container>
    )
  }
}

export default Portfolio
