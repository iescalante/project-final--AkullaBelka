import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import AvailableRates from "./AvailableRates";
import AvailableLenders from './AvailableLenders';

const GetLoan = () => {
  const [availableRate, setAvailableRate] = React.useState(null);
  const [loan, setLoan] = React.useState(0);
  const [selectedRate, setSelectedRate] = React.useState(0);

  return(
    <Container>
      <Header pageTitle={"Loan Application Page"}/>
      <AvailableRates
        availableRate={availableRate}
        setAvailableRate={setAvailableRate}
        loan={loan}
        setLoan={setLoan}
        selectedRate={selectedRate}
        setSelectedRate={setSelectedRate}
      />
      {/* <AvailableLenders/> */}
    </Container>
  )
};
export default GetLoan;