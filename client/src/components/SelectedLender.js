import React from 'react';
import styled from 'styled-components';

const SelectedLender = ({lenderId, availableLoan, totalLoan, selectedLender, setSelectedLender}) => {
  const selectLender = (ev) => {
    ev.preventDefault();
    setSelectedLender(ev.target.value);
  };
  
  return (
    <SingleLenderForm>
      <InfoLine>Lender's Id: {lenderId}</InfoLine>
      <InfoLine>How much can be lent: {availableLoan - totalLoan}</InfoLine>
      <SelectLenderButton onClick={selectLender} type="submit" value={lenderId}>Select This Lender</SelectLenderButton>
    </SingleLenderForm>
  )
};
const SingleLenderForm = styled.form`
  display:flex;
  flex-direction:column;
  margin: 15px 0;
  flex:1;
`;
const InfoLine = styled.p`
  font-weight:bold;
`;
const SelectLenderButton = styled.button`
  margin: 10px auto;
  width:fit-content;
  background:goldenrod;
  cursor: pointer;
`;
export default SelectedLender;