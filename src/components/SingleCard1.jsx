import React, { Component } from 'react'

export class SingleCard1 extends Component {
  render() {
    return (

  <div className="card  col-12 col-sm-6 col-md-6 foods2">
    <img src={this.props.photo} className="card-img" alt="..." />
    <div className="card-img-overlay">
      <p className="card-title">{this.props.title}</p>
      <h3 className="card-text">{this.props.name}</h3>
      <p className="card-text">{this.props.proporties}</p>
      <button className='btn btn-danger'>{this.props.button}</button>
    </div>
  </div>


    )
  }
}

export default SingleCard1

