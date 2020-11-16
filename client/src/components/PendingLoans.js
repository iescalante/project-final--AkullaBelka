import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import LoanItem from './LoanItem';

const PendingLoans = ({setSelectedLoan, loanData}) => {
  return(
    <Container>
      {loanData.map((loan)=> {
        if (loan.balance > 0) {
          return (
            <LoanItem
              loanId={loan._id}
              transactionDate={loan.transactionDate}
              dueDate={loan.dueDate}
              loanAmount={loan.loanAmount}
              selectedRate={loan.selectedRate}
              balance={loan.balance}
              lenderId={loan.lenderId}
              lastTimeChecked={loan.lastTimeChecked}
              setSelectedLoan={setSelectedLoan}
            />)
        }})}
    </Container>
  )
};
const NoLoans = styled.div`
  margin: 15px auto;
  font-size: 1.5em;
  font-weight: bold;
`;
export default PendingLoans;