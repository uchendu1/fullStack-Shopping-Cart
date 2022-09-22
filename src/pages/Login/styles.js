import styled from "styled-components";
import {mobile} from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white ;
  ${mobile({width: "75%"})}

  
`;

export const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
 `;

export const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

export const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal ;
color: white;
cursor: pointer;
margin: 10px 0px ;


`;

export const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
