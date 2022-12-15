import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Banner() {
  return (
    <div className='relative '>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20' />
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/81CW3yNtc-L._SX3000_.jpg" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Q6NH9rVeL._SX3000_.jpg" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt="" />
        </div>
        <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg" alt="" />
        </div>
        {/* <div>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/61HaxKaBpkL._SX3000_.jpg" alt="" />
        </div> */}
        </Carousel>
    </div>
  )
}

export default Banner