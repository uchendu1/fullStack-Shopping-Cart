import React from "react";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItems,
} from "./styles";

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon  style={{color: "gray", fontSize: 16 }}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LINDA.</Logo>
        </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <Link to="/cart">
          <MenuItems>
            <Badge badgeContent={quantity} color="secondary">
              <AddShoppingCartOutlinedIcon />
            </Badge>
            
          </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
