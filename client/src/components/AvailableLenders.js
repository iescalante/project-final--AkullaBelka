import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
// import SelectedLender from './SelectedLender';
import { AppContext } from '../AppContext';

const AvailableRates = () => {
  const [availableRate, setAvailableRate] = React.useState(null);
  const [loan, setLoan] = React.useState(0);
  const [selectedRate, setSelectedRate] = React.useState(0);
  const { userData } = React.useContext(AppContext);

  const changeLoanAmount = (ev) => {
    setLoan(ev.target.value);
  };

  const getRate = (ev) => {
    ev.preventDefault();
    fetch(`/rates/${userData.currentUser.score}/${loan}`)
    .then(res => res.json())
    .then(responseBody => {
      console.log(responseBody.availableRate)
      setAvailableRate(responseBody.availableRate);
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
      <RatesDiv>
        {availableRate && 
          <SelectedRate 
            availableRate={availableRate}
            selectedRate={selectedRate}
            setSelectedRate={setSelectedRate}
          />
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
export default AvailableRates;