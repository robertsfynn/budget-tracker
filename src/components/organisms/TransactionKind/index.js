import React from 'react';
import { Row, Column, AuthImage, Title, Box } from 'components';
import { ReactComponent as IncomeIcon } from 'assets/oval-blue.svg';
import { ReactComponent as ExpenseIcon } from 'assets/oval-red.svg';
import { slideInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const StyledText = styled.p`
  font-family: GTWalsheimPro;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1c202e;
  margin-bottom: 0;
  margin-top: 3rem;
`;



const TransactionKind = ({ handleChangeBox }) => {
  return (
    <form>
      <AuthImage height={240} />
      <Title>
        What kind of
        <br /> transaction it is?
      </Title>
      <Row>
        <Column>
          <Box name="transaction" value="income" onClick={handleChangeBox}>
            <IncomeIcon />
            <StyledText>Income</StyledText>
          </Box>
        </Column>
        <Column>
          <Box name="transaction" value="expense" onClick={handleChangeBox}>
            <ExpenseIcon />
            <StyledText>Expense</StyledText>
          </Box>
        </Column>
      </Row>
    </form>
  );
};

export default TransactionKind;
