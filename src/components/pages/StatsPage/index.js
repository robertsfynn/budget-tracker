import React from 'react';
import {
  Container,
  Row,
  PageTemplate,
  Header,
  Title,
  TransactionStatistic,
} from 'components';

const StatsPage = () => {
  return (
    <PageTemplate>
      <Container>
        <Header>
          <Row center noMargin justifyContent="space-between">
            <Title noMargin>Stats</Title>
          </Row>
        </Header>
        <TransactionStatistic />
      </Container>
    </PageTemplate>
  );
};

export default StatsPage;
