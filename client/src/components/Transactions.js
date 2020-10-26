import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import Transaction from './Transaction';

const Transactions = () => {
  return(
    <Container>
      <Header pageTitle={"Transactions Page"}/>
      <TransactionsIntro>This is where you can view all your transactions!</TransactionsIntro>
      <TransactionsContainer>
        <TransactionsHeadersList>
          <TransactionsHeader style={{fontWeight: "bold"}}>Transaction Date</TransactionsHeader>
          <TransactionsHeader style={{fontWeight: "bold"}}>Amount ($)</TransactionsHeader>
          <TransactionsHeader style={{fontWeight: "bold"}}>Due Date</TransactionsHeader>
          <TransactionsHeader style={{fontWeight: "bold"}}>Selected Rate</TransactionsHeader>
        </TransactionsHeadersList>
        <Transaction/>
        <Transaction/>
        <Transaction/>
        <Transaction/>
        <Transaction/>
        <Transaction/>
        <Transaction/>
      </TransactionsContainer>
    </Container>
  )
};
const TransactionsIntro = styled.h1`
  font-size: 1.3em;
  margin: 15px 0;
`;
const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & ul:nth-child(n) {
    background-color: grey;
  }
  & ul:nth-child(2n){
    background-color: white;
  }
`;
const TransactionsHeadersList = styled.ul`
  display: flex;
`;
const TransactionsHeader = styled.li`
  flex:1;
`;
export default Transactions;