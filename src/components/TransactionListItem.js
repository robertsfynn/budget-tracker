import React from 'react';
import { Row, Column } from './grid';
import styled from 'styled-components';

const Payee = styled.p`
  font-family: GTWalsheimPro;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.8;
  letter-spacing: normal;
  color: #1c202e;
`;

const Date = styled.p`
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

const Amount = styled.p`
  font-family: GTWalsheimPro;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: right;
  color: #19ea25;
`;

const TransactionListItem = ({ category, payee, date, amount }) => {
  return (
    <Row center>
      <Column>{category}</Column>
      <Column>
        <Payee>{payee}</Payee>
        <Date>{date}</Date>
      </Column>
      <Column>
        <Amount>{amount}</Amount>
      </Column>
    </Row>
  );
};

export default TransactionListItem;
