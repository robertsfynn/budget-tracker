import React from 'react';
import { FormField, Button, Row, Column } from 'components';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const StyledForm = styled.form`
  animation: 1s ${fadeInAnimation};
`;

const TransactionPayee = ({
  values,
  handleChange,
  nextStep,
  createListItem,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    createListItem('payee', values.payee);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Row center>
        <Column size="70%">
          <FormField
            label="Payee name"
            type="text"
            name="payee"
            value={values.payee}
            onChange={handleChange}
            placeholder="Enter payee name"
            autoFocus
            required
          />
        </Column>
        <Column offset="10%" size="10%">
          <Button type="arrow" />
        </Column>
      </Row>
    </StyledForm>
  );
};

export default TransactionPayee;
