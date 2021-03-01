import React from "react";

function Order() {
  return (
    <div className="row">
      <div className="col-sm-6 col-lg-6 mb-3">
        <div className="checkout-address">
          <div className="title-left">
            <h3>Billing address</h3>
          </div>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Valid first name is required.{" "}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Valid last name is required.{" "}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="username">Username *</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback" style={{width: "100%"}}>
                  {" "}
                  Your username is required.{" "}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="email">Email Address *</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=""
              />
              <div className="invalid-feedback">
                {" "}
                Please enter a valid email address for shipping updates.{" "}
              </div>
            </div>
            <div className="mb-3">
              <label for="address">Address *</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder=""
                required
              />
              <div className="invalid-feedback">
                {" "}
                Please enter your shipping address.{" "}
              </div>
            </div>
            <div className="mb-3">
              <label for="address2">Address 2 *</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder=""
              />{" "}
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country *</label>
                <select className="wide w-100" id="country">
                  <option value="Choose..." data-display="Select">
                    Choose...
                  </option>
                  <option value="United States">United States</option>
                </select>
                <div className="invalid-feedback">
                  {" "}
                  Please select a valid country.{" "}
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State *</label>
                <select className="wide w-100" id="state">
                  <option data-display="Select">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  {" "}
                  Please provide a valid state.{" "}
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip *</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback"> Zip code required.</div>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" for="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="mb-4"/>
            <div className="title">
              {" "}
              <span>Payment</span>{" "}
            </div>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  checked
                  required
                />
                <label className="custom-control-label" for="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" for="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" for="paypal">
                  Paypal
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />{" "}
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">
                  {" "}
                  Name on card is required{" "}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Credit card number is required{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Expiration date required{" "}
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Security code required{" "}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="payment-icon">
                  <ul>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/1.png"
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/2.png"
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/3.png"
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/5.png"
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="images/payment-icon/7.png"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mb-1"/>
          </form>
        </div>
      </div>
      <div className="col-sm-6 col-lg-6 mb-3">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="shipping-method-box">
              <div className="title-left">
                <h3>Shipping Method</h3>
              </div>
              <div className="mb-4">
                <div className="custom-control custom-radio">
                  <input
                    id="shippingOption1"
                    name="shipping-option"
                    className="custom-control-input"
                    checked="checked"
                    type="radio"
                  />
                  <label
                    className="custom-control-label"
                    for="shippingOption1"
                  >
                    Standard Delivery
                  </label>{" "}
                  <span className="float-right font-weight-bold">FREE</span>{" "}
                </div>
                <div className="ml-4 mb-2 small">(3-7 business days)</div>
                <div className="custom-control custom-radio">
                  <input
                    id="shippingOption2"
                    name="shipping-option"
                    className="custom-control-input"
                    type="radio"
                  />
                  <label
                    className="custom-control-label"
                    for="shippingOption2"
                  >
                    Express Delivery
                  </label>{" "}
                  <span className="float-right font-weight-bold">
                            $10.00
                          </span>{" "}
                </div>
                <div className="ml-4 mb-2 small">(2-4 business days)</div>
                <div className="custom-control custom-radio">
                  <input
                    id="shippingOption3"
                    name="shipping-option"
                    className="custom-control-input"
                    type="radio"
                  />
                  <label
                    className="custom-control-label"
                    for="shippingOption3"
                  >
                    Next Business day
                  </label>{" "}
                  <span className="float-right font-weight-bold">
                            $20.00
                          </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="odr-box">
              <div className="title-left">
                <h3>Shopping cart</h3>
              </div>
              <div className="rounded p-2 bg-light">
                <div className="media mb-2 border-bottom">
                  <div className="media-body">
                    {" "}
                    <a href="detail.html">
                      {" "}
                      Lorem ipsum dolor sit amet
                    </a>
                    <div className="small text-muted">
                      Price: $80.00 <span className="mx-2">|</span> Qty: 1{" "}
                      <span className="mx-2">|</span> Subtotal: $80.00
                    </div>
                  </div>
                </div>
                <div className="media mb-2 border-bottom">
                  <div className="media-body">
                    {" "}
                    <a href="detail.html">
                      {" "}
                      Lorem ipsum dolor sit amet
                    </a>
                    <div className="small text-muted">
                      Price: $60.00 <span className="mx-2">|</span> Qty: 1{" "}
                      <span className="mx-2">|</span> Subtotal: $60.00
                    </div>
                  </div>
                </div>
                <div className="media mb-2">
                  <div className="media-body">
                    {" "}
                    <a href="detail.html">
                      {" "}
                      Lorem ipsum dolor sit amet
                    </a>
                    <div className="small text-muted">
                      Price: $40.00 <span className="mx-2">|</span> Qty: 1{" "}
                      <span className="mx-2">|</span> Subtotal: $40.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="order-box">
              <div className="title-left">
                <h3>Your order</h3>
              </div>
              <div className="d-flex">
                <div className="font-weight-bold">Product</div>
                <div className="ml-auto font-weight-bold">Total</div>
              </div>
              <hr className="my-1"/>
              <div className="d-flex">
                <h4>Sub Total</h4>
                <div className="ml-auto font-weight-bold"> $ 440</div>
              </div>
              <div className="d-flex">
                <h4>Discount</h4>
                <div className="ml-auto font-weight-bold"> $ 40</div>
              </div>
              <hr className="my-1"/>
              <div className="d-flex">
                <h4>Coupon Discount</h4>
                <div className="ml-auto font-weight-bold"> $ 10</div>
              </div>
              <div className="d-flex">
                <h4>Tax</h4>
                <div className="ml-auto font-weight-bold"> $ 2</div>
              </div>
              <div className="d-flex">
                <h4>Shipping Cost</h4>
                <div className="ml-auto font-weight-bold"> Free</div>
              </div>
              <hr/>
              <div className="d-flex gr-total">
                <h5>Grand Total</h5>
                <div className="ml-auto h5"> $ 388</div>
              </div>
              <hr/>
              {" "}
            </div>
          </div>
          <div className="col-12 d-flex shopping-box">
            {" "}
            <a href="checkout.html" className="ml-auto btn hvr-hover">
              Place Order
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
