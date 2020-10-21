import React from 'react';
import styled from 'styled-components';

const Container = ({children}) => {
  return (
    <MainContainer>
    {children}
  </MainContainer>
  )
};
const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 15px;
  /* height:80vh; */
`;
export default Container;
