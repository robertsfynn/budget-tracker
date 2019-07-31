import React from 'react';
import { Row, Column, Box, CategoryIcon, Categories } from 'components';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const StyledCategoryIcon = styled.div`
  height: 40px;
`;

const TransactionCategory = ({ handleChangeBox }) => (
  <Row scrollable>
    {Object.keys(Categories).map((title) => {
      if (title === 'empty' || title === 'expense' || title === 'income') {
        return null;
      }
      return (
        <Column marginRight={1} key={title}>
          <Box
            name="category"
            value={title}
            onClick={handleChangeBox}
            cursor="pointer"
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
);

TransactionCategory.propTypes = {
  handleChangeBox: PropTypes.func.isRequired,
};

export default TransactionCategory;
