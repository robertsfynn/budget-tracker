import React, { useState, useContext, useEffect } from 'react';
import { Row, Column, Box, FirebaseContext, CategoryIcon } from 'components';
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

const StyledCategoryIcon = styled.div`
  height: 40px;
`;

const TransactionCategory = ({ handleChangeBox }) => {
  const [categories, setCategories] = useState([]);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.getCategories().then((querySnapshot) => {
      let categories = [];
      querySnapshot.forEach((doc) => {
        const category = doc.data();
        const id = doc.id;

        categories.push({ id, ...category });
      });
      setCategories(categories);
    });
  }, []);

  return (
    <Row>
      {categories.map(({ id, title }) => (
        <Column key={id}>
          <Box name="category" value={title} onClick={handleChangeBox}>
            <StyledCategoryIcon>
              <CategoryIcon category={title} />
            </StyledCategoryIcon>
            <StyledText>{title}</StyledText>
          </Box>
        </Column>
      ))}
    </Row>
  );
};

export default TransactionCategory;
