import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppContext';

const ShowLoansToPay = ({setLoanData, setIsLoading}) => {
  const { userData } = React.useContext(AppContext);

  const getUserLoans = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    fetch(`/loans/all/${userData.currentUser._id}`)
    .then(res => res.json())
    .then(responseBody => {
      setLoanData(responseBody.validLoansToPay);
      setIsLoading(false);
    })
  };

  return (
    <StyledContainer>
      Show me my loans to pay today!
      <ShowLoansButton onClick={getUserLoans}>Show Loans!</ShowLoansButton>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  text-align: center;
  font-weight:bold;
`;
const ShowLoansButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background: goldenrod;
  cursor: pointer;
`;
export default ShowLoansToPay;