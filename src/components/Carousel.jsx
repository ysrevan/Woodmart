import React, { Component } from 'react'

export class Carousel extends Component {
  render() {
    return (
 <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
  
      <div className="photo-1">
      <img src="https://woodmart.b-cdn.net/wp-content/uploads/2020/06/wood-food-market-slider-bg-1-opt-1.jpg" alt="" /> 
      <div className="carousel-text">
        <p className="mb-2 search"></p>
        <h5 className="search">WEEKLY DISCOUNTS</h5>
        <h1 className="my-3 search">-30% Discount<br></br>
         Products On Barilla</h1>
         <p>Chances are there wasn't collaboration communication there<br></br>
         wasn't a process agreed upon or specified</p>
        <button>Read More</button>
      </div>
      </div>
     <div className="photo1-2">
     <img src="https://woodmart.b-cdn.net/wp-content/uploads/2021/06/wood-food-market-slider-1-opt.png.webp" alt="" />
     </div>

  
    </div>
    <div className="carousel-item">
      
      <div className="photo-2">
      <div className="carousel-text">
        <h5 className="mb-2 search">FRUITS PREMIUM DRINK</h5>
        <h1 className="search">Best Juicels<br></br>
        For Drink For You</h1>
        <p className="my-3 search">It's like saying you're a bad designer,use less bold text, don't use<br></br>
        italics in every other paragraph. True enough.
        </p>
        <button>Read More</button>
      </div>
      <img src="https://woodmart.b-cdn.net/wp-content/uploads/2020/06/wood-food-market-slider-bg-3-opt.jpg" alt="..." />
      </div>
      <div className="photo2-2">
        <img src="https://woodmart.b-cdn.net/wp-content/uploads/2021/06/wood-food-market-slider-3-opt.png.webp" alt="" />
      </div>
    </div>
    <div className="carousel-item">
    
      <div className="photo-3">
      <div className="carousel-text">
        <p className="mb-2 search">NEW SAUCES RANGE</p>
        <h1 className="search">Korean Style<br></br>
        Barbecue Sauce</h1>
        <p>Chances are there wasn't collaboration communication there<br></br>
         wasn't a process agreed upon or specified</p>
        <button>Read More</button>
      </div>
        <img src="https://woodmart.b-cdn.net/wp-content/uploads/2022/06/wood-food-market-slider-bg-3.jpg" alt="" />
      </div>
      <div className="photo3-3">
        <img src="https://woodmart.b-cdn.net/wp-content/uploads/2022/06/wood-food-market-slider-2-344x394.png" alt="" />
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    )
  }
}

export default Carousel