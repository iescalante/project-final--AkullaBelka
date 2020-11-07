import React from 'react';
import styled from 'styled-components';

const ShowLoansToPay = () => {
  return (
    <StyledContainer>
      Show me my loans to pay today!
      <ShowLoansButton>Show Loans!</ShowLoansButton>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  text-align: center;
`;
const ShowLoansButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background: goldenrod;
  cursor: pointer;
`;
export default ShowLoansToPay;