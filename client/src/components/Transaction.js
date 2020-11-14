import React from 'react';
import styled from 'styled-components';

const Transaction = ({transaction}) => {
  return (
    <TransactionList>
      <TransactionHeader>{new Date(transaction.transactionDate).toUTCString()}</TransactionHeader>
      {transaction.loanAmount  
        ?<TransactionHeader>+{transaction.loanAmount}</TransactionHeader>
        :<TransactionHeader>-{transaction.paidAmount}</TransactionHeader>  
      }
      <TransactionHeader>{new Date(transaction.dueDate).toUTCString() || "N/Ap"}</TransactionHeader>
      {transaction.selectedRate
        ?<TransactionHeader>{(transaction.selectedRate)*100}%</TransactionHeader>
        :<TransactionHeader>N/Ap</TransactionHeader>
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