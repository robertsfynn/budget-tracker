/* eslint-disable default-case */
import React, { useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import {
  PageWithoutNavbarTemplate,
  Container,
  Header,
  Title,
  TransactionKind,
  TransactionPayee,
  TransactionCategory,
  TransactionFormList,
  TransactionAmount,
  FirebaseContext,
  CloseIcon,
} from 'components';

const DailyTransactionForm = ({ history }) => {
  const [values, setValues] = useState({
    transaction: '',
    payee: '',
    category: '',
    amount: '',
    date: new Date(),
  });
  const [list, setList] = useState([]);
  const [step, setStep] = useState(1);
  const Firebase = useContext(FirebaseContext);
  let currentForm;

  const nextStep = (e) => {
    setStep(step + 1);
  };

  const createListItem = (name, value) => {
    switch (name) {
      case 'transaction':
        setList([
          ...list,
          {
            category: value,
            header: value,
            subheader: 'Transaction type',
          },
        ]);
        break;
      case 'payee':
        setList([
          ...list,
          {
            category: 'empty',
            header: value,
            subheader: 'Payee',
          },
        ]);
        break;
      case 'category':
        setList([
          {
            category: values.transaction,
            header: values.transaction,
            subheader: 'Transaction type',
          },
          {
            category: value,
            header: values.payee,
            subheader: 'Payee',
          },
        ]);
    }
  };

  const handleChangeBox = (e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.getAttribute('value');

    setValues({ ...values, [name]: value });
    createListItem(name, value);
    nextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    Firebase.addTransaction(values);
    history.push('/');
  };

  switch (step) {
    case 1:
      currentForm = (
        <TransactionKind
          nextStep={nextStep}
          handleChangeBox={handleChangeBox}
          values={values}
          createListItem={createListItem}
        />
      );
      break;
    case 2:
      currentForm = (
        <TransactionPayee
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          createListItem={createListItem}
        />
      );
      break;
    case 3:
      currentForm = (
        <TransactionCategory
          nextStep={nextStep}
          handleChangeBox={handleChangeBox}
          createListItem={createListItem}
          values={values}
        />
      );
      break;
    case 4:
      currentForm = (
        <TransactionAmount
          nextStep={nextStep}
          handleChange={handleChange}
          createListItem={createListItem}
          values={values}
        />
      );
      break;
    case 5:
      handleSubmit();
  }

  return (
    <PageWithoutNavbarTemplate>
      <Container>
        <Header>
          <Title>Add Transaction</Title>
          <Link to="/">
            <CloseIcon />
          </Link>
        </Header>
        <TransactionFormList list={list} />
        {currentForm}
      </Container>
    </PageWithoutNavbarTemplate>
  );
};

export default withRouter(DailyTransactionForm);
