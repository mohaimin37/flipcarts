import React from 'react'
import Slide from './Slide'
function Slidebrother({title,timer}) {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <div className='div100'>
 <div className='div101'>
   <Slide title= "Deal of the Day " timer = {true}></Slide>

    </div>
    <div className='div102'>
    <img src={adURL} alt="" className='img102' />

    </div>
    </div>
   
  )
}

export default Slidebrother
