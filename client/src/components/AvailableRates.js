import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
// import RateInfo from './RateInfo';

const AvailableRates = () => {
  const [availableRates, setAvailableRates] = React.useState([]);
  const [loan, setLoan] = React.useState(0);
  const [selectedRate, setSelectedRate] = React.useState(0);
  const changeLoanAmount = (ev) => {
    setLoan(ev.target.value);
  };

  const getRates = (ev) => {
    ev.preventDefault();
    fetch(`/rates`)
    .then(res => res.json())
    .then(responseBody => {
      console.log(responseBody.data)
      setAvailableRates(responseBody.data);
    })
  };

  const selectRate = (ev) => {
    ev.preventDefault();
    setSelectedRate(ev.target.value);
    console.log(selectedRate);
  };

  return(
    <Container>
      <GetRateForm onSubmit={getRates}>
        <GetRateLabel>
          How much money do you need?:
          <LoanInput onChange ={changeLoanAmount} type="number" name="loan" value={loan}/>
        </GetRateLabel>
        <GetRateButton type="submit">Get a Rate!</GetRateButton>
      </GetRateForm>
      <RatesDiv>
        {availableRates && availableRates.length > 0 && 
          availableRates.map((rate)=>{
            return(
              <SingleRateForm>
                <InfoLine>Rate: {rate.rate}</InfoLine>
                <InfoLine>Score Required: {rate.minScore}</InfoLine>
                <InfoLine>Minimum Loan: {rate.minLoan}</InfoLine>
                <InfoLine>Maximum Loan: {rate.maxLoan}</InfoLine>
                <InfoLine>Grace Period (Days): {rate.daysToPayBack}</InfoLine>
                <SelectRateButton onClick={selectRate} type="submit" value={rate.rate}>Select This Rate</SelectRateButton>
              </SingleRateForm>
            )
          })
        }
      </RatesDiv>
    </Container>
  )
};
const GetRateForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const GetRateLabel = styled.label`
  margin: 10px 0;
  display:flex;
  flex:1;
`;
const LoanInput = styled.input`
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
const GetRateButton = styled.button`
  margin: 10px 0;
  background:goldenrod;
`;
const RatesDiv = styled.div`
  display:flex;
  font-size:0.9em;
`;
const SingleRateForm = styled.form`
  display:flex;
  flex-direction:column;
  margin: 15px 0;
  flex:1;
`;
const InfoLine = styled.p`
  font-weight:bold;
`;
const SelectRateButton = styled.button`
  background:goldenrod;
  cursor: pointer;
`;
export default AvailableRates;