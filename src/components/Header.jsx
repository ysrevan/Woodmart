import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (   
      
        <header>
       <div className="number">
      <div className="adress">
      <div className="telephone">
        <i class="fa-solid fa-phone"></i>
        <p>(+035) 527-1710-070</p>
        </div>
        <div className="mail">
        <i class="fa-solid fa-envelope"></i>
        <p>grocery@gmail.com</p>
        </div>
      </div>
       <div className="link">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Blog</a>
          <a href="">Pages</a>
          <a href="">Elements</a>
          <a href="">Buy</a>
        </div>
       </div>

       <div className="picture">
        <img className='woodmart' src="https://woodmart.b-cdn.net/wp-content/themes/woodmart/images/wood-logo-dark.svg" alt="" />
        <div className="icon">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
        </header>
      
    )
  }
}

export default Header
