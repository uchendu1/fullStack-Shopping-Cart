import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcons,
  Title,
  List,
  ListItems,
  ContactItem,
  Payment
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Linda</Logo>
        <Desc>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
        </Desc>
        <SocialContainer>
          <SocialIcons color="385999">
            <FacebookOutlinedIcon />
          </SocialIcons>
        </SocialContainer>
        <SocialContainer>
          <SocialIcons color="E4405f">
            <TwitterIcon />
          </SocialIcons>
        </SocialContainer>
        <SocialContainer>
          <SocialIcons color="55ACEE">
            <InstagramIcon />
          </SocialIcons>
        </SocialContainer>
        <SocialContainer>
          <SocialIcons color="E60023">
            <PinterestIcon />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Woman Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Accunt</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>WishList</ListItems>
          <ListItems>WishList</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><LocationOnOutlinedIcon style={{marginRight: "10px"}} />889 &nbsp; accusantium doloremque</ContactItem>
        <ContactItem><SmartphoneOutlinedIcon style={{marginRight: "10px"}} />+887 &nbsp; 554 &nbsp; 668</ContactItem>
        <ContactItem><EmailOutlinedIcon style={{marginRight: "10px"}} />lindatochukwu30@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
