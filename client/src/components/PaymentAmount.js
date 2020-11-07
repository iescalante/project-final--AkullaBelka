import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';

const PaymentAmount = () => {
  return (
    <Container>
      <ChoosePaymentAmount>
        <PaymentLabel>
          How much money do you want to pay back? :
          <PaymentInput type="number" name="payment" />
        </PaymentLabel>
        <PaymentButton type="submit">Click to add payment!</PaymentButton>
      </ChoosePaymentAmount>
    </Container>
  );
};
const ChoosePaymentAmount = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const PaymentLabel = styled.label`
  margin: 10px 0;
  display:flex;
  flex:1;
  font-weight:bold;
`;
const PaymentInput = styled.input`
  flex:2;
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const PaymentButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background:goldenrod;
  cursor:pointer;
`;
export default PaymentAmount