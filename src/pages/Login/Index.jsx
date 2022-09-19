import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link
} from "./styles";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />

          <Button>Login</Button>
          <Link>DO YOU NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
