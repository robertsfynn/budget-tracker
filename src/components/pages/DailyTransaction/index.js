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
import PropTypes from 'prop-types';

const DailyTransaction = ({ history }) => {
  const Firebase = useContext(FirebaseContext);

  return (
    <PageTemplate>
      {Firebase.getCurrentUser() ? (
        <Container>
          <Header>
            <Title noMargin>Daily Transactions </Title>
          </Header>
          <TransactionList />
        </Container>
      ) : (
        history.push('/login')
      )}
    </PageTemplate>
  );
};

DailyTransaction.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(DailyTransaction);
