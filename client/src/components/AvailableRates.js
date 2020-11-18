import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import SelectedRate from './SelectedRate';
import Spinner from '../Spinner';

const AvailableRates = ({ availableRate, loan, setLoan, selectedRate, setSelectedRate, getRate, isLoading}) => {
  const changeLoanAmount = (ev) => {
    setLoan(ev.target.value);
  };

  return(
    <Container>
      <GetRateForm onSubmit={getRate}>
        <GetRateLabel>
          How much money do you need?:
          <LoanInput onChange ={changeLoanAmount} type="number" name="loan" value={loan}/>
        </GetRateLabel>
        <GetRateButton type="submit">Get a Rate!</GetRateButton>
      </GetRateForm>
      {isLoading ? (<Spinner/>) : (
        <RatesDiv>
          {availableRate && 
            <SelectedRate 
              availableRate={availableRate}
              selectedRate={selectedRate}
              setSelectedRate={setSelectedRate}
            />
          }
        </RatesDiv>
        )}
    </Container>
  )};
const GetRateForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const GetRateLabel = styled.label`
  margin: 10px 0;
  display:flex;
  flex:1;
  font-weight:bold;
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
  margin: 10px auto;
  width: fit-content;
`;
const RatesDiv = styled.div`
  display:flex;
  font-size:0.9em;
  margin:0 auto;
`;
export default AvailableRates;