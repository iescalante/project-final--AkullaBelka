import React from "react";
import Logo from '../assets/akullabelka_logo.svg';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

const CreateUser = () => {
    const history = useHistory();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        history.push("/main");
    }
    return (
        <Container>
        <TopHeader>We're going to need a little information about you!</TopHeader>
        <LogoImage src={Logo} alt="akullabelka logo"/>
        <SigninForm onSubmit={handleSubmit}>
          <LabelSignin>
              First Name:
              <InputSignin type="text" name="first-name"/>
          </LabelSignin>
          <LabelSignin>
              Last Name:
              <InputSignin type="text" name="last-name"/>
          </LabelSignin>
          <LabelSignin>
              Email:
              <InputSignin type="email" name="email"/>
          </LabelSignin>
          <LabelSignin>
              Password:
              <InputSignin type="password" name="password"/>
          </LabelSignin>
          <LabelSignin>
              Lender?:
              <LenderTypeDiv>
                <label for="true">Yes</label>
                <InputSignin type="radio" name="lender-type" value="true"/>
              </LenderTypeDiv>
              <LenderTypeDiv>
                <label for="false">No</label>
                <InputSignin type="radio" name="lender-type" value="false"/>
              </LenderTypeDiv>
          </LabelSignin>
          <LabelSignin>
              Starting Score:
              <InputSignin type="number" name="score" value="500"/>
          </LabelSignin>
          <LabelSignin>
              Loan Limit ($):
              <InputSignin type="number" name="loan-limit" value="400"/>
          </LabelSignin>
          <LabelSignin>
              Total Loaned ($):
              <InputSignin type="number" name="total-loaned" value="0"/>
          </LabelSignin>
          <InputSigninButton type="submit" value="Create Account"/>
        </SigninForm>
        </Container>
    )
};
const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 10vh;
`;
const TopHeader = styled.h1`
  margin: 10px auto;
  text-align:center;
`
const LogoImage = styled.img`
  border-radius: 50%;
  background-color:lightgrey;
  width:200px;
  margin: 0 auto 10px;
`;

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const LabelSignin = styled.label`
  display:flex;
  flex:1;
  margin: 10px 0;
`;
const InputSignin = styled.input`
  flex:2;
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const InputSigninButton = styled.input`
  background:goldenrod;
`;
const LenderTypeDiv = styled.div`
  display:flex;
`
export default CreateUser;