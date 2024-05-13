import React, { Component } from 'react'

export class Food extends Component {
  render() {
    return (
       <div className="food">
        <div className="container">
           <div className="bakery">
           <a href="">Fresh Food</a>
            <a href="">Bakery</a>
            <a href="">Frozen Food</a>
            <a href="">Food Cupboard</a>
            <a href="">Drinks</a>
            <a href="">Pets</a>
           </div>
            <div className="special">
                <a href="">SPECIAL OFFER</a>
                <a href="">PURCHASE THEME</a>
            </div>
        </div>
       </div>
    )
  }
}

export default Food