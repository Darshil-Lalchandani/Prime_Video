import React from 'react'
import data from '../data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Bollywood = () => {
  const datarr = data.filter(item => item.bollywood === true)
  const dataBollywood = datarr.map(item => {
    return (
      <div key={item.id} className='img-div'>
        <img src={item.img} alt={item.name}/>
      </div>
    )
  })
  return (
    <div className='bollywood ml-md-5'>
      <h4 className='text-white mt-2'>Bollywood</h4>
      <Carousel
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
        centerMode
        centerSlidePercentage={window.innerWidth > 1025 ? 33.33 : 100}
        showStatus={false}>
        {dataBollywood}
      </Carousel>
    </div>
  )
}

export default Bollywood
