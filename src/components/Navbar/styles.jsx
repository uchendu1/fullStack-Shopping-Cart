import styled from "styled-components";
import {mobile} from "../../responsive";

export const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`

export const Wrapper = styled.div`
padding: 10px 20px;
display:  flex;
justify-content: space-between;
align-items: center;
${mobile({padding: "10px 0px"})}


`
// flex:1 gives it its width
export const Left = styled.div`
flex: 1;
display:  flex;
align-items: center;

`

export const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}

`

export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:  flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

export const Logo = styled.h1`
text-align: center;
font-weight: bold;
${mobile({fontSize: "24px"})}

`
export const Input = styled.input`
border: none;
${mobile({width: "50px"})}

`
export const Center = styled.div`
flex: 1;
`
export const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})}

`
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent: "center", flex: 2})}


`