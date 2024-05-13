import React, { Component } from 'react'

export class SingleCard3 extends Component {
  render() {
    return (
    <div className="card col-12 col-sm-6 col-md-3 foods4">
  <img src={this.props.photo} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-text">{this.props.title}</h5>
  </div>
</div>
    )
  }
}

export default SingleCard3