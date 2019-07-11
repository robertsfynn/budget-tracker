import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'components';
import CategoryIcon from '../../atoms/CategoryIcon';

const StyledHeader = styled.h4`
  font-family: GTWalsheimPro;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.7;
  letter-spacing: normal;
  color: #121829;
  margin-top: 0;
  text-transform: capitalize;
`;

const StyledSubHeader = styled.h5`
  opacity: 0.5;
  font-family: GTWalsheimPro;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.67;
  letter-spacing: normal;
  color: #121829;
  margin-bottom: 0;
  margin-top: 0;
`;

const TransactionFormList = ({ list }) =>
  list.map((item) => (
    <Row key={item.category}>
      <Column size="15%">
        <CategoryIcon category={item.category} />
      </Column>
      <Column>
        <StyledSubHeader>{item.subheader}</StyledSubHeader>
        <br />
        <StyledHeader>{item.header}</StyledHeader>
      </Column>
    </Row>
  ));

export default TransactionFormList;
