import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import Footer from '../reusable-components/Footer';
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
      <Footer/>
    </Container>
  )
};

const ConfirmationContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 15px auto;
  border: 3px solid beige;
  border-radius: 15px;
  padding: 25px;
`;
const Title = styled.h1`
  font-size:2em;
  font-weight:bold;
  border-bottom: 2px solid beige;
`;
const InformativeLine = styled.h2`
  font-size: 1.25em;
  margin-top: 15px;
`;
const ConfirmationList = styled.ul`
  display:flex;
  flex-direction:column;
  border-bottom: 2px solid beige;
  padding-bottom: 15px;
`;
const ConfirmationItem = styled.li`
  font-weight:bold;
`;
const PrintButton = styled.button`
  margin: 10px auto;
  width:fit-content;
  margin-top: 15px;
`;
const GoHomeButton = styled.button`
  margin: 10px auto;
  width:fit-content;
`;
export default PaymentConfirmation;