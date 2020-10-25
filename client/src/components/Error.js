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
      <h1>Hey....sorry there's an error somewhere</h1>
      <LogoImage src={Logo} onClick={handleGoLogin} />
      <h2>Click on Logo to go back to the login</h2>
    </>
    )
};
const LogoImage = styled.img`
  border-radius: 50%;
  background-color: lightgrey;
  width: 50px;
  margin-right: 15px;
  cursor: pointer;
`;
export default Error;