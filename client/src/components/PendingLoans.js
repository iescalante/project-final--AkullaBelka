import React from 'react';
import Container from '../reusable-components/Container';
import LoanItem from './LoanItem';

const PendingLoans = ({setSelectedLoan, loanData}) => {
  return(
    <Container>
      {loanData.map((loan) => {
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
export default PendingLoans;