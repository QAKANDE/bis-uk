import React, { Component } from 'react'

class Payment extends Component {
  state = {
    paymentSuccess: false,
    paymentError: false,
  }

  componentDidMount = () => {
    window.paypal
      .Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '0.01',
                },
              },
            ],
          })
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            window.location.href =
              '/payment-success/' + details.payer.name.given_name
          })
        },
        onError: function (err) {
          alert('An error occured with your payment,please try again ...')
        },
      })
      .render('#paypal-button-container')
  }
  render() {
    return (
      <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <h3 className="text-center">Please pay a deposit of £15</h3>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div id="paypal-button-container"></div>
        </div>
      </div>
    )
  }
}

export default Payment
