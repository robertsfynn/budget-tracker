import React from 'react';
import { Label, Input, Button, Row, Column } from 'components';
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const fadeInAnimation = keyframes`${slideInLeft}`;

const StyledForm = styled.form`
  animation: 1s ${fadeInAnimation};
`;

const TransactionPayee = ({ values, handleChange, nextStep }) => {
  return (
    <StyledForm>
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
          <Button type="arrow" onClick={nextStep} />
        </Column>
      </Row>
    </StyledForm>
  );
};

export default TransactionPayee;
