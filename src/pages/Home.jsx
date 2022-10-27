import React from "react";
import Navbar from "../components/Navbar/Index";
import Announcements from "../components/Annoucements/Index";
import Slider from "../components/Slider/Index";
import Categories from "../components/Categories/Index";
import Products from "../components/Products/Index";
import NewsLetter from "../components/NewsLetter/Index";
import Footer from "../components/Footer/Index";

const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter /> 
      <Footer />
    </div>
  );
};

export default Home;
