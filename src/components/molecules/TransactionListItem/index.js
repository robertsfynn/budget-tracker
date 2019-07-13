import React from 'react';
import { Row, Column, CategoryIcon } from 'components';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListItem = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;

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
`;

const StyledPayee = styled.p`
  font-family: GTWalsheimPro;
  font-size: 16px;
  font-weight: bold;
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
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: right;
  color: ${({ transaction }) =>
    transaction === 'expense' ? '#ff2525' : '#19ea25'};

  @media (min-width: 768px) {
    padding-right: 1rem;
  }
`;

const TransactionListItem = ({
  category,
  transaction,
  payee,
  date,
  amount,
  id,
  history,
}) => {
  const handleClick = () => {
    history.push({
      pathname: '/create',
      state: { id, category, payee, date: new Date(date), amount },
    });
  };

  return (
    <StyledListItem onClick={handleClick}>
      <Row center>
        <Column md="15%">
          <StyledCategory>
            <CategoryIcon category={category} />
          </StyledCategory>
        </Column>
        <Column>
          <StyledPayee>{payee}</StyledPayee>
          <StyledDate>{date.toDateString()}</StyledDate>
        </Column>
        <Column>
          <StyledAmount transaction={transaction}>{amount}€</StyledAmount>
        </Column>
      </Row>
    </StyledListItem>
  );
};

TransactionListItem.propTypes = {
  category: PropTypes.string.isRequired,
  transaction: PropTypes.string.isRequired,
  payee: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  amount: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(TransactionListItem);
