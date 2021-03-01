import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Controller, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import "./css.css"

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function ImageSwiper({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (

    <div id="gallery-top">
      <br/>
      <Swiper
        id="gallery-top-swiper"
        thumbs={{swiper: thumbsSwiper}}
        tag="section"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}

      >
        {[...images.entries()].map(([index, image]) =>
          <SwiperSlide key={index}>
            <img src={image} id="special-image" alt="Slider" style={{height: "400px", width: "400px"}} className=" mt-4 rounded d-block  img-fluid"/>
          </SwiperSlide>
        )}
      </Swiper>

      <Swiper
        className="container"
        id="gallery-thumbs"
        spaceBetween={5}
        slidesPerView={5}
        onSwiper={setThumbsSwiper}
      >
        {[...images.entries()].map(([index, image]) =>
          <SwiperSlide key={index}>
            <img src={image} id="special-image" alt="Slider" className="gallery-thumbs mt-4 rounded mx-auto d-block img-responsive img-fluid"/>
          </SwiperSlide>
        )}
      </Swiper>

      <br/>
    </div>
  );
}

export default ImageSwiper;