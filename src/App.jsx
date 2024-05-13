import React, { Component } from 'react'
import SingleCard from './components/SingleCard'
import phoneProducts from './data/product'
import Header from './components/Header'
import Food from './components/Food'
import Carousel from './components/Carousel'
import foodProducts from './data/product'
import SingleCard1 from './components/SingleCard1'
import organicProducts from './data/product1'
import SingleCard2 from './components/SingleCard2'
import offerProducts from './data/product2'
import SingleCard3 from './components/SingleCard3'
import categoryProducts from './data/product3'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
     <div className='container'>
     <Header />
     </div>
     <Food />
     <Carousel />
<div className="container">
<div className="top">
<h4 className="new">DISCOUNTS AND PROMOTIONS</h4>
<div className='featured'>
    <a href="#">NEW</a>
    <a href="#">FEATURED</a>
    <a href="#">TOP SELLERS</a>
  </div>
  </div>
  <div className="row ">
   {foodProducts.map(item=>(
       <SingleCard
       title={item.title}
       price={item.price}
       photo={item.img}
        />
   ))}
  </div>
</div>

<div className="container">
  <div className="row ">
   {organicProducts.map(item=>(
       <SingleCard1
       title={item.title}
       name={item.name}
       proporties={item.proporties}
       button={item.button}
       photo={item.img}
        />
   ))}
  </div>
</div>

<div className="container">
<div className="top">
<h4 className="new">NEW OFFERS</h4>
<div className='featured'>
    <a href="#">NEW</a>
    <a href="#">FEATURED</a>
    <a href="#">TOP SELLERS</a>
  </div>
  </div>
  <div className="row">
    {offerProducts.map(item=>(
      <SingleCard2 
      title={item.title}
      price={item.price}
      photo={item.img}
      />
    ))}
  </div>
</div>

<div className="container">
  <h4 className='popular'>Popular Categories</h4>
  <div className="row">
    {categoryProducts.map(item=>(
      <SingleCard3
      title={item.title}
      photo={item.img}
       />
    ))}
  </div>
</div>

<Footer />
      </>

    )
  }
}

export default App