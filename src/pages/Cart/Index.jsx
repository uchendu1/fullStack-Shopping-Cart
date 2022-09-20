import React from "react";
import Footer from "../../components/Footer/Index";
import {
  Container,
  Wrapper,
  Title,
  TopButton,
  Top,
  TopText,
  Bottom,
  TopTexts,
  Info,
  Summary,
  Product,
  ProductDetail,
  PriceDetail,
  ProductName,
  Details,
  Image,
  ProductId
} from "./styles";
import Navbar from "../../components/Navbar/Index";
import Announcements from "../../components/Annoucements/Index";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bags(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
                <ProductDetail>
                    <Image src=""/>
                    <Details>
                        <ProductName><b>Product:</b>PUMA THUNDER SHOES</ProductName>
                        <ProductId><b>ID:</b>87634567890</ProductId>

                    </Details>
                </ProductDetail>
                <PriceDetail></PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
