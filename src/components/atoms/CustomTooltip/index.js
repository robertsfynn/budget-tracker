import React from 'react';
import styled from 'styled-components';

const StyledTooltip = styled.div`
  background-color: #121829;
  border-radius: 8px;
`;

const StyledTooltipText = styled.p`
  font-family: GTWalsheimPro;
  font-size: 14px;
  padding: 0.4rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <StyledTooltip>
        <StyledTooltipText>{payload[0].value}€</StyledTooltipText>
      </StyledTooltip>
    );
  }

  return null;
};

export default CustomTooltip;
