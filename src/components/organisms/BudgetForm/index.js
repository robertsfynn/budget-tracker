/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
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
  CloseIcon,
} from 'components';
import { Link } from 'react-router-dom';

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
  margin-top: 0;
  text-transform: capitalize;
`;

const StyledCategoryIcon = styled.div`
  height: 40px;
`;

const BudgetForm = () => {
  const [values, setValues] = useState({
    category: '',
    budgetName: '',
    budget: '',
  });

  const handleChange = (e) => {
    const name = e.target.getAttribute('name');
    const value = e.target.getAttribute('value')
      ? e.target.getAttribute('value')
      : e.target.value;

    setValues({ ...values, [name]: value });
  };

  console.log(values);

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
                <Box name="category" onClick={handleChange} value={title}>
                  <StyledCategoryIcon>
                    <CategoryIcon category={title} />
                  </StyledCategoryIcon>
                  <StyledText>{title}</StyledText>
                </Box>
              </Column>
            );
          })}
        </Row>
        <Row>
          <FormField
            label="Budget Name"
            type="string"
            name="budgetName"
            required
            onChange={handleChange}
          />
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
      </Container>
    </PageWithoutNavbarTemplate>
  );
};

export default BudgetForm;
