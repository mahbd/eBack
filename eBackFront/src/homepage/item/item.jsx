import React from "react";
import { Link } from "react-router-dom";
import { addCart } from "../../helpers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Item({ item }) {
  const addCartLocal = (id) => {
    toast.success("Item Added");
    addCart(id);
  };

  return (
    <div className="special-list">
      <div className=" special-grid top-featured">
        <div className="products-single fix">
          <div className="box-img-hover">
            <div className="type-lb">
              <p className="new">New</p>
              <p className="new">-{item.offer}%</p>
            </div>
            <img
              src={item.images[0]}
              className="img-fluid"
              style={{ height: "200px" }}
              alt="Product"
            />
            <div className="mask-icon">
              <ul>
                <li>
                  <Link to="#">
                    <i className="icon-heart" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-eye" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-check" />
                  </Link>
                </li>
              </ul>
              <button
                className="btn hvr-hover cart"
                onClick={() => addCartLocal(item.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="why-text">
            <Link className="h5 text-dark" to={`/item/${item.id}`}>
              {item.name}
            </Link>
            <h5> ${item.price}</h5>
            <div className="product-review">
              {[...[...Array(item.rating)].entries()].map(([index]) => (
                <i key={index} className="icon-star color-2" />
              ))}
              ({item.rating})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
