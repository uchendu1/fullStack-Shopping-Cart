import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch } from "react-redux";
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
import { addProduct } from "../../redux/cartRedux";
import Navbar from "../../components/Navbar/Index";
import NewsLetter from "../../components/NewsLetter/Index";
import Announcements from "../../components/Annoucements/Index";
import Footer from "../../components/Footer/Index";
import { publicRequest, BASE_URL } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(BASE_URL + "/products/find/" + id);
        setProduct(res.data);

      } catch {}
    };
    getProduct();
  }, [id]);
// console.log(product, "=======product=======")
  const handleAddToCartClick = () => {
    dispatch(
      addProduct({...product, quantity, color, size })
    );
  };

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
          <Price>${product.price || "20"}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
              
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveOutlinedIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddOutlinedIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleAddToCartClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
