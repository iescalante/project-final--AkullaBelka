import React from 'react';
import styled from 'styled-components';
import MainHeader from '../reusable-components/MainHeader';
import Container from '../reusable-components/Container';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [profileVisible, setProfileVisible] = React.useState(false);
  const [loanVisible, setLoanVisible] = React.useState(false);
  const [transactionVisible, setTransactionVisible] = React.useState(false);

  const enterProfile = () => {
    setProfileVisible(true);
  };
  const enterLoan = () => {
    setLoanVisible(true);
  };
  const enterTransaction = () => {
    setTransactionVisible(true);
  };
  const leaveProfile = (e) => {
    setProfileVisible(false);
  };
  const leaveLoan = (e) => {
    setLoanVisible(false);
  };
  const leaveTransaction = (e) => {
    setTransactionVisible(false);
  };

  return (
    <Container>
      <MainHeader/>
      <IntroHeader>You will find all the available actions in this page</IntroHeader>
        <MainLinkContainer>
          <StyledLinkList>
            <StyledLinkContainer>
              <StyledLink onMouseEnter={enterProfile} onMouseLeave={leaveProfile} to="/main/profile">Profile</StyledLink>
              <LinkInformation style={{visibility: profileVisible ? "visible" : "hidden"}}>
                View personal information on user, personal score, loans, etc.
              </LinkInformation>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <StyledLink onMouseEnter={enterLoan} onMouseLeave={leaveLoan} to="/main/get-loan">Get a Loan</StyledLink>
              <LinkInformation style={{visibility: loanVisible ? "visible" : "hidden"}}>
                Request a loan to available users with available rates depending on personal score
              </LinkInformation>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <StyledLink onMouseEnter={enterTransaction} onMouseLeave={leaveTransaction} to="/main/transactions">Transactions</StyledLink>
              <LinkInformation style={{visibility: transactionVisible ? "visible" : "hidden"}}>
                View all transactions with details on start and due date, loan amounts, at what rate etc.
              </LinkInformation>
            </StyledLinkContainer>
          </StyledLinkList>
        </MainLinkContainer>
    </Container>
  )
};
const IntroHeader = styled.h2`
  font-size:1.25em;
  color: black;
  margin:12px 0;
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
`;
const LinkInformation = styled.p`
  color: black;
  margin-top: 10px;
`;
export default Homepage;