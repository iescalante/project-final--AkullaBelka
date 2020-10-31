import React from 'react';
import styled from 'styled-components';

const SelectedRate = ({availableRate, selectedRate, setSelectedRate}) => {
  const selectRate = (ev) => {
    ev.preventDefault();
    setSelectedRate(ev.target.value);
  };
  
  return (
    <SingleRateForm>
      <InfoLine>Rate: {availableRate.rate}</InfoLine>
      <InfoLine>Grace Period (Days): {availableRate.daysToPayBack}</InfoLine>
      <SelectRateButton onClick={selectRate} type="submit" value={availableRate.rate}>Select This Rate</SelectRateButton>
    </SingleRateForm>
  )
};
const SingleRateForm = styled.form`
  display:flex;
  flex-direction:column;
  margin: 15px 0;
  flex:1;
  text-align:center;
`;
const InfoLine = styled.p`
  font-weight:bold;
`;
const SelectRateButton = styled.button`
  margin: 10px auto;
  width: fit-content;
  background:goldenrod;
  cursor: pointer;
`;
export default SelectedRate;