import React, {useEffect} from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import Transaction from './Transaction';
import Spinner from '../Spinner';
import Footer from '../reusable-components/Footer';
import { AppContext } from '../AppContext';

const Transactions = () => {
  const { userData } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(`/transactions/${userData.currentUser._id}`)
    .then(res => res.json())
    .then(responseBody => {
      console.log(responseBody.transactions);
      setTransactions(responseBody.transactions);
      setIsLoading(false);
    })
  }, [userData.currentUser._id]);

  return(
    <Container>
      <Header pageTitle={"Transactions Page"}/>
      <TransactionsIntro>
        This is where you can view all your transactions! (+: Loan; -: Payment)
      </TransactionsIntro>
      <TransactionsContainer>
        <TransactionsHeadersList>
          <TransactionsHeader>Transaction Date (UTC)</TransactionsHeader>
          <TransactionsHeader>Amount ($)</TransactionsHeader>
          <TransactionsHeader>Due Date (UTC)</TransactionsHeader>
          <TransactionsHeader>Selected Rate</TransactionsHeader>
        </TransactionsHeadersList>
        { isLoading ? (<Spinner/>) : (
          transactions && transactions.map((transaction) => {
            return (
              <Transaction transaction={transaction}/>
            )
          })
        )}
      </TransactionsContainer>
      <Footer/>
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
    background-color: #508AA8;
  }
  & ul:nth-child(2n){
    background-color: #031927;
  }
`;
const TransactionsHeadersList = styled.ul`
  display: flex;
`;
const TransactionsHeader = styled.li`
  flex:1;
  margin:10px;
  font-weight:bold;
`;
export default Transactions;