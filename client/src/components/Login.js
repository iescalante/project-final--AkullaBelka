import React from "react";
import Logo from '../assets/akullabelka_logo.svg';
import {useHistory} from "react-router-dom";
import styled from "styled-components";

const Login = () => {
    const history = useHistory();

    const handleLogin = (ev) => {
        ev.preventDefault();
        history.push("/main");
    }
    const handleSignin = (ev)=>{
        ev.preventDefault();
        history.push("/create-user");
    }
    return (
        <Container>
        <LogoImage src={Logo} alt="akullabelka logo"/>
        <LoginForm onSubmit ={handleLogin}>
          <LabelLogin>
              Email:
              <InputEmail type="email" name="email"/>
          </LabelLogin>
          <LabelLogin>
              Password:
              <input type="password" name="password"/>
          </LabelLogin>
          <InputLoginButton type="submit" value="Log In!"/>
        </LoginForm>
        <SigninDiv>
            <p>First Time here?</p>
            <button onClick={handleSignin} type="button">Sign In!</button>
        </SigninDiv>
        </Container>
    )
};
const Container = styled.div`
  display:flex;
  flex-direction: column;
`;
const LogoImage = styled.img`
  border-radius: 50%;
  background-color:lightgrey;
  width:200px;
  margin: 0 auto 10px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const InputEmail = styled.input`
  width:79%;
`;
const LabelLogin = styled.label`
  margin: 10px 0;
`;

const InputLoginButton = styled.input`
  margin: 10px 0;
`
const SigninDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

`

export default Login;