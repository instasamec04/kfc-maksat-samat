import React from "react";
import HomeUsPage from "../components/Corusel/AboutUs/HomeUsPage";
import AboutUsMain from "../components/Corusel/AboutUsMain";
import Corusel from "../components/Corusel/Corusel";
// import MainCart from "../components/Corusel/MainCart";

const HomePage = () => {
  return (
    <div>
      <img
        id="homep"
        src="https://wpsovet.ru/wp-content/uploads/f/5/0/f50eef1f05c13f9611b02123e0a443c4.jpeg"
        alt=""
      />
      <Corusel />
      <AboutUsMain />
      <HomeUsPage />
    </div>
  );
};

export default HomePage;
