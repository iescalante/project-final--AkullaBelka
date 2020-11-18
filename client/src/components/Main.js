import React from 'react';
import styled from 'styled-components';
import MainHeader from '../reusable-components/MainHeader';
import Container from '../reusable-components/Container';
import Footer from '../reusable-components/Footer';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [profileVisible, setProfileVisible] = React.useState(false);
  const [loanVisible, setLoanVisible] = React.useState(false);
  const [transactionVisible, setTransactionVisible] = React.useState(false);
  const [paymentVisible, setPaymentVisible] = React.useState(false);
//Hovering on Links
  const enterProfile = () => {
    setProfileVisible(true);
  };
  const enterLoan = () => {
    setLoanVisible(true);
  };
  const enterPayment = () => {
    setPaymentVisible(true);
  };
  const enterTransaction = () => {
    setTransactionVisible(true);
  };
//Hovering away from Links
  const leaveProfile = () => {
    setProfileVisible(false);
  };
  const leaveLoan = () => {
    setLoanVisible(false);
  };
  const leavePayment = () => {
    setPaymentVisible(false);
  };
  const leaveTransaction = () => {
    setTransactionVisible(false);
  };
  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    },[]);
    


  return (
    <Container>
      <MainHeader/>
      <IntroHeader>You will find all the available actions in this page</IntroHeader>
        <MainLinkContainer>
          <StyledLinkList>
            <StyledLinkContainer>
              <StyledLink onMouseEnter={enterProfile} onMouseLeave={leaveProfile} to="/main/profile">PROFILE</StyledLink>
              <LinkInformation style={{visibility: profileVisible ? "visible" : "hidden"}}>
                View personal information on user, personal score, loans, etc
              </LinkInformation>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <StyledLink onMouseEnter={enterLoan} onMouseLeave={leaveLoan} to="/main/get-loan">GET A LOAN</StyledLink>
              <LinkInformation style={{visibility: loanVisible ? "visible" : "hidden"}}>
                Request a loan to available users with available rates depending on personal score
              </LinkInformation>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <StyledLink onMouseEnter={enterPayment} onMouseLeave={leavePayment} to="/main/make-payment">MAKE A PAYMENT</StyledLink>
              <LinkInformation style={{visibility: paymentVisible ? "visible" : "hidden"}}>
                Make a payment to your loans and clear your outstanding debts
              </LinkInformation>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <StyledLink onMouseEnter={enterTransaction} onMouseLeave={leaveTransaction} to="/main/transactions">TRANSACTIONS</StyledLink>
              <LinkInformation style={{visibility: transactionVisible ? "visible" : "hidden"}}>
                View all transactions with details on start and due date, loan amounts, payments, etc
              </LinkInformation>
            </StyledLinkContainer>
          </StyledLinkList>
        </MainLinkContainer>
        <Footer/>
    </Container>
  )
};
const IntroHeader = styled.h2`
  font-size:1.25em;
  color: #C8E0F4;
  margin-top:12px;
  margin-left: 66px;
`;
const MainLinkContainer = styled.div`
  margin: 0 auto;
`;
const StyledLinkList = styled.ul`
  display:flex;
  flex-direction:column;
`;
const StyledLinkContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 25px 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5em;
`;
const LinkInformation = styled.p`
  color: #C8E0F4;
  margin-top: 10px;
`;
export default Homepage;