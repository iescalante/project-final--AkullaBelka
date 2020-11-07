import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import ShowLoansToPay from './ShowLoansToPay';
import PendingLoans from './PendingLoans';
import PaymentAmount from './PaymentAmount';
import SubmitPayment from './SubmitPayment';

const MakeAPayment = () => {
    return (
      <Container>
        <Header pageTitle={"Make a Payment"}/>
        <ShowLoansToPay />
        <PendingLoans />
        <PaymentAmount />
        <SubmitPayment />
      </Container>
    )
};

export default MakeAPayment;