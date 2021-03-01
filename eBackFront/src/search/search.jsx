import React, { useState, useEffect } from "react";
import "./css.css";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiRoot } from "../constants";
import httpService from "../form/httpService";
import Item from "../homepage/item/item";

SwiperCore.use([Navigation, Autoplay]);

const SearchItem = ({ match }) => {
  const itemName = match.params.itemName;
  const [items, setItems] = useState([]);
  const [isLoding, setLoding] = useState(true);
  const [itemNameOld,setItemNameOld]=useState(itemName);

  useEffect(() => {
    if (itemName!==itemNameOld){
      setLoding(true);
    }

    const getUrl = async () => {
      let res = await httpService.get(
        apiRoot + "/product/search/?name=" + itemName
      );
      setItems(res.data);
      setLoding(false);
    };
    getUrl();
  }, [itemName]);

  return (
    <>
      {isLoding && (
        <div className="loding-small center">
          <div class="loader-my  "></div>
          <p className="centered">
            Searching for your products <br /> please wait...
          </p>
        </div>
      )}
      {!isLoding && (
        <>
          <div class="all-title-box">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h2>Search</h2>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Search</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {items.length > 0 && (
            <section className="container" id="Search">
              <h2 className="mt-4 mb-4">{itemName}</h2>
              <Swiper
                spaceBetween={50}
                slidesPerView={4}
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
                autoplay={{ delay: 10000 }}
                pagination={{ clickable: true }}
              >
                {items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Item item={item} />
                  </SwiperSlide>
                ))}

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Swiper>
            </section>
          )}
          {items.length === 0 && (
            <div className="container" id="not-found">
              <div
                className="icon-sad mt-4 text-center color-2"
                style={{ fontSize: "100px",paddingTop:'40px' }}
              ></div>
              <h2 className="color-2 mt-4 mb-4  text-center">
                Sorry...
                <br /> Item Not Found
              </h2>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchItem;
