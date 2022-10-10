import React from "react";
import { useLocation } from 'react-router-dom'

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./styles";
import Navbar from "../../components/Navbar/Index";
import Announcements from "../../components/Annoucements/Index";
import Products from "../../components/Products/Index";
import NewsLetter from "../../components/NewsLetter/Index";
import Footer from "../../components/Footer/Index";

const ProductList = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>price(asc)</Option>
            <Option>price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
