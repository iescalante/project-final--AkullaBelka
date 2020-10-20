import React from "react";
import Logo from '../assets/akullabelka_logo.svg';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const Login = () => {
  const {email, setEmail, password, setPassword,setUserData} = React.useContext(AppContext);
  const history = useHistory();
  const [error, setError] = React.useState("");
  console.log(email,password);

  const handleLogin = (ev) => {
    ev.preventDefault();
    fetch(`/users/${email}/${password}`)
    .then((res) => res.json())
    .then((responseBody) => {
      console.log(responseBody);
      if (responseBody.user) {
        setUserData({currentUser:responseBody.user});
        history.push("/main");
      } else{
          setError("User not found");
        }
    })
  };
  const changeEmail = (ev) => {
    setEmail(ev.target.value);
  }
  const changePassword = (ev) => {
    setPassword(ev.target.value);
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
          <InputLogin onChange ={changeEmail} type="email" name="email" value={email}/>
        </LabelLogin>
        <LabelLogin>
          Password:
          <InputLogin onChange={changePassword} type="password" name="password" value={password}/>
        </LabelLogin>
      <InputLoginButton type="submit" value="Log In!"/>
        {error !== "" && <ErrorMsg>{error}</ErrorMsg>}
        </LoginForm>
        <SigninDiv>
            <p>First Time here?</p>
            <SigninButton onClick={handleSignin} type="button">Sign In!</SigninButton>
        </SigninDiv>
        </Container>
    )
};
const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: 20px;
  height:80vh;
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
const InputLogin = styled.input`
  flex:2;
`;
const LabelLogin = styled.label`
  margin: 10px 0;
  display:flex;
  flex:1;
`;

const InputLoginButton = styled.input`
  margin: 10px 0;
  background:goldenrod;
`
const SigninDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const SigninButton = styled.button`
background:goldenrod;
`;
const ErrorMsg = styled.p`
  color: red;
  font-weight:bold;
`

export default Login;