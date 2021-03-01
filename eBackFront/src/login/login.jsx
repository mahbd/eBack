import React, { useState } from "react";
import auth from "../form/authService";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    if (input.name === "email") {
      setEmail(input.value);
    } else if (input.name === "password") {
      setPassword(input.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.login(email, password);
      window.location = "/";
    } catch (ex) {
      alert("An unexpected error occurrd");
    }
  };

  return (
    <>
      <div class="all-title-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Login</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-box-main">
        <div className="container">
          <div className="row new-account-login">
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="_token"
                value="HdsnVR26gkkBY3fA4BIGi1qOwJM44zFeie6CruPx"
              />
              <div className="login-form">
                <h4 className="login-title">Login</h4>

                <div className="row">
                  <div className="col-md-12 col-12 mb-20">
                    <label htmlFor="email" className="mt-4">
                      Email Address*
                    </label>
                    <input
                      id="email"
                      className="mb-0"
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div className="col-12 mb-20">
                    <label className="mt-4" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      className="mb-0"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleChange}
                      name="password"
                    />
                  </div>
                  <div className="col-md-8 mt-4">
                    <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                      <input name="remember" type="checkbox" id="remember_me" />
                      <label htmlFor="remember_me">Remember Me</label>
                    </div>
                  </div>

                  <div className="col-md-4 mt-10 mb-20 text-left text-md-right color-2">
                    <Link to="/reset_password" className="color-2 mt-4">
                      {" "}
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="col-md-12 mt-4">
                    <button type="submit" className="btn cart hvr-hover">
                      Login
                    </button>
                  </div>
                  <div className="reg-login-link mt-4" align="center">
                    Don't have an account?
                    <Link to="/register" className="color-2 ml-4">
                      Sign Up
                    </Link>
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
