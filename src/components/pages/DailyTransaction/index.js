import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import {
  PageTemplate,
  Header,
  Title,
  TransactionList,
  Container,
  FirebaseContext,
} from 'components';

const DailyTransaction = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (!Firebase.getCurrentUser()) history.push('/login');
  }, [Firebase, history]);
  return (
    <PageTemplate>
      <Container>
        <Header>
          <Title>Daily Transactions </Title>
        </Header>
        <TransactionList />
      </Container>
    </PageTemplate>
  );
};

export default withRouter(DailyTransaction);
