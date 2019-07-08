import React from 'react';
import styled from 'styled-components';
import img from 'assets/no-transaction.png';
import { Title } from 'components';

const StyledImage = styled.img`
  width: 172px;
  display: block;
  margin: 0 auto;
`;

const StyledSubTitle = styled.p`
  opacity: 0.6;
  font-family: GTWalsheimPro;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #1c202e;
`;

const NoTransactions = () => {
  return (
    <>
      <StyledImage src={img} alt="no tranactions yet" />
      <Title center>No Transactions yet</Title>
      <StyledSubTitle>
        You can add transaction by tapping the + button below
      </StyledSubTitle>
    </>
  );
};

export default NoTransactions;
