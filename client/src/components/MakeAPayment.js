import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';


const MakeAPayment = () => {
    return (
      <Container>
        <Header pageTitle={"Make a Payment"}/>
        <div>How much you want to pay today?</div>
      </Container>
    )
};

export default MakeAPayment;