import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import picture from '../Assets/IMG_1684.jpg'
import picture2 from '../Assets/IMG_1683.jpg'
import picture3 from '../Assets/IMG_1692.jpg'
import picture4 from '../Assets/IMG_1685.jpg'
import picture5 from '../Assets/IMG_1694.jpg'
import picture6 from '../Assets/IMG_1696.jpg'
import picture7 from '../Assets/IMG_1697.jpg'
import picture8 from '../Assets/IMG_1698.jpg'
import picture9 from '../Assets/IMG_1687.jpg'
import '../css/Services.css'

class Services extends Component {
  state = {
    services: [],
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3003/services/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const services = await response.json()
    this.setState({
      services,
    })
  }

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
                    <Link to={'/details/' + service._id}>
                      <button className="button large mt-2">See more</button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Services
