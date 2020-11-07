import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';

const PaymentAmount = ({payment, setPayment}) => {
  const handleSelectedPayment = (ev) => {
    setPayment(ev.target.value);
  };
  console.log(payment);
  return (
    <Container>
      <ChoosePaymentAmount>
        <PaymentLabel>
          How much money do you want to pay back? :
          <PaymentInput onChange={handleSelectedPayment} type="number" value={payment}/>
        </PaymentLabel>
      </ChoosePaymentAmount>
    </Container>
  );
};
const ChoosePaymentAmount = styled.div`
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
export default PaymentAmount