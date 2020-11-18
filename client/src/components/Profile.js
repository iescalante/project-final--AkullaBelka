import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import Footer from '../reusable-components/Footer';
import { AppContext } from '../AppContext';


const Profile = () => {
  const { userData } = React.useContext(AppContext);

  return(
    <Container>
      <Header pageTitle={"Profile Page"}/>
      <ProfileDiv>
        <PersonalInfo>
          <UserInfo>FIRST NAME : {userData.currentUser.firstName}</UserInfo>
          <UserInfo>LAST NAME : {userData.currentUser.lastName}</UserInfo>
          <UserInfo>E-MAIL : {userData.currentUser.email}</UserInfo>
        </PersonalInfo>
        <FinancialInfo>
          <UserInfo>SCORE : {userData.currentUser.score}</UserInfo>
          <UserInfo>TOTAL BORROWED ($) : {userData.currentUser.totalLoaned}</UserInfo>
          <UserInfo>LOAN LIMIT ($) : {userData.currentUser.loanLimit}</UserInfo>
          <UserInfo>Lender? {userData.currentUser.lenderProfile.lender ? "Yes" : "No"}</UserInfo>
          {userData.currentUser.lenderProfile.lender && 
            (
              <>
                <UserInfo>How much has been lent ($): {userData.currentUser.lenderProfile.totalLoan}</UserInfo>
                <UserInfo>Available loan to lend ($): {userData.currentUser.lenderProfile.availableLoan}</UserInfo>
              </>
            )}
        </FinancialInfo>
      </ProfileDiv>
      <Footer/>
    </Container>
  )
};
const ProfileDiv = styled.div`
  display:flex;
  color: black;
  margin:30px;
  border: 1px solid beige;
  padding: 15px;
  border-radius: 15px;
  font-size: 1.2em;
`;
const PersonalInfo = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  margin: 0 35px;
  align-items: center;
  justify-content: center;
  border-right:1px solid beige;
`;
const FinancialInfo = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  margin: 0 35px;
  align-items: center;
  justify-content: center;
`;
const UserInfo = styled.h2`
  font-weight: bold;
`;
export default Profile;