import React, { useEffect, useState } from "react";
import "./css.css";
import http from "../../form/httpService";
import { apiRoot } from "../../constants";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../item/item";

SwiperCore.use([Navigation, Autoplay]);

const Recommends = () => {
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + "/recommend/");
      setRecommends(res.data);
    };
    getUrl();
  }, []);
  return (
    <section className="container" id="recommend">
      <h2>Recommended For You</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {[...recommends.entries()].map(([index, recommend]) => (
          <SwiperSlide key={index}>
            <Item item={recommend} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Recommends;
