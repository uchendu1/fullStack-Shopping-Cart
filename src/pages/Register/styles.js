import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white ;
  
`;

export const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
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


`;