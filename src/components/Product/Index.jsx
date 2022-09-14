import React from "react";
import { Container, Circle, Image, Info, Icon } from "./styles";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
            <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon>
            <SearchOutlinedIcon/>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
