import React from 'react'
import data from '../data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Kids = () => {
  const datarr = data.filter(item => item.kids === true)
  const dataKids = datarr.map(item => {
    return (
      <div key={item.id}>
        <img src={item.img} alt={item.name}/>
      </div>
    )
  })
  return (
    <div className='kids ml-md-5'>
      <h4 className='text-white mt-2'>Kids</h4>
      <Carousel
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
        centerMode
        centerSlidePercentage={window.innerWidth > 1025 ? 33.33 : 100}
        showStatus={false}
      >
        {dataKids}
      </Carousel>
    </div>
  )
}

export default Kids
