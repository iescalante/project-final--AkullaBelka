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
  const { userData } = React.useContext(AppContext);
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
        daysToPay: Number(availableRate.daysToPayBack)
        })
  };
  fetch(`/loans/${userData.currentUser._id}/${selectedLender}`, requestOptions)
      .then(response => response.json())
      .then((responseBody) => {
        history.push("/main");
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
          Here is your summary of your selection, please review!
          <InfoLine>Asking Loan: {loan}</InfoLine>
          <InfoLine>Rate Selected :{selectedRate}</InfoLine>
          <InfoLine>Lender Selection: {selectedLender}</InfoLine>
          <SubmitButton type='submit'>Click here to submit everything</SubmitButton>
        </SubmitLoan>
      }
    </Container>
  )
};
const SubmitLoan = styled.form`
  display:flex;
  flex-direction:column;
  text-align: center;
`;
const InfoLine = styled.p`
  font-weight: bold;
`;
const SubmitButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background: goldenrod;
  cursor: pointer;
`;
export default GetLoan;