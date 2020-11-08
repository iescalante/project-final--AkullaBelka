import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import Spinner from '../Spinner';
import ShowLoansToPay from './ShowLoansToPay';
import PendingLoans from './PendingLoans';
import PaymentAmount from './PaymentAmount';
import {AppContext} from '../AppContext';

const MakeAPayment = () => {
  const [error, setError] = React.useState(null);
  const [loanData, setLoanData] = React.useState(null);
  const [selectedLoan, setSelectedLoan] = React.useState(null);
  const [payment, setPayment] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { userData, setUserData, setPaymentConfirmation } = React.useContext(AppContext);
  const history = useHistory();

  const submitPaymentApplication = (ev) => {
    ev.preventDefault();
    console.log("payment submitted!");
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paidAmount: Number(payment),
        loanId: selectedLoan.loanId
        })
  };
  fetch(`/loans/all/${userData.currentUser._id}/${selectedLoan.lenderId}`, requestOptions)
      .then(response => response.json())
      .then((responseBody) => {
        if (responseBody.status === 200) {
          setError(null);
          const newUser = {...userData.currentUser, totalLoaned: userData.currentUser.totalLoaned - Number(payment)}
          setUserData({
            ...userData,
            currentUser: newUser
          });
          setPaymentConfirmation(responseBody);
          history.push("/main/make-payment/confirmation");
        } else {
          setError(responseBody.message);
          return;
        }
      });
  };
    return (
      <Container>
        <Header pageTitle={"Make a Payment"}/>
        <ShowLoansToPay
          loanData={loanData}
          setLoanData={setLoanData}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        {isLoading ? (<Spinner/>) :(
          <>
            {loanData && (
              <>
                <PendingLoans
                  loanData={loanData}
                  selectedLoan={selectedLoan}
                  setSelectedLoan={setSelectedLoan}
                />
                <PaymentAmount
                  payment={payment}
                  setPayment={setPayment}
                />
                { error && <Error>{error}</Error>}
                {selectedLoan && payment && (
                  <>
                    <SubmitPaymentForm onSubmit={submitPaymentApplication}>
                      <InfoHeader>Here is your summary of your selection, please review!</InfoHeader>
                      <InfoLine>Loan selected to pay: {selectedLoan.loanAmount}$</InfoLine>
                      <InfoLine>Payment: {payment}$</InfoLine>
                      <InfoLine>Due Date: {selectedLoan.dueDate}</InfoLine>
                      <SubmitButton>Click here to submit payment!</SubmitButton>
                    </SubmitPaymentForm>
                  </>
                ) }
              </>
            )}
          </>
        )}
      </Container>
    )
};
const SubmitPaymentForm = styled.form`
  display:flex;
  flex-direction:column;
  margin: 0 auto;
`;
const InfoHeader = styled.h2`
  font-size: 1.2em;
`;
const InfoLine = styled.p`
  font-weight: bold;
  text-align: left;
`;
const SubmitButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background: goldenrod;
  cursor: pointer;
`;
const Error = styled.p`
  margin: 20px auto;
  max-width: 295px;
  text-align: justify;
  border: 3px #d21717 dotted;
  font-weight: bold;
  color: #822020;
`;
export default MakeAPayment;