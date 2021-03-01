import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "./index.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "bootstrap/dist/css/bootstrap.css";

import http from "../../form/httpService";
import {apiRoot} from "../../constants";

SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + '/site-data/reviews/');
      setReviews(res.data.data);
    }
    getUrl();
  }, []);

  return (
      <React.Fragment>

      <div className="container" id="testimonial">

          <h2 className="testimonial-heading">What Clients Say About Me ?</h2>


              <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  breakpoints={{
                360: {
                
                  slidesPerView: 1,
                },
                500: {
            
                  slidesPerView: 1,
                },
                640: {
           
                  slidesPerView: 2,
                },
                1100: {
       
                  slidesPerView: 3,
                },
              }}
                  navigation
                  loop={{loop:true}}
                  autoplay={{delay: 3000}}
                  pagination={{clickable: true}}
              >

                {[...reviews.entries()].map(([index, review]) =>
                    <SwiperSlide key={index}>
                      <div className="box-review" >
    <div className="item">
        <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                <div className="d-flex align-items-center">
                    <img  alt={review.name} className="img-fluid rounded-circle shadow-sm mr-3" src={review.image} width="50"/>

                        <div className="client-info">
                            <h5 className="mb-0">
                                {review.name}
                            </h5>
                        </div>
                    
                </div>
            <div className="client-img d-flex align-items-center justify-content-between pt-3 pb-2">
                <div className="client-ratting">
                    <ul className="list-inline client-ratting-list">
                        <li className="list-inline-item">
                            <span className="icon-star color-2">
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="icon-star color-2">
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="icon-star color-2">
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="icon-star color-2">
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span className="icon-star color-2">
                            </span>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <p>
                {review.message}
            </p>
        </div>
    </div>
</div>
                      {" "}
                    </SwiperSlide>
                )}
                <br/> <br/>
              </Swiper>

      </div>
      </React.Fragment>
  );
}

export default App;
