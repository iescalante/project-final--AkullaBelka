import React from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import Spinner from '../Spinner';
import Container from '../reusable-components/Container';
import Footer from '../reusable-components/Footer';

const Signout = () => {
  const history = useHistory();
    setTimeout(()=>{
      history.push("/")
    },3000);
  return (
    <Container>
      <Message>Thank you for using AkullaBelka!</Message>
      <Message>See you soon!</Message>
      <Spinner/>
      <Footer/>
    </Container>
    )
};
const Message = styled.h1`
  margin:20px auto;
  font-size: 2rem;
`;
export default Signout;