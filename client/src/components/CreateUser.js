import React from "react";
import Logo from '../assets/akullabelka_logo.svg';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import { AppContext } from "../AppContext";
import Container from '../reusable-components/Container';

const CreateUser = () => {
    const {setUserData} = React.useContext(AppContext);
    const [isChecked, setIsChecked] = React.useState(false);
    const history = useHistory();
    const [newUser, setNewUser] = React.useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      score: 500,
      lenderProfile:{
        lender: null,
        usersId:[],
        totalLoan:0,
        availableLoan:0,
      },
      totalLoaned:0,
      loanLimit:400
    })
    const handleChange =(ev) => {
      setNewUser({...newUser,
        [ev.target.name]: ev.target.value})
    };

    const handleChecked = (ev) => {
      setIsChecked(!isChecked);
    };

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
            lender: isChecked,
            usersId:newUser.lenderProfile.usersId,
            totalLoan:newUser.lenderProfile.totalLoan,
            availableLoan: isChecked ? 400 : 0,
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
          <TopHeader>Let's start with some information about yourself!</TopHeader>
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
                <label>Yes</label>
                <Checkbox type="checkbox" name="yes-lender" checked ={isChecked} onChange={handleChecked}/>
              </LenderTypeDiv>
            </LabelSignin>
              {isChecked && 
                <DisclaimerDiv>
                  Disclaimer: We are not responsible for any loss incurred while using our services.
                </DisclaimerDiv>
              }
            <LabelSignin>
              Starting Score:
              <DisabledInput type="number" name="score" value="500" disabled={true}/>
            </LabelSignin>
            <LabelSignin>
              Loan Limit ($):
              <DisabledInput type="number" name="loanLimit" value="400" disabled={true}/>
            </LabelSignin>
            <LabelSignin>
              Total Loaned ($):
              <DisabledInput type="number" name="totalLoaned" value="0" disabled={true}/>
            </LabelSignin>
            <InputSigninButton type="submit">CREATE ACCOUNT</InputSigninButton>
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
const Checkbox = styled.input`
  flex:2;
  cursor: pointer;
`;
const DisabledInput = styled(InputSignin)`
  cursor: not-allowed;
`;
const InputSigninButton = styled.button`
  display:flex;
`;
const LenderTypeDiv = styled.div`
  display:flex;
`;
const DisclaimerDiv = styled.div`
  max-width: 295px;
  padding: 10px;
  text-align: justify;
  border: 3px #d21717 dotted;
  font-weight: bold;
  color: #822020;
`;
export default CreateUser;