import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import http from "../form/httpService";
import { apiRoot } from "../constants";

SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

function ItemReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(`${apiRoot}/user_review/?product_id=${4}`);
      setReviews(res.data);
    };
    getUrl();
  }, []);

  return (
    <React.Fragment>
      <div className="container" id="testimonial">
        <h2 className="testimonial-heading">Some About Review ?</h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={{ loop: true }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {[...reviews.entries()].map(([index, review]) => (
            <SwiperSlide key={index}>
              {console.log(review)}
              <div className="box-review">
                <div className="item">
                  <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <div className="d-flex align-items-center">
                      <i className="icon-profile-male" style={{fontSize: "40px"}} />
                      <div className="client-info">
                        <h5 className="mb-0">{review.name}</h5>
                      </div>
                    </div>
                    <div className="client-img d-flex align-items-center justify-content-between pt-3 pb-2">
                      <div className="client-ratting center">
                        {[...[...Array(review.rating)].entries()].map(([index]) => <span key={index} className="icon-star color-2"/>)}
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                </div>
              </div>{" "}
            </SwiperSlide>
          ))}
          <br /> <br />
        </Swiper>
      </div>
    </React.Fragment>
  );
}

export default ItemReview;
