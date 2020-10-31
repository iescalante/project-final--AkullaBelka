import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import AvailableRates from "./AvailableRates";

const GetLoan = () => {
  return(
    <Container>
      <Header pageTitle={"Loan Application Page"}/>
      <AvailableRates/>
      <div>This is where you apply to get a loan!</div>
    </Container>
  )
};
export default GetLoan;