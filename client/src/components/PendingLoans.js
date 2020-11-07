import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import LoanItem from './LoanItem';

const PendingLoans = ({selectedLoan, setSelectedLoan, loanData}) => {
  return(
    <Container>
      {loanData.map((loan)=> {
        return (
          <LoanItem
            loanId={loan._id}
            transactionDate={loan.transactionDate}
            dueDate={loan.dueDate}
            loanAmount={loan.loanAmount}
            selectedRate={loan.selectedRate}
            paidAmount={loan.paidAmount}
            lenderId={loan.lenderId}
            setSelectedLoan={setSelectedLoan}
          />)
      })}
    </Container>
  );
};
export default PendingLoans;