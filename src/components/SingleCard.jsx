import React, { Component } from 'react'

export class SingleCard extends Component {
  render() {
    return (
       <>
  <div className="card col-12 col-sm-6 col-md-2 foods ">
    <img src={this.props.photo} className="card-img-top" alt="..." />
    <div className="card-body">
      <h6 className="card-title text-center">{this.props.title}</h6>
      <p className="card-text text-center">${this.props.price}</p>
    </div>
  </div>
       </>
    )
  }
}

export default SingleCard





