import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./styles";
import Navbar from "../../components/Navbar/Index";
import NewsLetter from "../../components/NewsLetter/Index";
import Announcements from "../../components/Annoucements/Index";
import Footer from "../../components/Footer/Index";
import { publicRequest, BASE_URL } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(BASE_URL + "/products/find/" + id)
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img || "https://i.ibb.co/DG69bQ4/2.png"} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title || "Denim Jeans"}</Title>
          <Desc>
            {product.desc ||
              "ed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa"}
          </Desc>
          <Price>${product.price || "$20"}</Price>
          <FilterContainer>
            <Filter>
               <FilterTitle>Color</FilterTitle>
               {product.color?.map((c) => (
              <FilterColor color={c} key={c} />
              ))}  
               {/* <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />  */}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((s) => (
              <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}  
                {/* <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption> */}
              </FilterSize> 
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveOutlinedIcon />
              <Amount>1</Amount>
              <AddOutlinedIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
