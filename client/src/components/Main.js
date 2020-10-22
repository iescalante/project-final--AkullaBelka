import React from 'react';
import styled from 'styled-components';
import MainHeader from '../reusable-components/MainHeader';
import Container from '../reusable-components/Container';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Container>
      <MainHeader/>
        <div>
          <ul>
            <StyledLink to="/main/profile">Profile</StyledLink>
            <StyledLink to="/main/get-loan">Get a Loan</StyledLink>
            <StyledLink to="/main/transactions">Transactions</StyledLink>
          </ul>
        </div>
    </Container>
  )
};
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`
export default Homepage;