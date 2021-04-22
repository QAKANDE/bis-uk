import React, { Component } from 'react'
import { Container, Form, Col, Button, Row } from 'react-bootstrap'
import '../css/Bookus.css'

class BookUs extends Component {
  state = {
    service: '',
    bookingDetails: {
      dateOfAppointment: '',
      timeOfAppointment: '',
      custName: '',
      custEmail: '',
      addressLine1: '',
      addressLine2: '',
      postCode: '',
      additionalInfo: '',
    },
  }

  updateBookingDetails = (event) => {
    event.preventDefault()
    let bookingDetails = this.state.bookingDetails
    let id = event.currentTarget.id
    bookingDetails[id] = event.currentTarget.value
    this.setState({
      bookingDetails,
    })
  }
  render() {
    return (
      <>
        <Container>
          <h2 className="section-title">Book an appointment</h2>
          <form className="subscribe-form">
            <div className="d-flex justify-content-center mb-4 mt-5">
              <label for="services">Select a service</label>
              <select
                className="mx-3"
                id="drop-down-form"
                onChange={(e) =>
                  this.setState({ service: e.currentTarget.value })
                }
              >
                <option value="None">Select a service</option>
                <option value="natural_glam">Natural glam</option>
                <option value="full_glam">Full glam</option>
                <option value="soft_glam">Soft glam</option>
              </select>
            </div>
            <div>
              <label>Pick a date</label>
              <input
                className="mb-4"
                type="date"
                id="dateOfAppointment"
                size="md"
                value={this.state.bookingDetails.dateOfAppointment}
                onChange={(e) => this.updateBookingDetails(e)}
              />
            </div>
            <div>
              <label>Pick a time</label>
              <input
                className="mb-4"
                type="time"
                id="timeOfAppointment"
                size="md"
                value={this.state.bookingDetails.timeOfAppointment}
                onChange={(e) => this.updateBookingDetails(e)}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Enter your name</label>
                <input
                  className="mb-4"
                  type="text"
                  id="custName"
                  size="md"
                  value={this.state.bookingDetails.custName}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
              <div className="col-md-6">
                <label>Enter your email</label>
                <input
                  className="mb-4"
                  type="email"
                  id="custEmail"
                  size="md"
                  value={this.state.bookingDetails.custEmail}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
              <div className="col-md-6">
                <label>Address Line 1</label>
                <input
                  className="mb-4"
                  type="text"
                  id="addressLine1"
                  size="md"
                  value={this.state.bookingDetails.addressLine1}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
              <div className="col-md-6">
                <label>Address Line 2</label>
                <input
                  className="mb-4"
                  type="text"
                  id="addressLine2"
                  size="md"
                  value={this.state.bookingDetails.addressLine2}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
              <div className="col-md-6">
                <label>Post Code</label>
                <input
                  className="mb-4"
                  type="text"
                  id="postCode"
                  size="md"
                  value={this.state.bookingDetails.postCode}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
              <div className="col-md-6">
                <label>Additional information</label>
                <input
                  className="mb-4"
                  type="text"
                  id="additionalInfo"
                  size="md"
                  value={this.state.bookingDetails.additionalInfo}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="button large">Book now</button>
            </div>
          </form>
        </Container>
      </>
    )
  }
}

export default BookUs
