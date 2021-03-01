import React, { useState, useEffect } from "react";
import "./css.css";
import Reac from "../homepage/recommended/recommends";
import { addCart } from "../helpers";
import ReviewItem from "./review-item.jsx";
import http from "../form/httpService";
import { apiRoot } from "../constants";
import SliderImg from "../Work/work";
import { toast } from "react-toastify";
const ShopItem = ({ match }) => {
  const { itemId } = match.params;
  const [item, setItem] = useState(null);
  const [isLoding, setLoding] = useState(true);

  const addCartLocal = (id) => {
    toast.success("Item Added");
    addCart(id);
  };
  
  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(`${apiRoot}/product/${itemId}`);
      setItem(res.data);
      setLoding(false);
    };

    getUrl();
  }, [itemId]);
  return (
    <>
      {isLoding && (
        <div className="loding-small center">
          <div class="loader-my  "></div>
          <p className="centered">
             please wait...
          </p>
        </div>
      )}
      {!isLoding && (
        <>
          <div class="all-title-box">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h2>Previw</h2>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Previw</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-detail-box-main">
            {item && (
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <SliderImg images={item.images} />
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-6">
                    <div className="single-product-details">
                      <h2>{item.name}</h2>
                      <h5>
                        {" "}
                        <del>$ {item.price}</del> ${" "}
                        {item.price -
                          ((item.price * item.offer) / 100).toFixed(2)}
                      </h5>
                      <p className="available-stock">
                        <span> {item.stock} item(s) available</span>
                      </p>
                      <h4>Short Description:</h4>
                      <p>{item.description}</p>

                      <div className="price-box-bar">
                        <div className="cart-and-bay-btn">
                          <button
                            onClick={() => addCartLocal(item.id)}
                            className="btn hvr-hover"
                            data-fancybox-close=""
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <ReviewItem />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Reac />
          </div>
        </>
      )}
    </>
  );
};
export default ShopItem;
