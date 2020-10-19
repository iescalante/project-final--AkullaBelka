import React from 'react';
import {useHistory} from "react-router-dom";
import Spinner from '../Spinner';
import styled from 'styled-components';

const Signout = () => {
    const history = useHistory();
    setTimeout(()=>{
        history.push("/")
    },3000);
    return (
        <Container>
        <Message>
          Thank you for using AkullaBelka!
        </Message>
        <Message>
          See you soon!
        </Message>
        <Spinner/>
        </Container>
    )
};
const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: 15px;
`;
const Message = styled.h1`
  margin:20px auto;
  font-size: 2rem;
`;
export default Signout;