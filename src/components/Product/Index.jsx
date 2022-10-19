import React from "react";
import { Link } from "react-router-dom";
import { Container, Circle, Image, Info, Icon } from "./styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
      {/* <p>{item.title}</p><br/>
      <p>{item.desc}</p> */}
    </Container>
  );
};

export default Product;
