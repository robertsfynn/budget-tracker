/* eslint-disable prefer-destructuring */
import React, { useState, useContext } from 'react';
import {
  Container,
  Row,
  Column,
  Button,
  FormField,
  Categories,
  Box,
  CategoryIcon,
  PageWithoutNavbarTemplate,
  Header,
  Title,
  FirebaseContext,
  CloseIcon,
} from 'components';
import { Link, withRouter } from 'react-router-dom';

import styled from 'styled-components';

const StyledText = styled.p`
  font-family: GTWalsheimPro;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1c202e;
  margin-bottom: 0;
  margin-top: 3rem;
  text-transform: capitalize;
`;

const StyledHeader = styled.h4`
  font-family: GTWalsheimPro;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.7;
  letter-spacing: normal;
  color: #121829;
  margin-top: 3rem;
  text-transform: capitalize;
`;

const StyledCategoryIcon = styled.div`
  height: 40px;
`;

const BudgetForm = ({ history }) => {
  const Firebase = useContext(FirebaseContext);
  const [values, setValues] = useState({
    category: 'car',
    budget: '',
  });

  const handleChange = (e) => {
    const name = e.target.getAttribute('name');
    // Check if the value comes from the box or from an actual input
    const value = e.target.getAttribute('value')
      ? e.target.getAttribute('value')
      : e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Firebase.addBudget(values);
    history.push('/budget');
  };

  return (
    <PageWithoutNavbarTemplate>
      <Container>
        <Header>
          <Title>Create Budget</Title>
          <Link to="/budget">
            <CloseIcon />
          </Link>
        </Header>
        <StyledHeader>Choose category</StyledHeader>
        <form onSubmit={handleSubmit}>
          <Row scrollable>
            {Object.keys(Categories).map((title) => {
              if (
                title === 'empty' ||
                title === 'expense' ||
                title === 'income'
              ) {
                return null;
              }
              return (
                <Column key={title}>
                  <Box
                    active={values.category === title}
                    name="category"
                    onClick={handleChange}
                    value={title}
                  >
                    <StyledCategoryIcon>
                      <CategoryIcon category={title} />
                    </StyledCategoryIcon>
                    <StyledText>{title}</StyledText>
                  </Box>
                </Column>
              );
            })}
          </Row>
          <Row center>
            <Column size="70%">
              <FormField
                label="Enter Budget"
                type="number"
                step="any"
                name="budget"
                onChange={handleChange}
                required
              />
            </Column>
            <Column offset="10%" size="10%">
              <Button type="arrow" />
            </Column>
          </Row>
        </form>
      </Container>
    </PageWithoutNavbarTemplate>
  );
};

export default withRouter(BudgetForm);
