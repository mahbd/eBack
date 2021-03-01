import React, {useState} from "react";
import "./news.css";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";
import {toast} from "react-toastify";

const News = () => {
  const [email, setEmail] = useState('');

  const handleChange = ({currentTarget: input}) => {
    setEmail(input.value);
  }

  const submit = () => {
    http.post(apiRoot + '/subscribe/', {'email': email});
    setEmail('');
    toast.success('Thanks for subscribing');
  }

  return (
      <div className="newsletter-section pb-50  pt-50 " id="newsletter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-20 mb-xs-20">
              <div className="newsletter-title">
                <h1>
                  <span className="icon-mail2 color-2"/>
                  Send Newsletter
                </h1>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="subscription-form-wrapper d-flex flex-wrap flex-sm-nowrap">
                <p className="mb-xs-20" id="small-20">
                  Sign up for our newsletter to receive updates and Exclusive
                  offers
                </p>

                <div className="subscription-form">
                  <form className="mc-form subscribe-form">
                    <input type="hidden"/>
                    <input value={email} onChange={handleChange} type="email" name="email"
                           placeholder="Your email address"/>
                    <button className="btn" type="submit" onClick={submit}> subscribe!</button>
                  </form>

                  <div className="mailchimp-alerts">
                    <div className="mailchimp-submitting"/>
                    <div className="mailchimp-success"/>
                    <div className="mailchimp-error"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default News;
