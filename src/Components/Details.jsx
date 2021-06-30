import React, { Component } from 'react'

class Details extends Component {
  state = {
    details: {},
    images: [],
    features: [],
    pageNumber: 1,
    next_page: undefined,
    nextButton: false,
    prevButton: true,
  }
  paginator(items, current_page, per_page_items) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,
      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page)

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems,
    }
  }

  fetchAllDetails = async () => {
    const id = this.props.match.params.id
    const response = await fetch(
      `http://localhost:3003/services/get-by-service/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const details = await response.json()
    const paginated = this.paginator(details.images, this.state.pageNumber, 3)
    this.setState({
      details: details,
      images: paginated.data,
      features: details.features,
      next_page: paginated.next_page,
    })
  }
  increasePaginate = () => {
    if (this.state.next_page === null) {
      this.setState({ nextButton: true })
    } else if (this.state.next_page !== null || this.state.next_page >= 1) {
      this.setState({
        pageNumber: this.state.pageNumber + 1,
        prevButton: false,
      })
    }
    this.fetchAllDetails()
  }
  decreasePaginate = () => {
    if (this.state.pageNumber === 1) {
      this.setState({ prevButton: true })
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 })
    }
    this.fetchAllDetails()
  }

  componentDidMount = async () => {
    this.fetchAllDetails()
  }
  render() {
    return (
      <>
        <div className="container">
          <h2 className="section-title">{this.state.details.serviceName}</h2>
          <div className="row">
            {this.state.images.map((picture) => {
              return (
                <div className="col-md-4">
                  <div className="feature">
                    <img
                      src={picture.url}
                      className="feature-image service-image"
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div id="paginator-ultimate-wrapper">
            <div id="paginator-wrapper">
              <button
                onClick={() => this.increasePaginate()}
                disabled={this.state.nextButton}
                className="paginator-buttons button large"
              >
                Next
              </button>
              <p>{this.state.pageNumber}</p>
              <button
                onClick={() => this.decreasePaginate()}
                disabled={this.state.prevButton}
                className="paginator-buttons button large"
              >
                Prev
              </button>
            </div>
          </div>
          <h5 className="section-title">Features</h5>
          <div className="row">
            {this.state.features.map((feature) => {
              return (
                <div className="col-md-4">
                  <ul>
                    <li>
                      <p> {feature.text}</p>
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Details
