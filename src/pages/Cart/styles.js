import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 300;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

export const TopTexts = styled.div``;

export const Info = styled.div`
flex: 1;
`;

export const Product = styled.div`

`;

export const ProductDetail = styled.div`

`;

export const PriceDetail = styled.div`

`;

export const ProductName = styled.div`

`;
export const Details = styled.div`

`;

export const ProductId = styled.div`

`;

export const ProductColor = styled.div`

`;

// export const Product = styled.div`

// `;


export const Summary = styled.div`

flex: 3;
`;

export const Image = styled.img`
`;




export const TopText = styled.span`


  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;



