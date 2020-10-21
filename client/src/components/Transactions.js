import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';

const Transactions = () => {
  return(
    <Container>
      <Header pageTitle={"Transactions Page"}/>
      <div>This is where you can view all your transactions!</div>
    </Container>
  )
};
export default Transactions;