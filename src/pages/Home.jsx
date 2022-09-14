import React from 'react'
import Navbar from '../components/Navbar/Index'
import Announcements from "../components/Annoucements/Index"
import Slider from '../components/Slider/Index'
import Categories from '../components/Categories/Index';
import Products from "../components/Products/Index";

const Home = () => {
  return (
    <div>
      <Announcements/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home
