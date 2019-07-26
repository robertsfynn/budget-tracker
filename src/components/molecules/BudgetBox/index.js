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
  height: 10px;
  border-radius: 10px;
`;

const ProgressBar = styled.div`
  background: #33c9ff;
  height: 100%;
  width: 20%;
  border-radius: 10px;
`;

const BudgetBox = () => {
  return (
    <Box>
      <Row noMargin>
        <StyledBudgetTitle>Budget name</StyledBudgetTitle>
      </Row>
      <Row noMargin center>
        <Column>
          <StyledBudgetValue>$2446.90</StyledBudgetValue>
          <StyledBudgetPercentage>50%</StyledBudgetPercentage>
        </Column>
        <Column>
          <StyledBudgetNumber>$5000.00</StyledBudgetNumber>
        </Column>
      </Row>
      <Row>
        <ProgressBarWrapper>
          <ProgressBar style={{ width: '100%' }} />
        </ProgressBarWrapper>
      </Row>
    </Box>
  );
};

export default BudgetBox;
