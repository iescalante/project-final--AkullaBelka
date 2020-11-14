import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import { AppContext } from '../AppContext';

const PaymentConfirmation = () => {
  const history = useHistory();
  const { paymentConfirmation } = React.useContext(AppContext);
  const handlePrint = (ev) => {
    ev.preventDefault();
    window.print();
  };
  const goToMain = (ev) => {
    ev.preventDefault();
    history.push("/main");
  };
  return (
    <Container>
      <Header/>
      <ConfirmationContainer>
        <Title>Payment Confirmation</Title>
        <InformativeLine>
          Please find your transaction information for your payment:
        </InformativeLine>
        <ConfirmationList>
          <ConfirmationItem>Transaction Date: {new Date(paymentConfirmation.transactionDate).toUTCString()}</ConfirmationItem>
          <ConfirmationItem>Payment: {paymentConfirmation.paidAmount}$</ConfirmationItem>
        </ConfirmationList>
        <PrintButton onClick={handlePrint}>Print Confirmation</PrintButton>
        <GoHomeButton onClick={goToMain}>Click to return to your Dashboard</GoHomeButton>
      </ConfirmationContainer>
    </Container>
  )
};

const ConfirmationContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 15px auto;
`;
const Title = styled.h1`
  font-size:2em;
  font-weight:bold;
`;
const InformativeLine = styled.h2`
  font-size: 1.25em;
`;
const ConfirmationList = styled.ul`
  display:flex;
  flex-direction:column;
`;
const ConfirmationItem = styled.li`
  font-weight:bold;
`;
const PrintButton = styled.button`
  margin: 10px auto;
  width:fit-content;
  background:goldenrod;
  cursor: pointer;
`;
const GoHomeButton = styled.button`
  margin: 10px auto;
  width:fit-content;
  background:goldenrod;
  cursor: pointer;
`;

export default PaymentConfirmation;