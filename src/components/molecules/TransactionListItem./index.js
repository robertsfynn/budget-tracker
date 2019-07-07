import React from 'react';
import { Row, Column, CategoryIcons } from '../..';
import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style: none;
  position: relative;

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 30%;
    height: 1px;
    width: 70%;
    border-bottom: solid 0.4px rgba(28, 32, 46, 0.2);
  }
`;

const StyledCategory = styled.div`
  border-radius: 35.3px;
  background-color: #f7f7f7;
  height: 38px;
  width: 38px;
  padding: 12px;
  position: relative;

  > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 55px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const StyledPayee = styled.p`
  font-family: GTWalsheimPro;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.8;
  letter-spacing: normal;
  color: #1c202e;
`;

const StyledDate = styled.p`
  opacity: 0.4;
  font-family: GTWalsheimPro;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.91;
  letter-spacing: normal;
  color: #1c202e;
`;

const StyledAmount = styled.p`
  font-family: GTWalsheimPro;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: right;
  color: #ff3378;
`;

const TransactionListItem = ({ category, payee, date, amount }) => {
  return (
    <StyledListItem>
      <Row center>
        <Column>
          <StyledCategory>
            <CategoryIcons category={category} />
          </StyledCategory>
        </Column>
        <Column>
          <StyledPayee>{payee}</StyledPayee>
          <StyledDate>{date}</StyledDate>
        </Column>
        <Column>
          <StyledAmount>{amount}€</StyledAmount>
        </Column>
      </Row>
    </StyledListItem>
  );
};

export default TransactionListItem;
