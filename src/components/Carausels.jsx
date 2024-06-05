import React, { Fragment } from 'react'


function Carausels() {
  return (
    <Fragment>
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
  <div class="carousel-inner" >
    <div class="carousel-item active" >
      <img src= 'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50 " class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50 " class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src='https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50'  class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </Fragment>
  )
}

export default Carausels
