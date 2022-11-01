import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  Error,
} from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
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

          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong</Error>}
          <Link>DO YOU NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
