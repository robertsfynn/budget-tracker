import React from 'react';
import { Row, Column, AuthImage, Title, Box } from 'components';
import { ReactComponent as IncomeIcon } from 'assets/oval-blue.svg';
import { ReactComponent as ExpenseIcon } from 'assets/oval-red.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const TransactionKind = ({ handleChangeBox }) => (
  <form>
    <AuthImage height={210} />
    <Title margin>
      What kind of
      <br />
      transaction it is?
    </Title>
    <Row>
      <Column>
        <Box marginRight name="transaction" value="income" onClick={handleChangeBox}>
          <IncomeIcon name="transaction" value="income" />
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

TransactionKind.propTypes = {
  handleChangeBox: PropTypes.func.isRequired,
};

export default TransactionKind;
