import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class PaymentSuccess extends Component {
  state = {
    customerName: this.props.match.params.name,
  }
  render() {
    return (
      <Container>
        <div
          style={{
            backgroundColor: '#1b181b',
            width: '100%',
            marginTop: '4rem',
            marginBottom: '4rem',
          }}
        >
          <div style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <p className="text-center">Dear {this.state.customerName}</p>
            <p className="text-center">
              You have successfully made a $15 advance payment for BisBeautyUK
              services.
            </p>
            <p className="text-center">
              Please check your email for your receipt and booking details.
            </p>
            <p className="text-center">LOOKING FORWARD TO SEE YOU SOON!!!</p>
          </div>
        </div>
      </Container>
    )
  }
}

export default PaymentSuccess
