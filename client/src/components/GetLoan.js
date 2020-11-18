import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import AvailableRates from "./AvailableRates";
import AvailableLenders from './AvailableLenders';
import Footer from '../reusable-components/Footer';
import { AppContext } from '../AppContext';

const GetLoan = () => {
  const [availableRate, setAvailableRate] = React.useState(null);
  const [loan, setLoan] = React.useState(0);
  const [selectedRate, setSelectedRate] = React.useState(null);
  const [availableLenders, setAvailableLenders] = React.useState(null);
  const [selectedLender, setSelectedLender] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { userData, setUserData, setLoanConfirmation } = React.useContext(AppContext);
  const history = useHistory();

  const getRate = (ev) => {
    ev.preventDefault();
    setError(false);
    setSelectedLender(null);
    setIsLoading(true);
    setAvailableRate(null);
    setAvailableLenders(null);
    fetch(`/rates/${userData.currentUser.score}/${loan}`)
    .then(res => res.json())
    .then(responseBody => {
      setAvailableRate(responseBody.availableRate);
      setIsLoading(false);
    })
  };

  const submitLoanApplication = (ev) => {
    ev.preventDefault();
    setError(false);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        loanAmount: Number(loan),
        selectedRate: Number(selectedRate),
        daysToPay: Number(availableRate.daysToPayBack),
        balance: Number(loan),
        paidAmount: 0,
        })
  };
  fetch(`/loans/${userData.currentUser._id}/${selectedLender}`, requestOptions)
      .then(response => response.json())
      .then((responseBody) => {
        if (responseBody.status === 400) {
          setError(true);
        } else {
          console.log(userData);
          const newUser = {...userData.currentUser, totalLoaned: Number(loan) + userData.currentUser.totalLoaned}
          setUserData({
            ...userData,
            currentUser: newUser
          });
          setLoanConfirmation(responseBody);
          history.push("/main/get-loan/confirmation");
        }
      });
  };

  return(
    <Container>
      <Header pageTitle={"Loan Application Page"}/>
      <Instructions>
        Follow these simple steps:
        <InstructionStep>Decide on the amount of the loan you need and get your rate</InstructionStep>
        <InstructionStep>Select your available rate</InstructionStep>
        <InstructionStep>Decide on the lender to choose and select</InstructionStep>
        <InstructionStep>Review your summary and click on "GET YOUR LOAN!"</InstructionStep>
      </Instructions>
      <AvailableRates
        availableRate={availableRate}
        loan={loan}
        setLoan={setLoan}
        selectedRate={selectedRate}
        setSelectedRate={setSelectedRate}
        getRate={getRate}
        isLoading={isLoading}
      />
      {availableRate  && !error &&
        <AvailableLenders 
          loan={loan}
          availableLenders={availableLenders}
          setAvailableLenders={setAvailableLenders}
          selectedLender={selectedLender}
          setSelectedLender={setSelectedLender}
        />
      }
      {error && <Error>You've reached your loan limit! Pay first, then keep the business going! Or choose another amount.</Error>}
      {selectedRate && selectedLender && !error &&
        <SubmitLoan onSubmit={submitLoanApplication}>
          <InfoHeader>Here is a summary of your selections, please review!</InfoHeader>
          <InfoLine>Loan: {loan}$</InfoLine>
          <InfoLine>Rate Selected: {selectedRate*100}%</InfoLine>
          <InfoLine>Selected Lender's ID: {selectedLender}</InfoLine>
          <SubmitButton type='submit'>GET YOUR LOAN!</SubmitButton>
        </SubmitLoan>
      }
      <Footer/>
    </Container>
  )
};
const Instructions = styled.ol`
  display:flex;
  flex-direction:column;
  list-style: decimal;
  margin: 0 auto;
`;
const InstructionStep = styled.li`
  margin: 10px 0;
`;
const Error = styled.p`
  margin: 15px auto;
  padding: 10px;
  max-width: 295px;
  text-align: justify;
  border: 3px #d21717 dotted;
  font-weight: bold;
  color: #822020;
`;
const SubmitLoan = styled.form`
  display:flex;
  flex-direction:column;
  margin: 0 auto;
`;
const InfoHeader = styled.h2`
  font-size: 1.2em;
`;
const InfoLine = styled.p`
  font-weight: bold;
  text-align: left;
`;
const SubmitButton = styled.button`
  margin: 10px auto;
  padding: 20px 60px;
  background: goldenrod;
  cursor: pointer;
`;
export default GetLoan;