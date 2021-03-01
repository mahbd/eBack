import React, { useState, useEffect } from "react";
import { apiRoot } from "../constants";
import http from "../form/httpService";
import "./navbar.css";
import { getJwt, logout } from "../form/authService";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import CartMenu from "./navbarCartMenu";
import { calculateTotal, calculateDiscount } from "./helperOfNavbar";

const Navbar = ({ history }) => {
  const [categories, setCategories] = useState([]);
  const [carts, setCarts] = useState([]);
  const [tax, setTax] = useState(0);
  const [isLoding, setLoding] = useState(true);
  const [search, setSearch] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setSearch(input.value);
  };

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + "/purchase/cart_list/");
      setCarts(res.data);
      setLoding(false);
    };
    getUrl();
  }, [carts]);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(apiRoot + "/site-data/tax_rate/");
      setTax(res.data.data);
      res = await http.get(apiRoot + "/category/");
      setCategories(res.data);
      setLoding(false);
    };
    getUrl();
  }, []);

  const handleScroll = () => {
    let navbar = document.getElementById("navbar-1");
    let navbarx = document.getElementById("navbar-2");
    let sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbarx.classList.add("d-flex");
      navbarx.classList.remove("d-none");
    } else {
      navbarx.classList.remove("d-flex");
      navbarx.classList.add("d-none");
    }
  };

  useEffect(() => {
    if (window && !isLoding) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoding]);

  return (
    <>
      {isLoding && (
        <div className="loding center">
          <div class="loader-my  "></div>
          <p className="centered">
            Welcome to miloy shop <br /> please wait...
          </p>
        </div>
      )}
      {!isLoding && (
        <header>
          <div className="unknown" />

          <div className="header-bottom header-bottom-other header-sticky">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center">
                  <div className="logo">
                    <i className="icon-shop color-1" />
                    <span style={{ fontSize: "20px" }}>Miloy Store</span>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12 col-xs-12">
                  <div className="menubar-top justify-content-between align-items-center flex-sm-wrap flex-md-wrap flex-lg-nowrap mt-sm-15 d-flex">
                    <div className="header-contact d-flex">
                      <div className="phone-icon">
                        <span className="icon-phone" />
                      </div>
                      <div className="phone-number">
                        Phone: <span className="number">+12345677</span>
                      </div>
                    </div>

                    <div className="header-advance-search">
                      <input
                        placeholder="Search your product"
                        onChange={handleChange}
                      />
                      <button onClick={() => history.push(`/search/${search}`)}>
                        <span className="icon-search" />
                      </button>
                    </div>
                    <CartMenu />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="home-other-navigation-menu"
              style={{ height: "60px",textAlign:"cneter",paddingTop:"auto",background:"red",fontWeight:"400",fontSize:"15px" }}
              id="navbar-1"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-menu">
                      <nav className="" id="nav" >
                        <ul className="line-height" style={{ textAlign:"cneter",paddingTop:"5px" }} >
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li></li>

                          <li className="menu-item-has-children">
                            <p className="text-white clickable">Shop</p>
                            <ul className="sub-menu" >
                              {categories.map((category) => (
                                <li key={category.id}>
                                  <ScrollLink
                                    to={"#" + category.id.toString()}
                                    href={"#" + category.id.toString()}
                                  >
                                    {category.name}
                                  </ScrollLink>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <li>
                            <Link to="/contactus">Contact Us</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq</Link>
                          </li>
                        </ul>
                        <ul className="mr-auto pull-right">
                          {getJwt() && (
                            <li>
                              <p
                                className="color-1 clickable"
                                onClick={logout}
                              >
                                LOGOUT
                              </p>
                            </li>
                          )}
                          {!getJwt() && (
                            <>
                              <li>
                                <NavLink to="/login">Log In</NavLink>
                              </li>
                              <li>
                                <NavLink to="/register">Register</NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="home-other-navigation-menu d-none fixed-top"
              id="navbar-2"
              style={{ height: "80px" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-menu">
                      <nav className="" style={{ textAlign:"cneter",paddingTop:"10px" }} id="nav">
                        <ul className="line-height">
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li></li>

                          <li className="menu-item-has-children">
                            <p className="text-white clickable">Shop</p>
                            <ul className="sub-menu">
                              {categories.map((category) => (
                                <li key={category.id}>
                                  <ScrollLink
                                    to={"#" + category.id.toString()}
                                    href={"#" + category.id.toString()}
                                  >
                                    {category.name}
                                  </ScrollLink>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <li>
                            <Link to="/contactus">Contact Us</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq</Link>
                          </li>
                          <li>
                            <Link to="/cart">
                              <span className="icon-cart"/>{" "}
                                $
                                {(
                                  calculateTotal(carts) -
                                  calculateDiscount(carts) +
                                  (calculateTotal(carts) * tax) / 100
                                ).toFixed(2)}
                         
                            </Link>
                          </li>
                        </ul>
                        <ul className="mr-auto pull-right">
                          {getJwt() && (
                            <li>
                              <p
                                className="color-2 clickable"
                                onClick={logout}
                              >
                                LOGOUT
                              </p>
                            </li>
                          )}
                          {!getJwt() && (
                            <>
                              <li>
                                <NavLink to="/login">Log In</NavLink>
                              </li>
                              <li>
                                <NavLink to="/register">Register</NavLink>
                              </li>
                            </>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
