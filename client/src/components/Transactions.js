import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import Transaction from './Transaction';
import Spinner from '../Spinner';
import { AppContext } from '../AppContext';

const Transactions = () => {
  const { userData } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState(null);

  const showTransactions = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    fetch(`/transactions/${userData.currentUser._id}`)
    .then(res => res.json())
    .then(responseBody => {
      console.log(responseBody.transactions);
      setTransactions(responseBody.transactions);
      setIsLoading(false);
    })

  }
  return(
    <Container>
      <Header pageTitle={"Transactions Page"}/>
      <TransactionsIntro>
        This is where you can view all your transactions!
        <ShowTransactionsButton onClick={showTransactions}>Show All Transactions</ShowTransactionsButton>
      </TransactionsIntro>
      <TransactionsContainer>
        <TransactionsHeadersList>
          <TransactionsHeader style={{fontWeight: "bold"}}>Transaction Date</TransactionsHeader>
          <TransactionsHeader style={{fontWeight: "bold"}}>Amount ($)</TransactionsHeader>
          <TransactionsHeader style={{fontWeight: "bold"}}>Due Date</TransactionsHeader>
          <TransactionsHeader style={{fontWeight: "bold"}}>Selected Rate</TransactionsHeader>
        </TransactionsHeadersList>
        { isLoading ? (<Spinner/>) : (
          transactions && transactions.map((transaction) => {
            return (
              <Transaction transaction={transaction}/>
            )
          })
        )}
      </TransactionsContainer>
    </Container>
  )
};
const TransactionsIntro = styled.h1`
  font-size: 1.3em;
  margin: 15px 0;
`;
const ShowTransactionsButton = styled.button`
  display:block;
  margin: 10px auto;
  width:fit-content;
  background:goldenrod;
  cursor: pointer;
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
  margin:10px;
`;
export default Transactions;