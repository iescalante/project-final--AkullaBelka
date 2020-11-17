import React from 'react';
import styled from 'styled-components';

const Transaction = ({transaction}) => {
  return (
    <TransactionList>
      <TransactionHeader>{new Date(transaction.transactionDate).toUTCString()}</TransactionHeader>
      {transaction.loanAmount  
        ? <TransactionHeader>+{transaction.loanAmount}</TransactionHeader>
        : (transaction.paidAmount
          ? <TransactionHeader>-{transaction.paidAmount}</TransactionHeader>
          : <TransactionHeader>+{transaction.addedInterest}</TransactionHeader>
          )  
      }
      {transaction.dueDate
        ?<TransactionHeader>{new Date(transaction.dueDate).toUTCString()}</TransactionHeader>
        :<TransactionHeader>N/AP</TransactionHeader>
      }
      {transaction.selectedRate
        ?<TransactionHeader>{(transaction.selectedRate)*100}%</TransactionHeader>
        :<TransactionHeader>N/AP</TransactionHeader>
      }
    </TransactionList>
  )
};
const TransactionList = styled.ul`
  display: flex;
`;
const TransactionHeader = styled.li`
  flex:1;
  margin: 10px;
`;
export default Transaction;