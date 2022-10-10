import {useState} from "react";
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
 const cat = location.pathname.split("/")[2]
 const [filter, setFilter] = useState({});

 const handleFilters = (e) => {
  const value = e.target.value;
  setFilter({
    ...filter,
    [e.target.name]: value,
  });
 };
 console.log(filter)
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled  >
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
            <Option  >Newest</Option>
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
