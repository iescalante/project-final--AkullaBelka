import React from 'react';
import styled from 'styled-components';

const LoanItem = ({loanId,transactionDate,dueDate,loanAmount,selectedRate,paidAmount,lenderId,setSelectedLoan}) => {
  const handleSelectedLoan = (ev) => {
    ev.preventDefault();
    setSelectedLoan({
      loanId,
      transactionDate,
      dueDate,
      loanAmount,
      selectedRate,
      lenderId
    })
  };

  return (
    <SingleLoanDiv>
      <LoanInfoList>
        <LoanInfo>Transaction Date: {transactionDate}</LoanInfo>
        <LoanInfo>Due Date: {dueDate}</LoanInfo>
        <LoanInfo>Loan Amount: {loanAmount}$</LoanInfo>
        <LoanInfo>Selected rate for loan: {selectedRate*100}%</LoanInfo>
        <LoanInfo>Paid amount to date: {paidAmount}$</LoanInfo>
      </LoanInfoList>
      <SelectLoanButton onClick={handleSelectedLoan}>Select this loan to pay</SelectLoanButton>
    </SingleLoanDiv>
  )
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
export default LoanItem;