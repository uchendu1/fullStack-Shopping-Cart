import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Container, Wrapper, Title, Form, Input, Button, Link } from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  
  };



  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
          type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleClick}>Login</Button>
          <Link>DO YOU NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
