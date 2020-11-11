import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import SelectedLender from './SelectedLender';
import Spinner from '../Spinner';

const AvailableLenders = ({ loan, availableLenders, setAvailableLenders, selectedLender, setSelectedLender }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [noLenders, setNoLenders] = React.useState(false);

  const getLenders = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    setNoLenders(false);

    fetch(`/loans/${loan}`)
    .then(res => res.json())
    .then(responseBody => {
      if (responseBody.data.length === 0) {
        setNoLenders(true);
      } else {
        setAvailableLenders(
          responseBody.data.map((lender)=> { 
            return {
              lenderId: lender._id,
              availableLoan: lender.lenderProfile.availableLoan,
              totalLoan: lender.lenderProfile.totalLoan
            }
          })
        );
      }
      setIsLoading(false);
    })
  };
  console.log(availableLenders);
  return(
    <Container>
      <GetLendersForm onSubmit={getLenders}>
        <GetLendersLabel>Select your Lender here</GetLendersLabel>
        <GetLendersButton type="submit">Get Lenders!</GetLendersButton>
      </GetLendersForm>
      {noLenders && <NoLendersDiv>The loan amount requested does not match any lenders. Try again or try later!</NoLendersDiv>}
      {isLoading ? (<Spinner/>) : (
        <LendersDiv>
          {availableLenders && availableLenders.map((lender) => {
            return (
              <SelectedLender
                lenderId={lender.lenderId}
                availableLoan={lender.availableLoan}
                totalLoan={lender.totalLoan}
                selectedLender={selectedLender}
                setSelectedLender={setSelectedLender}
              />)
          })}
        </LendersDiv>
      )}
    </Container>
  )
};
const GetLendersForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const GetLendersLabel = styled.label`
  margin: 10px 0;
  display:flex;
  flex:1;
  font-weight:bold;
`;
const GetLendersButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background:goldenrod;
  cursor: pointer;
`;
const NoLendersDiv = styled.div`
  margin: 10px auto;
  padding: 10px;
  max-width: 295px;
  text-align: justify;
  border: 3px #d21717 dotted;
  font-weight: bold;
  color: #822020;
`;
const LendersDiv = styled.div`
  display:flex;
  font-size:0.9em;
  text-align:center;
`;
export default AvailableLenders;