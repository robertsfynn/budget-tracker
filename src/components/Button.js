import React from 'react';
import arrow from '../assets/arrow.svg';
import add from '../assets/navbar/add.svg';
import styled from 'styled-components';

const ArrowButton = styled.button`
  background: url(${arrow}) no-repeat center;
  height: 16px;
  width: 10px;
  border: none;
  padding: 1.5rem;
  border-radius: 15px;
  background-color: #cfd4e6;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: #ff3378;
    transition: all 0.3s ease;
  }
`;

const AddButton = styled.button`
  background: url(${add}) no-repeat center;
  box-shadow: 0 8px 16px 0 rgba(255, 51, 120, 0.2);
  background-color: #ff3378;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-size: 30px;
`;

const Button = ({ type, ...props }) => {
  switch (type) {
    case 'arrow':
      return <ArrowButton />;
      break;
    case 'add':
      return <AddButton />;
  }
};

export default Button;
