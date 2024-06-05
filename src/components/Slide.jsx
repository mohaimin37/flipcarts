import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { productAction } from '../redux/actions/productAction';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import {NavLink} from "react-router-dom"
const renderer = ({ hours, minutes, seconds }) => {
    // Render a countdown
    return <span className='down1'>{hours}:{minutes}:{seconds} Left</span>;
};






const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};
function Slide({title,timer}) {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const {products} =  useSelector(state=>state.getProducts)
    console.log(products)
   
     const dispatch = useDispatch()
     useEffect(()=>{
       dispatch(productAction())
     },[dispatch])
  return (
 <div className='above1'>
 <div className='abovecount'>
 <h2 className='deal'>{title} </h2>
 {
 (timer === true?<>
 <img src= {timerURL} alt="" className='timer'/>
    
  </>:<></>)
 }

 <span className='down'>
 {
  (timer === true?<>
    <Countdown date={Date.now() + 5.04e+7} renderer = {renderer} >
    </Countdown>
  </>:<></>)
 }

    </span>
    <button className='viewall'>VIEW ALL</button>
 </div>
 <hr />
 
 <Carousel
  responsive={responsive}

  swipeable={false}
  draggable={false}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  centerMode = {true}
  slidesToSlide={1}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container"


>

 {
        products.map(data=>(
        <>
        <NavLink to = {`/product/${data.id}`} className="nav1">
            <img src= {data.url} class="d-block w-100" alt="product" className='cr60' />
            <h1 className='tag tag1'>{data.title.shortTitle}</h1>
            <h1 className='tag tag2'>{data.discount}</h1>
            <h1 className='tag tag3'>{data.tagline}</h1>

</NavLink>
</>
        )) 
 } 

 </Carousel>
 </div>
  
       )
}

export default Slide
