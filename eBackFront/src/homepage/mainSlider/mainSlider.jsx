import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import http from "../../form/httpService";
import "swiper/swiper-bundle.css";
import "./css.css";
import { apiRoot } from "../../constants";
import { Fade } from "react-awesome-reveal";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function MainSlider() {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + "/site-data/sliders/");
      setSliders(res.data.data);
    };
    getUrl();
  }, []);
  return (
    <div id="main-slider">
      <Swiper
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        loop={{ loop: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {[...sliders.entries()].map(([index, slider]) => (
          <SwiperSlide key={index}>
            <img
              src={slider.image}
              className="rounded d-block img-fluid"
              alt="#"
            />

            <div className="centered text-center">
              <Fade cascade>
                <h2>{slider.title}</h2>
                <p>{slider.text}</p>
                <button className="btn mt-3">shop now</button>
              </Fade>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainSlider;
