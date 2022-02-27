import React, { Component } from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { openPopupWidget, InlineWidget, isCalendlyEvent } from "react-calendly";
import Scheduler from "./Scheduler";
import "../css/Bookus.css";

class BookUs extends Component {
  state = {
    service: "",
    bookingDetails: {
      custName: "",
      custEmail: "",
      phoneNumber: "",
      additionalInfo: "",
    },
    setMeeting: true,
    errorInForm: false,
    noServiceSelected: false,
    url: "",
  };

  updateBookingDetails = (event) => {
    event.preventDefault();
    let bookingDetails = this.state.bookingDetails;
    let id = event.currentTarget.id;
    bookingDetails[id] = event.currentTarget.value;
    this.setState({
      bookingDetails,
    });
  };

  sendBookingDetails = async (e) => {
    e.preventDefault();
    if (this.state.service === "") {
      this.setState({ noServiceSelected: true });
      setTimeout(() => {
        this.setState({ noServiceSelected: false });
      }, 1200);
    } else if (
      this.state.bookingDetails.custName === "" ||
      this.state.bookingDetails.custEmail === "" ||
      this.state.bookingDetails.phoneNumber === ""
    ) {
      this.setState({ errorInForm: true });
      setTimeout(() => {
        this.setState({ errorInForm: false });
      }, 1200);
    } else {
      if (this.state.service === "natural_glam") {
        await this.setState({
          url: "https://calendly.com/bpolufade/60min",
        });
      }
      if (this.state.service === "full_glam") {
        await this.setState({
          url: "https://calendly.com/bpolufade/15min",
        });
      }
      if (this.state.service === "soft_glam") {
        await this.setState({
          url: "https://calendly.com/bpolufade/30min",
        });
      }

      const styles = {
        height: "1000px",
      };
      const pageSettings = {
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "00a2ff",
        textColor: "4d5055",
      };
      const prefill = {
        email: this.state.bookingDetails.custEmail,
        name: this.state.bookingDetails.custName,
        customAnswers: {
          a1:
            "Phone Number: " +
            " " +
            this.state.bookingDetails.phoneNumber +
            "  " +
            "Service name : " +
            " " +
            this.state.service +
            "  " +
            "Additional Info:" +
            "  " +
            this.state.bookingDetails.additionalInfo,
        },
      };
      const url = this.state.url;
      console.log("test:", url);

      openPopupWidget({ url, prefill, pageSettings });
      function isCalendlyEvent(e) {
        return e.data.event && e.data.event.indexOf("calendly") === 0;
      }
      window.addEventListener("message", function (e) {
        if (isCalendlyEvent(e)) {
          if (e.data.event === "calendly.event_scheduled") {
            window.location.href = `/payment-success/ ${this.state.custName}`;
          }
        }
      });
    }
  };

  render() {
    return (
      <>
        <Container>
          <h2 className="section-title">Book an appointment</h2>
          <form className="subscribe-form">
            <div className="d-flex justify-content-center mb-4 mt-5">
              <label for="services">Select a service</label>
              <select
                htmlFor="drop-down-form"
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
            <div className="row">
              <div className="col-md-6">
                <label>Enter your name</label>
                <input
                  htmlFor="custName"
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
                  htmlFor="email"
                  className="mb-4"
                  type="email"
                  id="custEmail"
                  size="md"
                  value={this.state.bookingDetails.custEmail}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
              <div className="col-md-6">
                <label>Phone number</label>
                <input
                  htmlFor="phoneNumber"
                  className="mb-4"
                  type="text"
                  id="phoneNumber"
                  size="md"
                  value={this.state.bookingDetails.phoneNumber}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
              <div className="col-md-6">
                <label>Additional information</label>
                <input
                  htmlFor="additionalInfo"
                  className="mb-4"
                  type="text"
                  id="additionalInfo"
                  size="md"
                  value={this.state.bookingDetails.additionalInfo}
                  onChange={(e) => this.updateBookingDetails(e)}
                />
              </div>
            </div>
            {this.state.noServiceSelected === true ? (
              <div>
                <p className="text-center" style={{ color: "red" }}>
                  Please select a service...
                </p>
              </div>
            ) : (
              <div></div>
            )}
            {this.state.errorInForm === true ? (
              <div>
                <p className="text-center" style={{ color: "red" }}>
                  Input field cannot be empty
                </p>
              </div>
            ) : (
              <div></div>
            )}
            <div className="d-flex justify-content-center">
              <button
                className="button large"
                onClick={(e) => this.sendBookingDetails(e)}
              >
                Pick a date and time
              </button>
            </div>
          </form>
        </Container>
      </>
    );
  }
}

export default BookUs;
