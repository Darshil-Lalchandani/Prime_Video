import React from 'react'
import data from '../data'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Featured = () => {
  const datarr = data.filter(item => item.featured === true)
  const dataFeatured = datarr.map(item => {
    return (
      <div key={item.id}>
        <img src={item.img} alt={item.name}/>
      </div>
    )
  })
  return (
    <>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} mt-5>
        {dataFeatured}
      </Carousel>
    </>
  )
}

export default Featured
