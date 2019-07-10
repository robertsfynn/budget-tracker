import React from 'react';
import { Row, Column } from 'components';

import styled from 'styled-components';

const StyledTotalTitle = styled.p`
  opacity: 0.5;
  font-family: GTWalsheimPro;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.8;
  letter-spacing: normal;
  color: #1c202e;
`;

const StyledTotal = styled.p`
  font-family: GTWalsheimPro;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.67;
  letter-spacing: normal;
  text-align: right;
  color: #121829;
`;

const Total = ({ total }) => {
  return (
    <Row center>
      <Column offset="30%">
        <StyledTotalTitle>Total</StyledTotalTitle>
      </Column>
      <Column>
        <StyledTotal>{total}€</StyledTotal>
      </Column>
    </Row>
  );
};

export default Total;
