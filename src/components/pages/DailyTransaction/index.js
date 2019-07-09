import React, { useContext } from 'react';
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

  return (
    <PageTemplate>
      {Firebase.getCurrentUser() ? (
        <Container>
          <Header>
            <Title>Daily Transactions </Title>
          </Header>
          <TransactionList />
        </Container>
      ) : (
        history.push('/login')
      )}
    </PageTemplate>
  );
};

export default withRouter(DailyTransaction);
