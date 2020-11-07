import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';

const SubmitPayment = () => {
  return (
    <Container>
      <SubmitPaymentForm >
        Here is your summary of your selection, please review!
        <InfoLine>Loan selected to pay: </InfoLine>
        <InfoLine>Payment Amount: </InfoLine>
        <InfoLine>Due Date: </InfoLine>
        <SubmitButton type='submit'>Click here to submit payment!</SubmitButton>
      </SubmitPaymentForm>
    </Container>
  );
};
const SubmitPaymentForm = styled.form`
  display:flex;
  flex-direction:column;
  text-align: center;
`;
const InfoLine = styled.p`
  font-weight: bold;
`;
const SubmitButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background: goldenrod;
  cursor: pointer;
`;
export default SubmitPayment;