import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useSelector } from "react-redux";
//import Axios from "axios";

import {useNavigate} from "react-router-dom"
import Footer from "../../components/Footer/Index";
import {userRequest, BASE_URL } from "../../requestMethods";
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
  SummaryTitle,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  Product,
  ProductDetail,
  PriceDetail,
  ProductName,
  ProductSize,
  ProductColor,
  Details,
  Image,
  ProductId,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Button,
} from "./styles";
import Navbar from "../../components/Navbar/Index";
import Announcements from "../../components/Annoucements/Index";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()
  console.log(stripeToken, "=======stripeToken======");

  const onToken = (token) => {
    setStripeToken(token);
  };



 
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post(BASE_URL + "/checkout/payment", {
          tokenId: stripeToken.id,
          // amount: cart.total * 100,
          amout: 500,
        });
        navigate.push("/success", {
          stripeData: res.data,
         });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);


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
        </Top>
        <Bottom>
          <Info>
            <Hr />

            {cart.products.map((product) => (
              <Product> 
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddOutlinedIcon />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveOutlinedIcon />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}


          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-5.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout
              name="Linda Shopping Platform"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              shippingAddress={false}
              billingAddress={false}
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              key={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart