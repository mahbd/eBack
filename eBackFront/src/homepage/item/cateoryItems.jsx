import React, {useState, useEffect} from "react";
import "./css.css";
import SwiperCore, {Navigation, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {apiRoot} from "../../constants";
import httpService from "../../form/httpService";
import Item from "./item";

SwiperCore.use([Navigation, Autoplay]);

const CategoryItems = ({cat}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await httpService.get(apiRoot + '/product/?cat=' + cat);
      setItems(res.data);
    }
    getUrl();
  }, [cat]);

  return (
    <section className="container" id="item">

      <h2>{cat}</h2>
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
        autoplay={{delay: 10000}}
        pagination={{clickable: true}}
      >

        {items.map(item =>
          <SwiperSlide key={item.id}>
            <Item item={item} />
          </SwiperSlide>
        )}

        <br/><br/><br/><br/><br/><br/>
      </Swiper>
    </section>


  );
}

export default CategoryItems;