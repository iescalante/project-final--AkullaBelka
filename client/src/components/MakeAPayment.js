import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import ShowLoansToPay from './ShowLoansToPay';
import PendingLoans from './PendingLoans';
import PaymentAmount from './PaymentAmount';

const MakeAPayment = () => {
  const [loanData, setLoanData] = React.useState(null);
  const [selectedLoan, setSelectedLoan] = React.useState(null);
  const [payment, setPayment] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const submitPaymentApplication = (ev) => {
    ev.preventDefault();
    console.log("payment submitted!");
  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       loanAmount: Number(loan),
  //       selectedRate: Number(selectedRate),
  //       daysToPay: Number(availableRate.daysToPayBack),
  //       paidAmount:0
  //       })
  // };
  // fetch(`/loans/${userData.currentUser._id}/${selectedLender}`, requestOptions)
  //     .then(response => response.json())
  //     .then((responseBody) => {
  //       console.log(userData);
  //       const newUser = {...userData.currentUser, totalLoaned: Number(loan) + userData.currentUser.totalLoaned}
  //       setUserData({
  //         ...userData,
  //         currentUser: newUser
  //       });
  //       console.log(userData);
  //       history.push("/main");
  //     });
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
        <PendingLoans
          selectedLoan={selectedLoan}
          setSelectedLoan={setSelectedLoan}
        />
        <PaymentAmount
          payment={payment}
          setPayment={setPayment}
        />
        <SubmitPaymentForm onSubmit={submitPaymentApplication}>
          Here is your summary of your selection, please review!
          <InfoLine>Loan selected to pay: </InfoLine>
          <InfoLine>Payment Amount: </InfoLine>
          <InfoLine>Due Date: </InfoLine>
          <SubmitButton>Click here to submit payment!</SubmitButton>
        </SubmitPaymentForm>
      </Container>
    )
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
export default MakeAPayment;