import React from 'react';
import { FormField, Button, Row, Column } from 'components';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import PropTypes from 'prop-types';

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

TransactionPayee.propTypes = {
  values: PropTypes.shape({
    transaction: PropTypes.string,
    payee: PropTypes.string,
    category: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.instanceOf(Date),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  createListItem: PropTypes.func.isRequired,
};

export default TransactionPayee;
