import React, { useState } from "react";
import "./login.css";
import http from "../form/httpService";
import { domainRoot } from "../constants";

const Login = () => {
  const [fields, setFields] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setFields({ ...fields, [input.name]: input.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await http.post(domainRoot + "/users/register/", fields);
      alert("Successfully created account");
      window.location = "/login";
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <>
            <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Register</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Register</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      <div className="cart-box-main">
        <div className="container">
          <div className="row new-account-login">
            <form onSubmit={handleSubmit}>
              <div className="login-form">
                <h4 className="login-title">Register</h4>

                <div className="row">
                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      id="first_name"
                      onChange={handleChange}
                      value={fields.first_name}
                    />
                  </div>
                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="last_name  ">Last name</label>
                    <input
                      type="text"
                      className="mb-0  "
                      name="last_name"
                      id="last_name"
                      onChange={handleChange}
                      value={fields.last_name}
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-12  mb-2 mt-2">
                    <label htmlFor="email">E-Mail Address</label>
                    <input
                      type="email"
                      className="mb-0  mt-4 "
                      name="email"
                      id="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="mb-0  mt-4 "
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={fields.password}
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="password_confirmation">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="mb-0  mt-4 "
                      name="password_confirmation"
                      id="password_confirmation"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      value={fields.password_confirmation}
                    />
                  </div>
                  <div className="col-md-12 mb-2 mt-2">
                    <label htmlFor="address">Address</label>
                    <input
                      className="mb-0  mt-4 "
                      type="text"
                      name="address"
                      id="address"
                      onChange={handleChange}
                      value={fields.address}
                      placeholder="Full Addresss"
                    />
                  </div>
                  <div className="col-md-12 mb-2 mt-2">
                    <label htmlFor="apartment">Apartment / Unit No</label>
                    <input
                      className="mb-0"
                      type="text"
                      name="country"
                      value={fields.country}
                      onChange={handleChange}
                      placeholder="Enter Apartment / Unit No"
                    />
                  </div>
                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="mb-0"
                      name="city"
                      id="city"
                      value={fields.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>

                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="post_code">Postal Code</label>
                    <input
                      type="text"
                      className="mb-0"
                      name="post_code"
                      id="post_code"
                      value={fields.post_code}
                      onChange={handleChange}
                      placeholder="Postal Code"
                    />
                  </div>
                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="country">Provinces</label>
                    <select id="country" className="form-control" name="state">
                      <option>Choose...</option>
                      <option value="Ontario" selected="">
                        Bangla desh
                      </option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-2 mt-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="mb-0"
                      name="phone"
                      id="phone"
                      value={fields.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-4 mb-20 mb-2 mt-2">
                    <button type="submit" className="hvr-hover btn cart">
                      Register
                    </button>
                  </div>
                  <div className="col-8 mb-2 mt-2">
                    <small className="text-muted text-center">
                      By clicking the 'Sign Up' button, you confirm that you
                      accept our Terms of use and Privacy Policy.
                    </small>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
