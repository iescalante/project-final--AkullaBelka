import React from "react";
import styled from "styled-components";
import Logo from '../assets/akullabelka_logo.svg';
import {useHistory} from "react-router-dom";
import { AppContext } from "../AppContext";
import Container from '../reusable-components/Container';
import Footer from '../reusable-components/Footer';

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
        setError("");
        history.push("/main");
      } else{
          setError("User not found. Wrong email/password. Try Again!");
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
      <InputLoginButton type="submit">Log In!</InputLoginButton>
        {error !== "" && <ErrorMsg>{error}</ErrorMsg>}
        </LoginForm>
        <SigninDiv>
            <SigninText>First Time Here?</SigninText>
            <SigninText>Come on in and try us!</SigninText>
            <SigninButton onClick={handleSignin} type="button">Sign In!</SigninButton>
        </SigninDiv>
        <Footer/>
        </Container>
    )
};
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
  border: 3px solid beige;
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 15px;
  background: #508AA8;
`;
const InputLogin = styled.input`
  flex:2;
`;
const LabelLogin = styled.label`
  margin: 10px 0;
  display:flex;
  flex:1;
`;
const InputLoginButton = styled.button`
  margin: 10px 0;
`;
const SigninDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 3px solid beige;
  padding: 25px;
  border-radius: 15px;
  background: #508AA8;
`;
const SigninButton = styled.button`
  display:flex;
`;
const ErrorMsg = styled.p`
  border-radius: 15px;
  padding: 10px;
  color: #560000;
  font-weight: bold;
  width: 250px;
  text-align: center;
  background-color: #e2a338;
`;
const SigninText = styled.p`
  font-weight:bold;
  text-align:center;
`;
export default Login;