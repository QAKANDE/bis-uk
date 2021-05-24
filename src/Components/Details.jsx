import React, { Component } from 'react'

class Details extends Component {
  state = {
    details: {},
    images: [],
    features: [],
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id
    const response = await fetch(
      `http://localhost:3003/services/get-by-service/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const details = await response.json()
    this.setState({
      details: details,
      images: details.images,
      features: details.features,
    })
    console.log(this.state.details)
  }
  render() {
    return (
      <>
        <div className="container">
          <h2 className="section-title">{this.state.details.serviceName}</h2>
          <div className="row">
            {this.state.images.map((picture) => {
              return (
                <div className="col-md-4">
                  <div className="feature">
                    <img
                      src={picture.url}
                      className="feature-image service-image"
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <h5 className="section-title">Features</h5>
          <div className="row">
            {this.state.features.map((feature) => {
              return (
                <div className="col-md-4">
                  <ul>
                    <li>
                      <p> {feature.text}</p>
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Details
