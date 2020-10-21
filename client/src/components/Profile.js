import React from 'react';
import styled from 'styled-components';
import Container from '../reusable-components/Container';
import Header from '../reusable-components/Header';

const Profile = () => {
  return(
    <Container>
      <Header pageTitle={"Profile Page"}/>
      <div>This is the Profile page!</div>
    </Container>
  )
};
export default Profile;