import React from 'react';
import { Label, Input, ArrowButton } from '../../components';
import { Row, Column } from '../../components/grid';
const TransactionPayee = ({ values, handleChange, nextStep }) => {
  return (
    <Row center>
      <Column size="70%">
        <Label>Payee name</Label>
        <Input
          type="text"
          name="payee"
          value={values.payee}
          onChange={handleChange}
          placeholder="Enter payee name"
          required
        />
      </Column>
      <Column offset="10%" size="10%">
        <ArrowButton onClick={nextStep} />
      </Column>
    </Row>
  );
};

export default TransactionPayee;
