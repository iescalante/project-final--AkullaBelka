import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Homepage = () => {
    return (
        <Container>
          <Header>
          <TopMessage>Welcome, First Name!</TopMessage>
          <StyledLink to="/signout">Sign Out</StyledLink>
          </Header>
        <div>
          <ul>
            <li>Profile</li>
            <li>Get a Loan</li>
            <li>Transactions</li>
            <li>Available Rates</li>
          </ul>
        </div>
        </Container>
    )
    };

const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: 15px;
`;
const Header = styled.div`
 display:flex;

`;
const TopMessage = styled.h1`
  flex:8;
  font-size: 2rem;
`;
const StyledLink = styled(Link)`
  color:black;
  text-decoration: none;
  flex:1;
  margin:auto;
`;
export default Homepage;