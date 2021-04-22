import React, { Component } from 'react'
import iconMapSmall from '../Assets/Images/icon-map-small.png'
import iconPhoneSmall from '../Assets/Images/icon-phone-small.png'
import iconEnvelopeSmall from '../Assets/Images/icon-envelope-small.png'
import { Container, Form, Alert } from 'react-bootstrap'

class Footer extends Component {
  state = {
    messageDetails: {
      name: '',
      email: '',
      phoneNumber: '',
    },
  }

  updateSendMessageDetails = (e) => {
    let messageDetails = this.state.messageDetails
    let id = e.currentTarget.id
    messageDetails[id] = e.currentTarget.value
    this.setState({ messageDetails })
  }
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget contact-widget">
                <h3 className="widget-title">Contact</h3>
                <div className="contact-info">
                  <address>
                    <img src={iconMapSmall} className="icon" />
                    <p>
                      <strong>BisUk</strong> 563 Avenue Street, New York
                    </p>
                  </address>
                  <a href="tel:(500)942042259" className="phone">
                    <img src={iconPhoneSmall} className="icon" />
                    (500)942042259
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget">
                <h3 className="widget-title">Social Media</h3>

                <div className="social-links">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="#" className="mx-2">
                    <i className="fa fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="widget">
                <h3 className="widget-title">Send us a message</h3>
                <form className="subscribe-form">
                  <input
                    className="mb-4"
                    type="email"
                    id="email"
                    value={this.state.messageDetails.email}
                    size="md"
                    placeholder="Enter your email"
                    onChange={(e) => this.updateSendMessageDetails(e)}
                  />
                  <input
                    className="mb-4"
                    type="text"
                    id="phoneNumber"
                    value={this.state.messageDetails.phoneNumber}
                    placeholder="Enter the best number to reach you on"
                    size="md"
                    onChange={(e) => this.updateSendMessageDetails(e)}
                  />
                  <input
                    className="mb-4"
                    type="text"
                    id="message"
                    value={this.state.messageDetails.message}
                    placeholder="Enter your message"
                    size="md"
                    onChange={(e) => this.updateSendMessageDetails(e)}
                  />
                  <button className="button large">Send message</button>
                </form>
              </div>
            </div>
          </div>
          <div className="colophon">
            <p>
              Copyright 2021 BizBeautyUK. Designed by Quadri Omofolarin Akande.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
