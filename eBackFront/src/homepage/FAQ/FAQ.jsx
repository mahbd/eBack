import React, { Component } from "react";
import "./faq.css";

import { Link } from "react-scroll";
import http from "../../form/httpService";
import { apiRoot } from "../../constants";

class FAQ extends Component {
  state = {
    faqs: [],
  };

  async componentDidMount() {
    let res = await http.get(apiRoot + "/site-data/faq/");
    this.setState({ faqs: res.data.data });
  }

  render() {
    return (
      <div className="faqs gray-light-bg" id="faq">
        <div className="section-header ">
          <h2>Frequently asked questions?</h2>
        </div>
        <div className="row" id="accordion ">
          {[...this.state.faqs.entries()].map(([index, faq]) => (
            <div key={index} className=" col-lg-6 col-sm-6 col-xs-6">
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href={`#collapse${index}`}>
                    <span>{index + 1}</span> {faq.question}
                  </a>
                </div>
                <div
                  id={`collapse${index}`}
                  className="collapse"
                  data-parent="#accordion">
                  <div className="card-body">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="ask-more-ques"
          spy={true}
          smooth={true}
          duration={1000}>
          <span className="btn">
            Have more questions?
          </span>
        </Link>
      </div>
    );
  }
}

export default FAQ;
