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
 const [filters, setFilter] = useState({});
 const [sort, setSort] = useState("newest");

 const handleFilters = (e) => {
  const value = e.target.value;
  setFilter({
    ...filters,
    [e.target.name]: value.toLowerCase(),
  });  
 };
 console.log(filters, "filters......")
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter> 
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>milky</Option>
            <Option>brown</Option>
            <Option>pink</Option>
            <Option>green</Option>
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
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option  value="newest">Newest</Option>
            <Option value="asc">price(asc)</Option>
            <Option value="desc">price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
