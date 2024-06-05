import React from 'react'

function Banner() {
    const ImageURL = [
        'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
        'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
    ];
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <div className='banner'>
        {
            ImageURL.map(data=>{
                return(
                    <>
                        <img src={data} alt="" className='bannerdata' />
                    </>
                )
            })
        }
    <img src={url} alt=""  className='covid' />

    </div>
  )
}

export default Banner
