import React from 'react';
import { FormField, Button, Row, Column } from 'components';

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
            name="amount"
            onChange={handleChange}
            value={values.amount}
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

export default TransactionAmount;
