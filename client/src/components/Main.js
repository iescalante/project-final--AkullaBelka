import React from 'react';
import styled from 'styled-components';
import MainHeader from '../reusable-components/MainHeader';
import Container from '../reusable-components/Container';

const Homepage = () => {
  return (
    <Container>
      <MainHeader/>
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
export default Homepage;