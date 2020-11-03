import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';
import { AppContext } from '../AppContext';


const Profile = () => {
  const { userData } = React.useContext(AppContext);

  return(
    <Container>
      <Header pageTitle={"Profile Page"}/>
      <ProfileDiv>
        <UserInfo>FIRST NAME : {userData.currentUser.firstName}</UserInfo>
        <UserInfo>LAST NAME : {userData.currentUser.lastName}</UserInfo>
        <UserInfo>E-MAIL : {userData.currentUser.email}</UserInfo>
        <UserInfo>SCORE : {userData.currentUser.score}</UserInfo>
        <UserInfo>TOTAL LOANED ($) : {userData.currentUser.totalLoaned}</UserInfo>
        <UserInfo>LOAN LIMIT ($) : {userData.currentUser.loanLimit}</UserInfo>
        <UserInfo>Lender? {userData.currentUser.lenderProfile.lender ? "Yes" : "No"}</UserInfo>
        {userData.currentUser.lenderProfile.lender && 
          (
            <>
              <UserInfo>How much has been lent ($): {userData.currentUser.lenderProfile.totalLoan}</UserInfo>
              <UserInfo>Available loan to lend ($): {userData.currentUser.lenderProfile.availableLoan}</UserInfo>
            </>
          )}
      </ProfileDiv>
    </Container>
  )
};
const ProfileDiv = styled.div`
  display:flex;
  flex-direction: column;
  color: black;
  margin-top: 30px;
`;
const UserInfo = styled.h2`
  font-weight: bold;
`;
export default Profile;