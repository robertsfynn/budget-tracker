import React from 'react';
import styled from 'styled-components';
import { Box, Row, Column } from 'components';

const StyledBudgetTitle = styled.p`
  font-family: GTWalsheimPro;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aeb1b8;
  margin: 0;
  text-transform: capitalize;
`;

const StyledBudgetValue = styled.p`
  font-family: GTWalsheimPro;
  display: inline;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1c202e;
`;

const StyledBudgetNumber = styled.p`
  font-family: GTWalsheimPro;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aeb1b8;
  float: right;
`;

const StyledBudgetPercentage = styled.span`
  font-family: GTWalsheimPro;
  margin-left: 1rem;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aeb1b8;
`;

const ProgressBarWrapper = styled.div`
  background: #f5f5f5;
  width: 100vw;
  height: 5px;
  border-radius: 10px;
  margin-top: 0.5rem;
`;

const ProgressBar = styled.div`
  background: #ff3378;
  height: 100%;
  width: 20%;
  border-radius: 10px;
`;

const BudgetBox = ({ category, amount, budget }) => {
  const percentage = ((amount / budget) * 100).toFixed(1);

  return (
    <Box>
      <Row noMargin>
        <StyledBudgetTitle>{category}</StyledBudgetTitle>
      </Row>
      <Row noMargin center>
        <Column>
          <StyledBudgetValue>{amount}€</StyledBudgetValue>
          <StyledBudgetPercentage>{percentage}</StyledBudgetPercentage>
        </Column>
        <Column>
          <StyledBudgetNumber>{budget}€</StyledBudgetNumber>
        </Column>
      </Row>
      <Row>
        <ProgressBarWrapper>
          <ProgressBar style={{ width: `${percentage}%` }} />
        </ProgressBarWrapper>
      </Row>
    </Box>
  );
};

export default BudgetBox;
