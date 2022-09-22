import React from "react";
import Badge from '@mui/material/Badge';
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
          <MenuItems>
            <Badge badgeContent={4} color="secondary">
              <AddShoppingCartOutlinedIcon />
            </Badge>
            
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
