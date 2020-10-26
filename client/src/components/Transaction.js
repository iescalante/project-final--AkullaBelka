import React from 'react';
import styled from 'styled-components';

const Transaction = () => {
  return (
    <TransactionList>
      <TransactionHeader>28 October 2020</TransactionHeader>
      <TransactionHeader>200</TransactionHeader>
      <TransactionHeader>28 November 2020</TransactionHeader>
      <TransactionHeader>15%</TransactionHeader>
    </TransactionList>
  )
};
const TransactionList = styled.ul`
  display: flex;
`;
const TransactionHeader = styled.li`
  flex:1;
`;
export default Transaction;