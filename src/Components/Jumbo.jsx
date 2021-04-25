import React, { Component } from 'react'
import slider1 from '../Assets/Images/slider-1@2x.jpg'
import slider2 from '../Assets/Images/slider-2@2x.jpg'
import slider3 from '../Assets/Images/slider-3@2x.jpg'

class Jumbo extends Component {
  state = {}
  render() {
    return (
      <div className="hero hero-slider">
        <ul className="slides">
          <li
            style={{
              backgroundImage: `url("https://res.cloudinary.com/quadri/image/upload/v1619362530/pexels-domineves-anthony-3681538_1_sbvika.jpg")`,
            }}
          >
            <div className="container">
              <h2 className="slider-title">BisBeautyUK</h2>
              <p>Enhance your beauty with a soft touch</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Jumbo
