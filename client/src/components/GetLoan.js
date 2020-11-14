import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import AvailableRates from "./AvailableRates";
import AvailableLenders from './AvailableLenders';
import { AppContext } from '../AppContext';

const GetLoan = () => {
  const [availableRate, setAvailableRate] = React.useState(null);
  const [loan, setLoan] = React.useState(0);
  const [selectedRate, setSelectedRate] = React.useState(null);
  const [availableLenders, setAvailableLenders] = React.useState(null);
  const [selectedLender, setSelectedLender] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { userData, setUserData, setLoanConfirmation } = React.useContext(AppContext);
  const history = useHistory();

  const getRate = (ev) => {
    ev.preventDefault();
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
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        loanAmount: Number(loan),
        selectedRate: Number(selectedRate),
        daysToPay: Number(availableRate.daysToPayBack),
        paidAmount:0
        })
  };
  fetch(`/loans/${userData.currentUser._id}/${selectedLender}`, requestOptions)
      .then(response => response.json())
      .then((responseBody) => {
        console.log(userData);
        const newUser = {...userData.currentUser, totalLoaned: Number(loan) + userData.currentUser.totalLoaned}
        setUserData({
          ...userData,
          currentUser: newUser
        });
        setLoanConfirmation(responseBody);
        history.push("/main/get-loan/confirmation");
      });
  };

  return(
    <Container>
      <Header pageTitle={"Loan Application Page"}/>
      <AvailableRates
        availableRate={availableRate}
        loan={loan}
        setLoan={setLoan}
        selectedRate={selectedRate}
        setSelectedRate={setSelectedRate}
        getRate={getRate}
        isLoading={isLoading}
      />
      {availableRate  &&
        <AvailableLenders 
          loan={loan}
          availableLenders={availableLenders}
          setAvailableLenders={setAvailableLenders}
          selectedLender={selectedLender}
          setSelectedLender={setSelectedLender}
        />
      }
      {selectedRate && selectedLender &&
        <SubmitLoan onSubmit={submitLoanApplication}>
          <InfoHeader>Here is a summary of your selections, please review!</InfoHeader>
          <InfoLine>Loan: {loan}$</InfoLine>
          <InfoLine>Rate Selected: {selectedRate*100}%</InfoLine>
          <InfoLine>Selected Lender's ID: {selectedLender}</InfoLine>
          <SubmitButton type='submit'>Click here to submit everything</SubmitButton>
        </SubmitLoan>
      }
    </Container>
  )
};
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
  width: fit-content;
  background: goldenrod;
  cursor: pointer;
`;
export default GetLoan;