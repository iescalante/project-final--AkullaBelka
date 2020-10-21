import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/akullabelka_logo.svg';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../AppContext';

const MainHeader = () => {
  const { userData, setUserData } = React.useContext(AppContext);
  const history = useHistory();

  const handleSignout = () => {
    setUserData({currentUser:{}});
    history.push("/signout");
  }
  return (
    <>
      <Container>
        <LogoImage src={Logo} />
        <TopMessage>Welcome, {userData.currentUser.firstName}!</TopMessage>
        <SignoutLink onClick={handleSignout}>Sign Out</SignoutLink>
      </Container>
    </>
  )
};
const Container = styled.div`
 display:flex;
`;
const LogoImage = styled.img`
  border-radius: 50%;
  background-color: lightgrey;
  width: 50px;
  margin-right: 15px;
`;
const TopMessage = styled.h1`
  flex:8;
  font-size: 2rem;
`;
const SignoutLink = styled.a`
  color:black;
  text-decoration: none;
  flex:1;
  margin:auto;
  cursor: pointer;
`;
export default MainHeader;