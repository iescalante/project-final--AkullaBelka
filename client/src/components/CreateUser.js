import React from "react";
import Logo from '../assets/akullabelka_logo.svg';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import { AppContext } from "../AppContext";
import Container from '../reusable-components/Container';

const CreateUser = () => {
    const {setUserData} = React.useContext(AppContext);
    const history = useHistory();
    const [newUser, setNewUser] = React.useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      score: 500,
      lenderProfile:{
        lender:false,
        usersId:"",
        totalLoan:0,
        availableLoan:0,
      },
      totalLoaned:0,
      loanLimit:400
    })
    const handleChange =(ev) =>{
      setNewUser({...newUser,
        [ev.target.name]: ev.target.value})
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(newUser);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName:newUser.firstName,
            lastName:newUser.lastName,
            email:newUser.email,
            password:newUser.password,
            score:newUser.score,
            lenderProfile:{
            lender:newUser.lenderProfile.lender,
            usersId:newUser.lenderProfile.usersId,
            totalLoan:newUser.lenderProfile.totalLoan,
            availableLoan:newUser.lenderProfile.availableLoan,
            },
            totalLoaned:newUser.totalLoaned,
            loanLimit:newUser.loanLimit,
            })
      };
      fetch('/users', requestOptions)
          .then(response => response.json())
          .then((responseBody) => {
            setUserData({currentUser: responseBody.user});
            history.push("/main");
          });
        };

    return (
        <StyledContainer>
          <TopHeader>We're going to need a little information about you!</TopHeader>
          <LogoImage src={Logo} alt="akullabelka logo"/>
          <SigninForm onSubmit={handleSubmit}>
            <LabelSignin>
              First Name:
            <InputSignin onChange={handleChange} type="text" name="firstName" value={newUser.firstName}/>
            </LabelSignin>
            <LabelSignin>
              Last Name:
              <InputSignin onChange={handleChange} type="text" name="lastName"value={newUser.lastName} />
            </LabelSignin>
            <LabelSignin>
              Email:
              <InputSignin onChange={handleChange} type="email" name="email" value={newUser.email}/>
            </LabelSignin>
            <LabelSignin>
              Password:
              <InputSignin onChange={handleChange} type="password" name="password" value={newUser.password}/>
            </LabelSignin>
            <LabelSignin>
              Lender?:
              <LenderTypeDiv>
                <label htmlFor="true">Yes</label>
                <InputSignin type="radio" name="lender" value="true" readOnly={true}/>
              </LenderTypeDiv>
              <LenderTypeDiv>
                <label htmlFor="false">No</label>
                <InputSignin type="radio" name="lender" value="false" readOnly={true}/>
              </LenderTypeDiv>
            </LabelSignin>
            <LabelSignin>
              Starting Score:
              <InputSignin type="number" name="score" value="500" readOnly={true}/>
            </LabelSignin>
            <LabelSignin>
              Loan Limit ($):
              <InputSignin type="number" name="loanLimit" value="400"readOnly={true}/>
            </LabelSignin>
            <LabelSignin>
              Total Loaned ($):
              <InputSignin type="number" name="totalLoaned" value="0"readOnly={true}/>
            </LabelSignin>
            <InputSigninButton type="submit" value="Create Account"/>
          </SigninForm>
        </StyledContainer>
    )
};
const StyledContainer = styled(Container)`
  margin: 15px 0;
`;
const TopHeader = styled.h1`
  margin: 10px auto;
  text-align:center;
`
const LogoImage = styled.img`
  border-radius: 50%;
  background-color:lightgrey;
  width: 150px;
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
`;
export default CreateUser;