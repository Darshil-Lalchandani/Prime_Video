import React from 'react'
import data from '../data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Latest = () => {
  const datarr = data.filter(item => item.latest === true)
  const dataLatest = datarr.map(item => {
    return (
      <div key={item.id}>
        <img src={item.img} alt={item.name}/>
      </div>
    )
  })
  return (
    <div className='latest ml-md-5'>
      <h4 className='text-white mt-2'>Latest</h4>
      <Carousel
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
        centerMode
        centerSlidePercentage={window.innerWidth > 1025 ? 33.33 : 100}
        showStatus={false}
      >
        {dataLatest}
      </Carousel>
    </div>
  )
}

export default Latest
