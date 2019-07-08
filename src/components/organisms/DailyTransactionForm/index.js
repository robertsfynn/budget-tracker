import React, { useState } from 'react';
import {
  Container,
  Header,
  Title,
  TransactionKind,
  TransactionPayee,
} from 'components';

const DailyTransactionForm = () => {
  const [values, setValues] = useState({
    transaction: '',
    payee: '',
    category: '',
    amount: '',
    date: new Date(),
  });
  const [step, setStep] = useState(1);
  let currentForm;

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChangeBox = (e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.getAttribute('value');

    setValues({ ...values, [name]: value });
    nextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  switch (step) {
    case 1:
      currentForm = (
        <TransactionKind
          nextStep={nextStep}
          handleChangeBox={handleChangeBox}
          values={values}
        />
      );
      break;
    case 2:
      currentForm = (
        <TransactionPayee
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          nextStep={nextStep}
        />
      );
  }

  return (
    <Container>
      <Header>
        <Title>Add Transaction</Title>
      </Header>
      {currentForm}
    </Container>
  );
};

export default DailyTransactionForm;
