import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/akullabelka_logo.svg';
import { useHistory } from 'react-router-dom';

const Error = () => {
  const history = useHistory();
  const handleGoLogin = () => {
    history.push("/");
  }
  return (
    <>
      <ErrContainer>
        <h1>Hey....sorry there's an error somewhere</h1>
        <LogoImage src={Logo} onClick={handleGoLogin} />
        <h2>Click on Logo to go back to the login</h2>
      </ErrContainer>
    </>
    )
};
const ErrContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const LogoImage = styled.img`
  border-radius: 50%;
  background-color: lightgrey;
  width: 300px;
  margin: 20px 0;
  cursor: pointer;
`;
export default Error;