import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';

const PendingLoans = ({selectedLoan, setSelectedLoan}) => {
  return(
    <Container>
      <SingleLoanDiv>
        <LoanInfoList>
          <LoanInfo>One info</LoanInfo>
          <LoanInfo>Two info</LoanInfo>
          <LoanInfo>Three info</LoanInfo>
          <LoanInfo>Four info</LoanInfo>
        </LoanInfoList>
        <SelectLoanButton>Select this loan to pay</SelectLoanButton>
      </SingleLoanDiv>
      <SingleLoanDiv>
        <LoanInfoList>
          <LoanInfo>One info</LoanInfo>
          <LoanInfo>Two info</LoanInfo>
          <LoanInfo>Three info</LoanInfo>
          <LoanInfo>Four info</LoanInfo>
        </LoanInfoList>
        <SelectLoanButton>Select this loan to pay</SelectLoanButton>
      </SingleLoanDiv>
      <SingleLoanDiv>
        <LoanInfoList>
          <LoanInfo>One info</LoanInfo>
          <LoanInfo>Two info</LoanInfo>
          <LoanInfo>Three info</LoanInfo>
          <LoanInfo>Four info</LoanInfo>
        </LoanInfoList>
        <SelectLoanButton>Select this loan to pay</SelectLoanButton>
      </SingleLoanDiv>
    </Container>
  );
};
const SingleLoanDiv = styled.div`
  display: flex;
  margin: 15px auto;
`;
const LoanInfoList = styled.ul`
  flex: 3;
`;
const LoanInfo = styled.li`
  font-weight: bold;
`;
const SelectLoanButton = styled.button`
  flex: 1;
  height: 50px;
  margin: auto;
  width: 300px;
  background: goldenrod;
  cursor: pointer;
`;
export default PendingLoans;