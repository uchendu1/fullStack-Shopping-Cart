import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./styles";

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
