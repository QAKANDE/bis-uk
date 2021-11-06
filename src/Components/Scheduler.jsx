import React, { Component } from "react";
// import { openPopupWidget, InlineWidget, isCalendlyEvent } from 'react-calendly'

class Scheduler extends Component {
  state = {
    close: false,
    emailFromProps: "",
    firstNameFromProps: "",
    lastNameFromProps: "",
    addedInfo: "",
  };

  closeW = () => {
    this.setState({ close: false });
  };

  componentDidMount = () => {
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
      email: this.props.emailFromProps,
      name: this.props.custName,
      customAnswers: {
        a1:
          "Customer Number:" +
          " " +
          this.props.number +
          " " +
          "Service name : " +
          " " +
          this.props.serviceName +
          " " +
          "additional info:" +
          " " +
          this.props.addedInfo,
      },
    };
    const url = "https://calendly.com/quadriomofolarinakande/60min";

    // openPopupWidget({ url, prefill, pageSettings });
    function isCalendlyEvent(e) {
      console.log(e.data.event);
      return e.data.event && e.data.event.indexOf("calendly") === 0;
    }

    window.addEventListener("message", function (e) {
      if (isCalendlyEvent(e)) {
        if (e.data.event === "calendly.event_scheduled") {
          alert("success");
          window.removeEventListener("message", () => {
            this.setState({ close: true });
            alert("suc");
          });
        }
      }
    });
  };

  render() {
    return <div></div>;
  }
}

export default Scheduler;
