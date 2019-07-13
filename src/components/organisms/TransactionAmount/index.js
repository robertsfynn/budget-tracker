import React from 'react';
import { FormField, Button, Row, Column } from 'components';
import PropTypes from 'prop-types';

const TransactionAmount = ({ values, handleChange, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row center>
        <Column size="70%">
          <FormField
            label="Amount"
            type="number"
            step="any"
            name="amount"
            onChange={handleChange}
            value={values.amount}
            autoFocus
            required
          />
        </Column>
        <Column offset="10%" size="10%">
          <Button type="arrow" />
        </Column>
      </Row>
    </form>
  );
};

TransactionAmount.propTypes = {
  values: PropTypes.PropTypes.shape({
    transaction: PropTypes.string,
    payee: PropTypes.string,
    category: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.instanceOf(Date),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default TransactionAmount;
