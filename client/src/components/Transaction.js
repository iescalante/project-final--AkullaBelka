import React from 'react';
import styled from 'styled-components';

const Transaction = ({transaction}) => {
  return (
    <TransactionList>
      <TransactionHeader>{transaction.transactionDate}</TransactionHeader>
      <TransactionHeader>{transaction.loanAmount}</TransactionHeader>
      <TransactionHeader>{transaction.dueDate}</TransactionHeader>
      <TransactionHeader>{(transaction.selectedRate)*100}%</TransactionHeader>
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