import React from 'react';
import styled from 'styled-components';

const LoanItem = ({loanId,transactionDate,dueDate,loanAmount,selectedRate,balance,lenderId,lastTimeChecked,setSelectedLoan}) => {
  const handleSelectedLoan = (ev) => {
    ev.preventDefault();
    setSelectedLoan({
      loanId,
      transactionDate,
      dueDate,
      loanAmount,
      selectedRate,
      lenderId,
      lastTimeChecked
    })
  };
  const daysPassed = (end,start) => {
    let howManyDaysLeft = (Date.parse(end) - Date.parse(start))/(1000*60*60*24);
    return howManyDaysLeft;
  }
  
  return (
    <SingleLoanDiv>
      <LoanInfoList>
        <LoanInfo>Transaction Date: {new Date(transactionDate).toUTCString()}</LoanInfo>
        <LoanInfo>Due Date: {new Date(dueDate).toUTCString()}</LoanInfo>
        <LoanInfo>Days before due date: {daysPassed(dueDate,lastTimeChecked).toFixed(0)}</LoanInfo>
        <LoanInfo>Selected rate for loan: {selectedRate*100}%</LoanInfo>
        <LoanInfo>Initial Loan: {loanAmount}$</LoanInfo>
        <LoanInfo>Loan Balance: {balance}$</LoanInfo>
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
  & :nth-child(2) {
    color:red;
  }
`;
const LoanInfo = styled.li`
  font-weight: bold;
`;
const SelectLoanButton = styled.button`
  flex: 1;
  margin: auto;
  width: 300px;
`;
export default LoanItem;