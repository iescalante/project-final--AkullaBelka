import React, {useEffect} from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppContext';

const ShowLoansToPay = ({loanData, setLoanData, setIsLoading}) => {
  const { userData } = React.useContext(AppContext);
  useEffect(() => {
    setIsLoading(true);
    fetch(`/loans/all/${userData.currentUser._id}`)
    .then(res => res.json())
    .then(responseBody => {
      setLoanData(responseBody.validLoansToPay);
      setIsLoading(false);
    })
  }, [])

  return (
    <StyledContainer>
      {loanData === null || loanData.length == 0 && (<div>No loans to pay! Maybe you might want to get one! </div>)}
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