import React from "react";
import MianSlider from "./mainSlider/mainSlider";
import Recommended from "./recommended/recommends";
import Review from "./Review/App";
import News from "./Newsletter/Newsletter"
import Items from "./item/allitem";
import Feature from "./feature/features"

function HomePage(props) {
  console.log(props, "home")
  return (
      <React.Fragment>
        <MianSlider/>
        <Feature />
        <Recommended/>
        <Items />
        <Review />
        <News />
      </React.Fragment>
  );
}

export default HomePage;
