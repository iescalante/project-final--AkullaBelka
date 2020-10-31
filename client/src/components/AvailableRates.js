import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import SelectedRate from './SelectedRate';
import { AppContext } from '../AppContext';
import Spinner from '../Spinner';

const AvailableRates = ({availableRate, setAvailableRate, selectedRate, setSelectedRate, loan, setLoan}) => {
  const { userData } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const changeLoanAmount = (ev) => {
    setLoan(ev.target.value);
  };
  const getRate = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    fetch(`/rates/${userData.currentUser.score}/${loan}`)
    .then(res => res.json())
    .then(responseBody => {
      console.log(responseBody.availableRate)
      setAvailableRate(responseBody.availableRate);
      setIsLoading(false);
    })
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
  margin:0 auto;
`;
export default AvailableRates;