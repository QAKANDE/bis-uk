import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import picture from '../Assets/IMG_1684.jpg'
import picture2 from '../Assets/IMG_1683.jpg'
import picture3 from '../Assets/IMG_1692.jpg'
import picture4 from '../Assets/IMG_1685.jpg'
import picture5 from '../Assets/IMG_1694.jpg'
import picture6 from '../Assets/IMG_1696.jpg'
import picture7 from '../Assets/IMG_1697.jpg'
import picture8 from '../Assets/IMG_1698.jpg'
import picture9 from '../Assets/IMG_1687.jpg'

class Carou extends Component {
  state = {
    carouselImages: [],
  }

  componentDidMount = async () => {
    const response = await fetch(
      'http://localhost:3003/services/get-all-images',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const services = await response.json()
    services.data.splice(2, 1)
    this.setState({ carouselImages: services.data })
  }
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
                    width: '100%',
                    height: '95vh',
                    objectFit: 'cover',
                    opacity: '0.4',
                  }}
                />
                <Carousel.Caption>
                  <h3 style={{ color: '#aea9ad' }}>{im.serviceName}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default Carou
