import React, {useState, useEffect} from "react";
import "./css.css";
import {addCart, removeCart, removeCartAll} from "../helpers";
import {Link} from "react-router-dom";
import http from "../form/httpService";
import {apiRoot} from "../constants";

const App = () => {
  const [carts, setCarts] = useState([]);
  const [tax, setTax] = useState(0);

  function calculateTotal() {
    let temPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      temPrice += carts[i].product.price * carts[i].quantity;
    }
    return temPrice;
  }

  const resetCart = (carts) => {
    for(let i = 0; i < carts.length; i++) {
      removeCartAll(carts[i].product.id);
    }
  }

  function calculateDiscount() {
    let temPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      temPrice +=
        (carts[i].product.price * carts[i].quantity * carts[i].product.offer) /
        100;
    }
    return temPrice.toFixed(2);
  }

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + "/purchase/cart_list/");
      setCarts(res.data);
    };
    getUrl();
  }, [carts]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + "/site-data/tax_rate/");
      setTax(res.data.data);
    };
    getUrl();
  }, []);

  return (
    <>
        <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Cart</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active">Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="cart-box-main">
      <div className="container">
        <div className="row" id="cart">
          <div className="col-lg-12">
            <div className="table-main table-responsive">
              <table className="table">
                <thead>
                <tr>
                  <th>Images</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {carts.map((cart) => (
                  <tr>
                    <td className="thumbnail-img">
                      <img
                        className="img-fluid thumbnail-img"
                        src={cart.product.images[0]}
                        alt="Product"
                      />
                    </td>
                    <td className="name-pr">
                      <Link to={`/item/${cart.product.id}`}>
                        {cart.product.name}
                      </Link>
                    </td>
                    <td className="price-pr">
                      <p>${cart.product.price}</p>
                    </td>
                    <td className="quantity-box">
                      <i
                        className="icon-minus btn"
                        onClick={() => removeCart(cart.product.id)}
                      />

                      <div className="quantity-box2">{cart.quantity}</div>

                      <i
                        className="icon-plus btn"
                        onClick={() => addCart(cart.product.id)}
                      />
                    </td>
                    <td className="total-pr">
                      <p>${cart.product.price * cart.quantity}</p>
                    </td>
                    <td className="remove-pr">
                      <i
                        className="icon-trash color-1"
                        onClick={() => removeCartAll(cart.product.id)}
                      />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-lg-6 col-sm-6">
            <button className="btn btn-danger" onClick={() => resetCart(carts)}>Reset cart</button>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-lg-8 col-sm-12"/>
          <div className="col-lg-4 col-sm-12">
            <div className="order-box">
              <h3>Order summary</h3>
              <div className="d-flex">
                <h4>Sub Total</h4>
                <div className="ml-auto font-weight-bold">
                  {" "}
                  $ {calculateTotal()}
                </div>
              </div>
              <div className="d-flex">
                <h4>Discount</h4>
                <div className="ml-auto font-weight-bold">
                  {" "}
                  $ {calculateDiscount()}
                </div>
              </div>
              <hr className="my-1"/>
              <div className="d-flex">
                <h4>Tax</h4>
                <div className="ml-auto font-weight-bold"> $ {(calculateTotal() * tax) / 100}</div>
              </div>
              <div className="d-flex">
                <h4>Shipping Cost</h4>
                <div className="ml-auto font-weight-bold"> Free</div>
              </div>
              <hr/>
              <div className="d-flex gr-total">
                <h5>Grand Total</h5>
                <div className="ml-auto h5">
                  {" "}
                  $ {calculateTotal() - calculateDiscount() + (calculateTotal() * tax) / 100}
                </div>
              </div>
              <hr/>
            </div>
          </div>
          <div className="col-12 d-flex shopping-box">
            <Link className="ml-auto btn hvr-hover" to="/checkout" >Checkout</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
