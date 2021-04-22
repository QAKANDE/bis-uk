import React, { Component } from 'react'
import { Container, Card, CardDeck, CardGroup } from 'react-bootstrap'
import picture from '../Assets/girl.jpg'
import '../css/Portfolio.css'

class Portfolio extends Component {
  state = {
    arr: [1, 2, 3, 4, 5, 6],
  }
  render() {
    return (
      <Container>
        <h2 className="section-title">Previous works</h2>
        <CardGroup>
          <div className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-3 mb-4 text-center">
            {this.state.arr.map((r) => {
              return (
                <Card className="col-md-6">
                  <Card.Img variant="top" src={picture} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              )
            })}
          </div>
        </CardGroup>
      </Container>
    )
  }
}

export default Portfolio
