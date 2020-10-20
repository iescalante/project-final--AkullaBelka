import React from 'react';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';
import { AppContext } from "../AppContext";

const Homepage = () => {
  const history = useHistory();
  const { userData, setUserData} = React.useContext(AppContext);
  console.log(userData);

  const handleSignout = (ev) => {
    ev.preventDefault();
    setUserData({currentUser:{}});
    history.push("/signout");
  } 
    return (
        <Container>
          <Header>
            <TopMessage>Welcome, {userData.currentUser.firstName}!</TopMessage>
            <SignoutLink onClick={handleSignout}>Sign Out</SignoutLink>
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
const SignoutLink = styled.a`
  color:black;
  text-decoration: none;
  flex:1;
  margin:auto;
  cursor: pointer;
`;
export default Homepage;